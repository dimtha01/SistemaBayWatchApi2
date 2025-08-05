import pool from "../../../config/db.js"

const UsuarioRol = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM usuario_rol")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM usuario_rol WHERE usuario_id = ?", [id])
    return rows[0]
  },

  async create(data) {
    const { usuario_id, rol_id } = data
    const [result] = await pool.query(
      "INSERT INTO usuario_rol (usuario_id, rol_id) VALUES (?, ?)",
      [usuario_id, rol_id]
    )
    return { id: result.insertId, ...data }
  },

  async update(id, data) {
    const { usuario_id, rol_id } = data
    const [result] = await pool.query(
      "UPDATE usuario_rol SET usuario_id = ?, rol_id = ? WHERE usuario_id = ?",
      [usuario_id, rol_id, id]
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM usuario_rol WHERE usuario_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default UsuarioRol
