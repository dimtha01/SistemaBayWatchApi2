import pool from "../../../config/db.js"

const HistorialEstadoHabitacion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM historial_estado_habitacion")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM historial_estado_habitacion WHERE historial_id = ?", [id])
    return rows[0]
  },

  async create(historial) {
    const { habitacion_id, estado_anterior, estado_nuevo, personal_id } = historial
    const [result] = await pool.query(
      "INSERT INTO historial_estado_habitacion (habitacion_id, estado_anterior, estado_nuevo, personal_id) VALUES (?, ?, ?, ?)",
      [habitacion_id, estado_anterior, estado_nuevo, personal_id],
    )
    return { historial_id: result.insertId, ...historial }
  },

  async update(id, historial) {
    const { habitacion_id, estado_anterior, estado_nuevo, personal_id } = historial
    const [result] = await pool.query(
      "UPDATE historial_estado_habitacion SET habitacion_id = ?, estado_anterior = ?, estado_nuevo = ?, personal_id = ? WHERE historial_id = ?",
      [habitacion_id, estado_anterior, estado_nuevo, personal_id, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM historial_estado_habitacion WHERE historial_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default HistorialEstadoHabitacion
