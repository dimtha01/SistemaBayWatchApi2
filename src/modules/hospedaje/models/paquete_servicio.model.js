import pool from "../../../config/db.js"

const PaqueteServicio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM paquete_servicio")
    return rows
  },

  async findByPaqueteId(paqueteId) {
    const [rows] = await pool.query("SELECT * FROM paquete_servicio WHERE paquete_id = ?", [paqueteId])
    return rows
  },

  async findByIds(paqueteId, servicioId) {
    const [rows] = await pool.query("SELECT * FROM paquete_servicio WHERE paquete_id = ? AND servicio_id = ?", [
      paqueteId,
      servicioId,
    ])
    return rows[0]
  },

  async create(paqueteServicio) {
    const { paquete_id, servicio_id } = paqueteServicio
    const [result] = await pool.query("INSERT INTO paquete_servicio (paquete_id, servicio_id) VALUES (?, ?)", [
      paquete_id,
      servicio_id,
    ])
    return { paquete_id, servicio_id, ...paqueteServicio }
  },

  async update(paqueteId, servicioId, paqueteServicioData) {
    // Para esta tabla de relación, la actualización no suele cambiar los IDs,
    // sino que se usa para verificar la existencia o para futuras columnas adicionales.
    // Aquí simplemente verificamos que el registro exista.
    const [result] = await pool.query(
      "UPDATE paquete_servicio SET paquete_id = ? WHERE paquete_id = ? AND servicio_id = ?",
      [paqueteId, paqueteId, servicioId], // No hay campos para actualizar más allá de la clave compuesta
    )
    return result.affectedRows > 0
  },

  async remove(paqueteId, servicioId) {
    const [result] = await pool.query("DELETE FROM paquete_servicio WHERE paquete_id = ? AND servicio_id = ?", [
      paqueteId,
      servicioId,
    ])
    return result.affectedRows > 0
  },
}

export default PaqueteServicio
