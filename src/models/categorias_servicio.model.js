import pool from "../config/db.js"

const CategoriaServicio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM categorias_servicio")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM categorias_servicio WHERE categoria_id = ?", [id])
    return rows[0]
  },

  async create(categoria) {
    const { nombre_categoria, descripcion } = categoria
    const [result] = await pool.query("INSERT INTO categorias_servicio (nombre_categoria, descripcion) VALUES (?, ?)", [
      nombre_categoria,
      descripcion,
    ])
    return { categoria_id: result.insertId, ...categoria }
  },

  async update(id, categoria) {
    const { nombre_categoria, descripcion } = categoria
    const [result] = await pool.query(
      "UPDATE categorias_servicio SET nombre_categoria = ?, descripcion = ? WHERE categoria_id = ?",
      [nombre_categoria, descripcion, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM categorias_servicio WHERE categoria_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default CategoriaServicio
