import pool from "../config/db.js"

const Paquete = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM paquetes")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM paquetes WHERE paquete_id = ?", [id])
    return rows[0]
  },

  async create(paquete) {
    const { nombre_paquete, descripcion, precio_paquete, fecha_inicio, fecha_fin } = paquete
    const [result] = await pool.query(
      "INSERT INTO paquetes (nombre_paquete, descripcion, precio_paquete, fecha_inicio, fecha_fin) VALUES (?, ?, ?, ?, ?)",
      [nombre_paquete, descripcion, precio_paquete, fecha_inicio, fecha_fin],
    )
    return { paquete_id: result.insertId, ...paquete }
  },

  async update(id, paquete) {
    const { nombre_paquete, descripcion, precio_paquete, fecha_inicio, fecha_fin } = paquete
    const [result] = await pool.query(
      "UPDATE paquetes SET nombre_paquete = ?, descripcion = ?, precio_paquete = ?, fecha_inicio = ?, fecha_fin = ? WHERE paquete_id = ?",
      [nombre_paquete, descripcion, precio_paquete, fecha_inicio, fecha_fin, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM paquetes WHERE paquete_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Paquete
