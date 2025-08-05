import pool from "../../../config/db.js"

const Huesped = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM huespedes")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM huespedes WHERE huesped_id = ?", [id])
    return rows[0]
  },

  async create(huesped) {
    const { nombre, apellido, email, telefono, direccion, fecha_nacimiento, nacionalidad, preferencias } = huesped
    const [result] = await pool.query(
      "INSERT INTO huespedes (nombre, apellido, email, telefono, direccion, fecha_nacimiento, nacionalidad, preferencias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nombre, apellido, email, telefono, direccion, fecha_nacimiento, nacionalidad, preferencias],
    )
    return { huesped_id: result.insertId, ...huesped }
  },

  async update(id, huesped) {
    const { nombre, apellido, email, telefono, direccion, fecha_nacimiento, nacionalidad, preferencias } = huesped
    const [result] = await pool.query(
      "UPDATE huespedes SET nombre = ?, apellido = ?, email = ?, telefono = ?, direccion = ?, fecha_nacimiento = ?, nacionalidad = ?, preferencias = ? WHERE huesped_id = ?",
      [nombre, apellido, email, telefono, direccion, fecha_nacimiento, nacionalidad, preferencias, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM huespedes WHERE huesped_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Huesped
