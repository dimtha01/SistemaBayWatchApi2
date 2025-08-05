import pool from "../../../config/db.js"

const Rol = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM roles")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM roles WHERE rol_id = ?", [id])
    return rows[0]
  },

  async create(rol) {
    const { nombre_rol } = rol
    const [result] = await pool.query("INSERT INTO roles (nombre_rol) VALUES (?)", [nombre_rol])
    return { rol_id: result.insertId, ...rol }
  },

  async update(id, rol) {
    const { nombre_rol } = rol
    const [result] = await pool.query("UPDATE roles SET nombre_rol = ? WHERE rol_id = ?", [nombre_rol, id])
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM roles WHERE rol_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Rol
