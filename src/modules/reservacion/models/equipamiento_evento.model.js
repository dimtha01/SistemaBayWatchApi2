import pool from "../../../config/db.js"

const EquipamientoEvento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM equipamiento_evento")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM equipamiento_evento WHERE equipamiento_id = ?", [id])
    return rows[0]
  },

  async create(equipamiento) {
    const { nombre_equipamiento, descripcion, precio_alquiler } = equipamiento
    const [result] = await pool.query(
      "INSERT INTO equipamiento_evento (nombre_equipamiento, descripcion, precio_alquiler) VALUES (?, ?, ?)",
      [nombre_equipamiento, descripcion, precio_alquiler],
    )
    return { equipamiento_id: result.insertId, ...equipamiento }
  },

  async update(id, equipamiento) {
    const { nombre_equipamiento, descripcion, precio_alquiler } = equipamiento
    const [result] = await pool.query(
      "UPDATE equipamiento_evento SET nombre_equipamiento = ?, descripcion = ?, precio_alquiler = ? WHERE equipamiento_id = ?",
      [nombre_equipamiento, descripcion, precio_alquiler, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM equipamiento_evento WHERE equipamiento_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default EquipamientoEvento
