import pool from "../../../config/db.js"

const Evento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM eventos")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM eventos WHERE evento_id = ?", [id])
    return rows[0]
  },

  async create(evento) {
    const {
      nombre_evento,
      tipo_evento_id,
      fecha_inicio,
      fecha_fin,
      huesped_id,
      contacto_externo_nombre,
      contacto_externo_email,
      presupuesto_estimado,
      presupuesto_final,
      estado_evento,
    } = evento
    const [result] = await pool.query(
      "INSERT INTO eventos (nombre_evento, tipo_evento_id, fecha_inicio, fecha_fin, huesped_id, contacto_externo_nombre, contacto_externo_email, presupuesto_estimado, presupuesto_final, estado_evento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombre_evento,
        tipo_evento_id,
        fecha_inicio,
        fecha_fin,
        huesped_id,
        contacto_externo_nombre,
        contacto_externo_email,
        presupuesto_estimado,
        presupuesto_final,
        estado_evento,
      ],
    )
    return { evento_id: result.insertId, ...evento }
  },

  async update(id, evento) {
    const {
      nombre_evento,
      tipo_evento_id,
      fecha_inicio,
      fecha_fin,
      huesped_id,
      contacto_externo_nombre,
      contacto_externo_email,
      presupuesto_estimado,
      presupuesto_final,
      estado_evento,
    } = evento
    const [result] = await pool.query(
      "UPDATE eventos SET nombre_evento = ?, tipo_evento_id = ?, fecha_inicio = ?, fecha_fin = ?, huesped_id = ?, contacto_externo_nombre = ?, contacto_externo_email = ?, presupuesto_estimado = ?, presupuesto_final = ?, estado_evento = ? WHERE evento_id = ?",
      [
        nombre_evento,
        tipo_evento_id,
        fecha_inicio,
        fecha_fin,
        huesped_id,
        contacto_externo_nombre,
        contacto_externo_email,
        presupuesto_estimado,
        presupuesto_final,
        estado_evento,
        id,
      ],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM eventos WHERE evento_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Evento
