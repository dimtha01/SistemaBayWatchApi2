import pool from "../../../config/db.js"

const Turno = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM turnos")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM turnos WHERE turno_id = ?", [id])
    return rows[0]
  },

  async create(turno) {
    const { personal_id, fecha_turno, hora_inicio, hora_fin, tipo_turno } = turno
    const [result] = await pool.query(
      "INSERT INTO turnos (personal_id, fecha_turno, hora_inicio, hora_fin, tipo_turno) VALUES (?, ?, ?, ?, ?)",
      [personal_id, fecha_turno, hora_inicio, hora_fin, tipo_turno],
    )
    return { turno_id: result.insertId, ...turno }
  },

  async update(id, turno) {
    const { personal_id, fecha_turno, hora_inicio, hora_fin, tipo_turno } = turno
    const [result] = await pool.query(
      "UPDATE turnos SET personal_id = ?, fecha_turno = ?, hora_inicio = ?, hora_fin = ?, tipo_turno = ? WHERE turno_id = ?",
      [personal_id, fecha_turno, hora_inicio, hora_fin, tipo_turno, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM turnos WHERE turno_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Turno
