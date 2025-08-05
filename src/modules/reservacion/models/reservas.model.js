import pool from "../../../config/db.js"

const Reserva = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM reservas")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM reservas WHERE reserva_id = ?", [id])
    return rows[0]
  },

  async create(reserva) {
    const { huesped_id, fecha_entrada, fecha_salida, estado_reserva, total_precio, notas } = reserva
    const [result] = await pool.query(
      "INSERT INTO reservas (huesped_id, fecha_entrada, fecha_salida, estado_reserva, total_precio, notas) VALUES (?, ?, ?, ?, ?, ?)",
      [huesped_id, fecha_entrada, fecha_salida, estado_reserva, total_precio, notas],
    )
    return { reserva_id: result.insertId, ...reserva }
  },

  async update(id, reserva) {
    const { huesped_id, fecha_entrada, fecha_salida, estado_reserva, total_precio, notas } = reserva
    const [result] = await pool.query(
      "UPDATE reservas SET huesped_id = ?, fecha_entrada = ?, fecha_salida = ?, estado_reserva = ?, total_precio = ?, notas = ? WHERE reserva_id = ?",
      [huesped_id, fecha_entrada, fecha_salida, estado_reserva, total_precio, notas, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM reservas WHERE reserva_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Reserva
