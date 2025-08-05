import pool from "../../../config/db.js"

const HabitacionCaracteristica = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM habitacion_caracteristica")
    return rows
  },

  async findByHabitacionId(habitacionId) {
    const [rows] = await pool.query("SELECT * FROM habitacion_caracteristica WHERE habitacion_id = ?", [habitacionId])
    return rows
  },

  async findByIds(habitacionId, caracteristicaId) {
    const [rows] = await pool.query(
      "SELECT * FROM habitacion_caracteristica WHERE habitacion_id = ? AND caracteristica_id = ?",
      [habitacionId, caracteristicaId],
    )
    return rows[0]
  },

  async create(habitacionCaracteristica) {
    const { habitacion_id, caracteristica_id } = habitacionCaracteristica
    const [result] = await pool.query(
      "INSERT INTO habitacion_caracteristica (habitacion_id, caracteristica_id) VALUES (?, ?)",
      [habitacion_id, caracteristica_id],
    )
    return { habitacion_id, caracteristica_id, ...habitacionCaracteristica }
  },

  async update(habitacionId, caracteristicaId, habitacionCaracteristicaData) {
    // Para esta tabla de relación, la actualización no suele cambiar los IDs,
    // sino que se usa para verificar la existencia o para futuras columnas adicionales.
    // Aquí simplemente verificamos que el registro exista.
    const [result] = await pool.query(
      "UPDATE habitacion_caracteristica SET habitacion_id = ? WHERE habitacion_id = ? AND caracteristica_id = ?",
      [habitacionId, habitacionId, caracteristicaId], // No hay campos para actualizar más allá de la clave compuesta
    )
    return result.affectedRows > 0
  },

  async remove(habitacionId, caracteristicaId) {
    const [result] = await pool.query(
      "DELETE FROM habitacion_caracteristica WHERE habitacion_id = ? AND caracteristica_id = ?",
      [habitacionId, caracteristicaId],
    )
    return result.affectedRows > 0
  },
}

export default HabitacionCaracteristica
