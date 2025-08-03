import pool from "../config/db.js"

const EventoEspacio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM evento_espacio")
    return rows
  },

  async findByEventoId(eventoId) {
    const [rows] = await pool.query("SELECT * FROM evento_espacio WHERE evento_id = ?", [eventoId])
    return rows
  },

  async findByIds(eventoId, espacioId, fechaUso) {
    const [rows] = await pool.query(
      "SELECT * FROM evento_espacio WHERE evento_id = ? AND espacio_id = ? AND fecha_uso = ?",
      [eventoId, espacioId, fechaUso],
    )
    return rows[0]
  },

  async create(eventoEspacio) {
    const { evento_id, espacio_id, fecha_uso, hora_inicio, hora_fin } = eventoEspacio
    const [result] = await pool.query(
      "INSERT INTO evento_espacio (evento_id, espacio_id, fecha_uso, hora_inicio, hora_fin) VALUES (?, ?, ?, ?, ?)",
      [evento_id, espacio_id, fecha_uso, hora_inicio, hora_fin],
    )
    return { evento_id, espacio_id, fecha_uso, ...eventoEspacio }
  },

  async update(eventoId, espacioId, fechaUso, eventoEspacioData) {
    const { hora_inicio, hora_fin } = eventoEspacioData
    const [result] = await pool.query(
      "UPDATE evento_espacio SET hora_inicio = ?, hora_fin = ? WHERE evento_id = ? AND espacio_id = ? AND fecha_uso = ?",
      [hora_inicio, hora_fin, eventoId, espacioId, fechaUso],
    )
    return result.affectedRows > 0
  },

  async remove(eventoId, espacioId, fechaUso) {
    const [result] = await pool.query(
      "DELETE FROM evento_espacio WHERE evento_id = ? AND espacio_id = ? AND fecha_uso = ?",
      [eventoId, espacioId, fechaUso],
    )
    return result.affectedRows > 0
  },
}

export default EventoEspacio
