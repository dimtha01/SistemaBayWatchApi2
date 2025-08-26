// src/middleware/auth.middleware.js
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../../../utils/index.js"
import pool from "../../../config/db.js"

// Protect routes - verify token
export const protect = async (req, res, next) => {
  let token

  // Check if token exists in headers
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1]

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET)

      // Get user from token
      const [users] = await pool.query("SELECT usuario_id, email FROM usuarios WHERE usuario_id = ?", [decoded.id])

      if (users.length === 0) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        })
      }

      const user = users[0]

      // Get user roles
      const [roles] = await pool.query(
        `SELECT r.nombre_rol
         FROM roles r
         JOIN usuario_rol ur ON r.rol_id = ur.rol_id
         WHERE ur.usuario_id = ?`,
        [user.usuario_id]
      )

      user.roles = roles.map(role => role.nombre_rol)

      // Get user permissions based on roles
      const [permissions] = await pool.query(
        `SELECT DISTINCT p.nombre_permiso
         FROM permisos p
         JOIN rol_permiso rp ON p.permiso_id = rp.permiso_id
         JOIN usuario_rol ur ON rp.rol_id = ur.rol_id
         WHERE ur.usuario_id = ?`,
        [user.usuario_id]
      )

      user.permissions = permissions.map(permission => permission.nombre_permiso)

      req.user = user
      next()
    } catch (error) {
      console.error("Auth middleware error:", error)
      res.status(401).json({
        success: false,
        message: "Not authorized, token failed",
      })
    }
  } else {
    res.status(401).json({
      success: false,
      message: "Not authorized, no token",
    })
  }
}
