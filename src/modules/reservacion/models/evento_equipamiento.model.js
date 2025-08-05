import pool from "../../../config/db.js"

const EventoEquipamiento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM evento_equipamiento")
    return rows
  },

  async findByEventoId(eventoId) {
    const [rows] = await pool.query("SELECT * FROM evento_equipamiento WHERE evento_id = ?", [eventoId])
    return rows
  },

  async findByIds(eventoId, equipamientoId) {
    const [rows] = await pool.query("SELECT * FROM evento_equipamiento WHERE evento_id = ? AND equipamiento_id = ?", [
      eventoId,
      equipamientoId,
    ])
    return rows[0]
  },

  async create(eventoEquipamiento) {
    const { evento_id, equipamiento_id, cantidad } = eventoEquipamiento
    const [result] = await pool.query(
      "INSERT INTO evento_equipamiento (evento_id, equipamiento_id, cantidad) VALUES (?, ?, ?)",
      [evento_id, equipamiento_id, cantidad],
    )
    return { evento_id, equipamiento_id, ...eventoEquipamiento }
  },

  async update(eventoId, equipamientoId, eventoEquipamientoData) {
    const { cantidad } = eventoEquipamientoData
    const [result] = await pool.query(
      "UPDATE evento_equipamiento SET cantidad = ? WHERE evento_id = ? AND equipamiento_id = ?",
      [cantidad, eventoId, equipamientoId],
    )
    return result.affectedRows > 0
  },

  async remove(eventoId, equipamientoId) {
    const [result] = await pool.query("DELETE FROM evento_equipamiento WHERE evento_id = ? AND equipamiento_id = ?", [
      eventoId,
      equipamientoId,
    ])
    return result.affectedRows > 0
  },
}

export default EventoEquipamiento
