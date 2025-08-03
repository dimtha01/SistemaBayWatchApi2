import pool from "../config/db.js"

const ConsumoServicio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM consumos_servicio")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM consumos_servicio WHERE consumo_id = ?", [id])
    return rows[0]
  },

  async create(consumo) {
    const {
      reserva_id,
      huesped_id,
      habitacion_id,
      servicio_id,
      cantidad,
      precio_unitario,
      total_consumo,
      estado_pago,
    } = consumo
    const [result] = await pool.query(
      "INSERT INTO consumos_servicio (reserva_id, huesped_id, habitacion_id, servicio_id, cantidad, precio_unitario, total_consumo, estado_pago) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [reserva_id, huesped_id, habitacion_id, servicio_id, cantidad, precio_unitario, total_consumo, estado_pago],
    )
    return { consumo_id: result.insertId, ...consumo }
  },

  async update(id, consumo) {
    const {
      reserva_id,
      huesped_id,
      habitacion_id,
      servicio_id,
      cantidad,
      precio_unitario,
      total_consumo,
      estado_pago,
    } = consumo
    const [result] = await pool.query(
      "UPDATE consumos_servicio SET reserva_id = ?, huesped_id = ?, habitacion_id = ?, servicio_id = ?, cantidad = ?, precio_unitario = ?, total_consumo = ?, estado_pago = ? WHERE consumo_id = ?",
      [reserva_id, huesped_id, habitacion_id, servicio_id, cantidad, precio_unitario, total_consumo, estado_pago, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM consumos_servicio WHERE consumo_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default ConsumoServicio
