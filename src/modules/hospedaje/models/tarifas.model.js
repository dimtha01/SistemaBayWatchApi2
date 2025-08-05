import pool from "../../../config/db.js"

const Tarifa = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM tarifas")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM tarifas WHERE tarifa_id = ?", [id])
    return rows[0]
  },

  async create(tarifa) {
    const { nombre_tarifa, descripcion, precio_base, tipo_tarifa, fecha_inicio_validez, fecha_fin_validez } = tarifa
    const [result] = await pool.query(
      "INSERT INTO tarifas (nombre_tarifa, descripcion, precio_base, tipo_tarifa, fecha_inicio_validez, fecha_fin_validez) VALUES (?, ?, ?, ?, ?, ?)",
      [nombre_tarifa, descripcion, precio_base, tipo_tarifa, fecha_inicio_validez, fecha_fin_validez],
    )
    return { tarifa_id: result.insertId, ...tarifa }
  },

  async update(id, tarifa) {
    const { nombre_tarifa, descripcion, precio_base, tipo_tarifa, fecha_inicio_validez, fecha_fin_validez } = tarifa
    const [result] = await pool.query(
      "UPDATE tarifas SET nombre_tarifa = ?, descripcion = ?, precio_base = ?, tipo_tarifa = ?, fecha_inicio_validez = ?, fecha_fin_validez = ? WHERE tarifa_id = ?",
      [nombre_tarifa, descripcion, precio_base, tipo_tarifa, fecha_inicio_validez, fecha_fin_validez, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM tarifas WHERE tarifa_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Tarifa
