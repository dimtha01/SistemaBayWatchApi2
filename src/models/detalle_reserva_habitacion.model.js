import pool from "../config/db.js"

const DetalleReservaHabitacion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM detalle_reserva_habitacion")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM detalle_reserva_habitacion WHERE detalle_id = ?", [id])
    return rows[0]
  },

  async create(detalle) {
    const { reserva_id, habitacion_id, fecha_detalle, tarifa_noche } = detalle
    const [result] = await pool.query(
      "INSERT INTO detalle_reserva_habitacion (reserva_id, habitacion_id, fecha_detalle, tarifa_noche) VALUES (?, ?, ?, ?)",
      [reserva_id, habitacion_id, fecha_detalle, tarifa_noche],
    )
    return { detalle_id: result.insertId, ...detalle }
  },

  async update(id, detalle) {
    const { reserva_id, habitacion_id, fecha_detalle, tarifa_noche } = detalle
    const [result] = await pool.query(
      "UPDATE detalle_reserva_habitacion SET reserva_id = ?, habitacion_id = ?, fecha_detalle = ?, tarifa_noche = ? WHERE detalle_id = ?",
      [reserva_id, habitacion_id, fecha_detalle, tarifa_noche, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM detalle_reserva_habitacion WHERE detalle_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default DetalleReservaHabitacion
