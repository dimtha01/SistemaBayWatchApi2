import pool from "../../../config/db.js"

const AsistenciaModel = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM asistencia")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM asistencia WHERE asistencia_id = ?", [id])
    return rows[0]
  },

  async create({ personal_id, fecha, hora_entrada, hora_salida, estado_asistencia }) {
    const [result] = await pool.query(
      "INSERT INTO asistencia (personal_id, fecha, hora_entrada, hora_salida, estado_asistencia) VALUES (?, ?, ?, ?, ?)",
      [personal_id, fecha, hora_entrada, hora_salida, estado_asistencia]
    )
    return { asistencia_id: result.insertId, personal_id, fecha, hora_entrada, hora_salida, estado_asistencia }
  },

  async update(id, data) {
    const { personal_id, fecha, hora_entrada, hora_salida, estado_asistencia } = data
    const [result] = await pool.query(
      "UPDATE asistencia SET personal_id = ?, fecha = ?, hora_entrada = ?, hora_salida = ?, estado_asistencia = ? WHERE asistencia_id = ?",
      [personal_id, fecha, hora_entrada, hora_salida, estado_asistencia, id]
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM asistencia WHERE asistencia_id = ?", [id])
    return result.affectedRows > 0
  }
}

export default AsistenciaModel
