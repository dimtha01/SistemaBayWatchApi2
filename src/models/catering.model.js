import pool from "../config/db.js"

const Catering = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM catering")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM catering WHERE catering_id = ?", [id])
    return rows[0]
  },

  async create(catering) {
    const { nombre_menu, descripcion, precio_por_persona } = catering
    const [result] = await pool.query(
      "INSERT INTO catering (nombre_menu, descripcion, precio_por_persona) VALUES (?, ?, ?)",
      [nombre_menu, descripcion, precio_por_persona],
    )
    return { catering_id: result.insertId, ...catering }
  },

  async update(id, catering) {
    const { nombre_menu, descripcion, precio_por_persona } = catering
    const [result] = await pool.query(
      "UPDATE catering SET nombre_menu = ?, descripcion = ?, precio_por_persona = ? WHERE catering_id = ?",
      [nombre_menu, descripcion, precio_por_persona, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM catering WHERE catering_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Catering
