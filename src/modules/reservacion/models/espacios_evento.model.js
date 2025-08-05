import pool from "../../../config/db.js"

const EspacioEvento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM espacios_evento")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM espacios_evento WHERE espacio_id = ?", [id])
    return rows[0]
  },

  async create(espacio) {
    const { nombre_espacio, capacidad_maxima, descripcion, precio_hora } = espacio
    const [result] = await pool.query(
      "INSERT INTO espacios_evento (nombre_espacio, capacidad_maxima, descripcion, precio_hora) VALUES (?, ?, ?, ?)",
      [nombre_espacio, capacidad_maxima, descripcion, precio_hora],
    )
    return { espacio_id: result.insertId, ...espacio }
  },

  async update(id, espacio) {
    const { nombre_espacio, capacidad_maxima, descripcion, precio_hora } = espacio
    const [result] = await pool.query(
      "UPDATE espacios_evento SET nombre_espacio = ?, capacidad_maxima = ?, descripcion = ?, precio_hora = ? WHERE espacio_id = ?",
      [nombre_espacio, capacidad_maxima, descripcion, precio_hora, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM espacios_evento WHERE espacio_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default EspacioEvento
