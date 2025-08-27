// src/controllers/auth.controller.js
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../../../utils/index.js"
import { findUserByEmail, findUserById } from "../models/AuthModel.js"
import pool from "../../../config/db.js"


// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  })
}

// @desc    Login user & get token
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Por favor, proporcione correo electrónico y contraseña",
      })
    }
    // Check if user exists
    const [user] = await findUserByEmail(email)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Credenciales inválidas",
      })
    }
    console.log(email, password, user.password_hash)


    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password_hash)

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Credenciales inválidas",
      })
    }

    // Generate token
    const token = generateToken(user.usuario_id)

    res.status(200).json({
      success: true,
      token,
      user: {
        usuario_id: user.usuario_id,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Error de inicio de sesión:", error)
    res.status(500).json({
      success: false,
      message: "Error del servidor",
    })
  }
}

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    const userId = req.user.usuario_id; // Assuming userId is available from authentication middleware

    const query = `
      SELECT
          u.usuario_id,
          u.email,
          u.fecha_registro,
          u.ultimo_acceso,
          u.estado_cuenta,

          -- Información personal (unificada)
          COALESCE(p.nombre, h.nombre) as nombre,
          COALESCE(p.apellido, h.apellido) as apellido,
          COALESCE(p.telefono, h.telefono) as telefono,
          COALESCE(p.direccion, h.direccion) as direccion,
          COALESCE(p.fecha_nacimiento, h.fecha_nacimiento) as fecha_nacimiento,

          -- Tipo de usuario
          CASE
              WHEN u.personal_id IS NOT NULL THEN 'Personal'
              WHEN u.huesped_id IS NOT NULL THEN 'Huesped'
              ELSE 'Desconocido'
          END as tipo_usuario,

          -- Información específica de personal
          p.personal_id,
          p.fecha_contratacion,
          p.salario,
          d.nombre_departamento,
          c.nombre_cargo,

          -- Información específica de huésped
          h.huesped_id,
          h.nacionalidad,
          h.preferencias,

          -- Roles y permisos
          GROUP_CONCAT(DISTINCT r.nombre_rol SEPARATOR ', ') as roles,
          GROUP_CONCAT(DISTINCT perm.nombre_permiso SEPARATOR ', ') as permisos

      FROM usuarios u
      LEFT JOIN personal p ON u.personal_id = p.personal_id
      LEFT JOIN huespedes h ON u.huesped_id = h.huesped_id
      LEFT JOIN departamentos d ON p.departamento_id = d.departamento_id
      LEFT JOIN cargos c ON p.cargo_id = c.cargo_id
      LEFT JOIN usuario_rol ur ON u.usuario_id = ur.usuario_id
      LEFT JOIN roles r ON ur.rol_id = r.rol_id
      LEFT JOIN rol_permiso rp ON r.rol_id = rp.rol_id
      LEFT JOIN permisos perm ON rp.permiso_id = perm.permiso_id
      WHERE u.usuario_id = ?
      GROUP BY u.usuario_id;
    `;

    const [rows] = await pool.query(query, [userId]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Perfil de usuario no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      user: rows[0],
    });
  } catch (error) {
    console.error("Error al obtener el perfil del usuario:", error);
    res.status(500).json({
      success: false,
      message: "Error del servidor al obtener el perfil",
    });
  }
}

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Private/Admin
export const register = async (req, res) => {
  try {
    const { email, password, roleName, personal_id, huesped_id } = req.body

    // Validate input: email and password are required
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Por favor, proporcione correo electrónico y contraseña",
      })
    }



    // Check if user already exists
    const existingUser = await findUserByEmail(email)
    console.log(existingUser)

    if (existingUser.length > 0) {
      return res.status(400).json({
        success: false,
        message: "El usuario ya existe con este correo electrónico",
      })
    }

    // Get role by name
    const [roles] = await pool.query("SELECT * FROM roles WHERE nombre_rol = ?", [roleName || "Huesped Regular"])

    if (roles.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Rol inválido",
      })
    }

    const role = roles[0]

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const insertUserSql = "INSERT INTO usuarios (email, password_hash, personal_id, huesped_id) VALUES (?, ?, ?, ?)";
    const insertUserParams = [email, hashedPassword, personal_id || null, huesped_id || null];

    // Create user
    const [result] = await pool.query(insertUserSql, insertUserParams)

    if (result.affectedRows > 0) {
      const usuario_id = result.insertId

      // Assign role to user
      await pool.query("INSERT INTO usuario_rol (usuario_id, rol_id) VALUES (?, ?)", [usuario_id, role.rol_id])

      // Generate token
      const token = generateToken(usuario_id)

      res.status(201).json({
        success: true,
        token,
        user: {
          usuario_id: usuario_id,
          email: email,
          role: role.nombre_rol,
        },
      })
    } else {
      res.status(400).json({
        success: false,
        message: "Datos de usuario inválidos",
      })
    }
  } catch (error) {
    console.error("Error de registro:", error)
    res.status(500).json({
      success: false,
      message: "Error del servidor",
    })
  }
}