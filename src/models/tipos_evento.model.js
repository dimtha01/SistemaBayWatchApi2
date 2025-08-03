import pool from "../config/db.js"

const TipoEvento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM tipos_evento")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM tipos_evento WHERE tipo_evento_id = ?", [id])
    return rows[0]
  },

  async create(tipoEvento) {
    const { nombre_tipo, descripcion } = tipoEvento
    const [result] = await pool.query("INSERT INTO tipos_evento (nombre_tipo, descripcion) VALUES (?, ?)", [
      nombre_tipo,
      descripcion,
    ])
    return { tipo_evento_id: result.insertId, ...tipoEvento }
  },

  async update(id, tipoEvento) {
    const { nombre_tipo, descripcion } = tipoEvento
    const [result] = await pool.query(
      "UPDATE tipos_evento SET nombre_tipo = ?, descripcion = ? WHERE tipo_evento_id = ?",
      [nombre_tipo, descripcion, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM tipos_evento WHERE tipo_evento_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default TipoEvento
