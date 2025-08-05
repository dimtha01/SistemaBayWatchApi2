import pool from "../../../config/db.js"

const Permiso = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM permisos")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM permisos WHERE permiso_id = ?", [id])
    return rows[0]
  },

  async create(permiso) {
    const { nombre_permiso, descripcion } = permiso
    const [result] = await pool.query("INSERT INTO permisos (nombre_permiso, descripcion) VALUES (?, ?)", [
      nombre_permiso,
      descripcion,
    ])
    return { permiso_id: result.insertId, ...permiso }
  },

  async update(id, permiso) {
    const { nombre_permiso, descripcion } = permiso
    const [result] = await pool.query("UPDATE permisos SET nombre_permiso = ?, descripcion = ? WHERE permiso_id = ?", [
      nombre_permiso,
      descripcion,
      id,
    ])
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM permisos WHERE permiso_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Permiso
