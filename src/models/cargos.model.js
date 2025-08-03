import pool from "../config/db.js"

const Cargo = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM cargos")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM cargos WHERE cargo_id = ?", [id])
    return rows[0]
  },

  async create(cargo) {
    const { nombre_cargo, descripcion } = cargo
    const [result] = await pool.query("INSERT INTO cargos (nombre_cargo, descripcion) VALUES (?, ?)", [
      nombre_cargo,
      descripcion,
    ])
    return { cargo_id: result.insertId, ...cargo }
  },

  async update(id, cargo) {
    const { nombre_cargo, descripcion } = cargo
    const [result] = await pool.query("UPDATE cargos SET nombre_cargo = ?, descripcion = ? WHERE cargo_id = ?", [
      nombre_cargo,
      descripcion,
      id,
    ])
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM cargos WHERE cargo_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Cargo
