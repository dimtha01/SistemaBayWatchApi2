import pool from "../config/db.js"

const InventarioServicio = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM inventario_servicio")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM inventario_servicio WHERE item_inventario_id = ?", [id])
    return rows[0]
  },

  async create(item) {
    const { servicio_id, nombre_item, cantidad_disponible, unidad_medida } = item
    const [result] = await pool.query(
      "INSERT INTO inventario_servicio (servicio_id, nombre_item, cantidad_disponible, unidad_medida) VALUES (?, ?, ?, ?)",
      [servicio_id, nombre_item, cantidad_disponible, unidad_medida],
    )
    return { item_inventario_id: result.insertId, ...item }
  },

  async update(id, item) {
    const { servicio_id, nombre_item, cantidad_disponible, unidad_medida } = item
    const [result] = await pool.query(
      "UPDATE inventario_servicio SET servicio_id = ?, nombre_item = ?, cantidad_disponible = ?, unidad_medida = ? WHERE item_inventario_id = ?",
      [servicio_id, nombre_item, cantidad_disponible, unidad_medida, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM inventario_servicio WHERE item_inventario_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default InventarioServicio
