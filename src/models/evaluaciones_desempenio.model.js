import pool from "../config/db.js"

const EvaluacionDesempenio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM evaluaciones_desempenio")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM evaluaciones_desempenio WHERE evaluacion_id = ?", [id])
    return rows[0]
  },

  async create(evaluacion) {
    const { personal_id, fecha_evaluacion, evaluador_id, puntuacion, comentarios } = evaluacion
    const [result] = await pool.query(
      "INSERT INTO evaluaciones_desempenio (personal_id, fecha_evaluacion, evaluador_id, puntuacion, comentarios) VALUES (?, ?, ?, ?, ?)",
      [personal_id, fecha_evaluacion, evaluador_id, puntuacion, comentarios],
    )
    return { evaluacion_id: result.insertId, ...evaluacion }
  },

  async update(id, evaluacion) {
    const { personal_id, fecha_evaluacion, evaluador_id, puntuacion, comentarios } = evaluacion
    const [result] = await pool.query(
      "UPDATE evaluaciones_desempenio SET personal_id = ?, fecha_evaluacion = ?, evaluador_id = ?, puntuacion = ?, comentarios = ? WHERE evaluacion_id = ?",
      [personal_id, fecha_evaluacion, evaluador_id, puntuacion, comentarios, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM evaluaciones_desempenio WHERE evaluacion_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default EvaluacionDesempenio
