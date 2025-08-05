import pool from "../../../config/db.js"

const Servicio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM servicios")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM servicios WHERE servicio_id = ?", [id])
    return rows[0]
  },

  async create(servicio) {
    const { nombre_servicio, descripcion, precio, categoria_id, requiere_inventario } = servicio
    const [result] = await pool.query(
      "INSERT INTO servicios (nombre_servicio, descripcion, precio, categoria_id, requiere_inventario) VALUES (?, ?, ?, ?, ?)",
      [nombre_servicio, descripcion, precio, categoria_id, requiere_inventario],
    )
    return { servicio_id: result.insertId, ...servicio }
  },

  async update(id, servicio) {
    const { nombre_servicio, descripcion, precio, categoria_id, requiere_inventario } = servicio
    const [result] = await pool.query(
      "UPDATE servicios SET nombre_servicio = ?, descripcion = ?, precio = ?, categoria_id = ?, requiere_inventario = ? WHERE servicio_id = ?",
      [nombre_servicio, descripcion, precio, categoria_id, requiere_inventario, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM servicios WHERE servicio_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Servicio
