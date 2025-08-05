import pool from "../../../config/db.js"

const Usuario = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM usuarios")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE usuario_id = ?", [id])
    return rows[0]
  },

  async create(usuario) {
    const { email, password_hash, personal_id, huesped_id, estado_cuenta } = usuario
    const [result] = await pool.query(
      "INSERT INTO usuarios (email, password_hash, personal_id, huesped_id, estado_cuenta) VALUES (?, ?, ?, ?, ?)",
      [email, password_hash, personal_id, huesped_id, estado_cuenta],
    )
    return { usuario_id: result.insertId, ...usuario }
  },

  async update(id, usuario) {
    const { email, password_hash, personal_id, huesped_id, estado_cuenta } = usuario
    const [result] = await pool.query(
      "UPDATE usuarios SET email = ?, password_hash = ?, personal_id = ?, huesped_id = ?, estado_cuenta = ? WHERE usuario_id = ?",
      [email, password_hash, personal_id, huesped_id, estado_cuenta, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM usuarios WHERE usuario_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Usuario
