import pool from "../../../config/db.js"

const Departamento = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM departamentos")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM departamentos WHERE departamento_id = ?", [id])
    return rows[0]
  },

  async create(departamento) {
    const { nombre_departamento } = departamento
    const [result] = await pool.query("INSERT INTO departamentos (nombre_departamento) VALUES (?)", [
      nombre_departamento,
    ])
    return { departamento_id: result.insertId, ...departamento }
  },

  async update(id, departamento) {
    const { nombre_departamento } = departamento
    const [result] = await pool.query("UPDATE departamentos SET nombre_departamento = ? WHERE departamento_id = ?", [
      nombre_departamento,
      id,
    ])
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM departamentos WHERE departamento_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Departamento
