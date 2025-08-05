import pool from "../../../config/db.js"

const CaracteristicaModel = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM caracteristicas_habitacion")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM caracteristicas_habitacion WHERE caracteristica_id = ?", [id])
    return rows[0]
  },

  async create({ nombre_caracteristica, descripcion }) {
    const [result] = await pool.query(
      "INSERT INTO caracteristicas_habitacion (nombre_caracteristica, descripcion) VALUES (?, ?)",
      [nombre_caracteristica, descripcion]
    )
    return { caracteristica_id: result.insertId, nombre_caracteristica, descripcion }
  },

  async update(id, { nombre_caracteristica, descripcion }) {
    const [result] = await pool.query(
      "UPDATE caracteristicas_habitacion SET nombre_caracteristica = ?, descripcion = ? WHERE caracteristica_id = ?",
      [nombre_caracteristica, descripcion, id]
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM caracteristicas_habitacion WHERE caracteristica_id = ?", [id])
    return result.affectedRows > 0
  }
}

export default CaracteristicaModel
