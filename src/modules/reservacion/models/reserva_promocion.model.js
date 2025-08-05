import pool from "../../../config/db.js"

const ReservaPromocion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM reserva_promocion")
    return rows
  },

  async findByReservaId(reservaId) {
    const [rows] = await pool.query("SELECT * FROM reserva_promocion WHERE reserva_id = ?", [reservaId])
    return rows
  },

  async findByIds(reservaId, promocionId) {
    const [rows] = await pool.query("SELECT * FROM reserva_promocion WHERE reserva_id = ? AND promocion_id = ?", [
      reservaId,
      promocionId,
    ])
    return rows[0]
  },

  async create(reservaPromocion) {
    const { reserva_id, promocion_id } = reservaPromocion
    const [result] = await pool.query("INSERT INTO reserva_promocion (reserva_id, promocion_id) VALUES (?, ?)", [
      reserva_id,
      promocion_id,
    ])
    return { reserva_id, promocion_id, ...reservaPromocion }
  },

  async update(reservaId, promocionId, reservaPromocionData) {
    // Para esta tabla de relación, la actualización no suele cambiar los IDs,
    // sino que se usa para verificar la existencia o para futuras columnas adicionales.
    // Aquí simplemente verificamos que el registro exista.
    const [result] = await pool.query(
      "UPDATE reserva_promocion SET reserva_id = ? WHERE reserva_id = ? AND promocion_id = ?",
      [reservaId, reservaId, promocionId], // No hay campos para actualizar más allá de la clave compuesta
    )
    return result.affectedRows > 0
  },

  async remove(reservaId, promocionId) {
    const [result] = await pool.query("DELETE FROM reserva_promocion WHERE reserva_id = ? AND promocion_id = ?", [
      reservaId,
      promocionId,
    ])
    return result.affectedRows > 0
  },
}

export default ReservaPromocion
