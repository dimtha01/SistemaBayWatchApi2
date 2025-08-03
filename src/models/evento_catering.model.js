import pool from "../config/db.js"

const EventoCatering = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM evento_catering")
    return rows
  },

  async findByEventoId(eventoId) {
    const [rows] = await pool.query("SELECT * FROM evento_catering WHERE evento_id = ?", [eventoId])
    return rows
  },

  async findByIds(eventoId, cateringId) {
    const [rows] = await pool.query("SELECT * FROM evento_catering WHERE evento_id = ? AND catering_id = ?", [
      eventoId,
      cateringId,
    ])
    return rows[0]
  },

  async create(eventoCatering) {
    const { evento_id, catering_id, cantidad_personas } = eventoCatering
    const [result] = await pool.query(
      "INSERT INTO evento_catering (evento_id, catering_id, cantidad_personas) VALUES (?, ?, ?)",
      [evento_id, catering_id, cantidad_personas],
    )
    return { evento_id, catering_id, ...eventoCatering }
  },

  async update(eventoId, cateringId, eventoCateringData) {
    const { cantidad_personas } = eventoCateringData
    const [result] = await pool.query(
      "UPDATE evento_catering SET cantidad_personas = ? WHERE evento_id = ? AND catering_id = ?",
      [cantidad_personas, eventoId, cateringId],
    )
    return result.affectedRows > 0
  },

  async remove(eventoId, cateringId) {
    const [result] = await pool.query("DELETE FROM evento_catering WHERE evento_id = ? AND catering_id = ?", [
      eventoId,
      cateringId,
    ])
    return result.affectedRows > 0
  },
}

export default EventoCatering
