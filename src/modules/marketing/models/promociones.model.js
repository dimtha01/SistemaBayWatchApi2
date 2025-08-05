import pool from "../../../config/db.js"

const Promocion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM promociones")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM promociones WHERE promocion_id = ?", [id])
    return rows[0]
  },

  async create(promocion) {
    const {
      nombre_promocion,
      descripcion,
      tipo_descuento,
      valor_descuento,
      fecha_inicio,
      fecha_fin,
      codigo_promocion,
    } = promocion
    const [result] = await pool.query(
      "INSERT INTO promociones (nombre_promocion, descripcion, tipo_descuento, valor_descuento, fecha_inicio, fecha_fin, codigo_promocion) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nombre_promocion, descripcion, tipo_descuento, valor_descuento, fecha_inicio, fecha_fin, codigo_promocion],
    )
    return { promocion_id: result.insertId, ...promocion }
  },

  async update(id, promocion) {
    const {
      nombre_promocion,
      descripcion,
      tipo_descuento,
      valor_descuento,
      fecha_inicio,
      fecha_fin,
      codigo_promocion,
    } = promocion
    const [result] = await pool.query(
      "UPDATE promociones SET nombre_promocion = ?, descripcion = ?, tipo_descuento = ?, valor_descuento = ?, fecha_inicio = ?, fecha_fin = ?, codigo_promocion = ? WHERE promocion_id = ?",
      [nombre_promocion, descripcion, tipo_descuento, valor_descuento, fecha_inicio, fecha_fin, codigo_promocion, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM promociones WHERE promocion_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Promocion
