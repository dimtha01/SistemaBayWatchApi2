import pool from "../../../config/db.js"

const Habitacion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM habitaciones")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM habitaciones WHERE habitacion_id = ?", [id])
    return rows[0]
  },

  async create(habitacion) {
    const { numero_habitacion, tipo_habitacion_id, estado, piso, vista } = habitacion
    const [result] = await pool.query(
      "INSERT INTO habitaciones (numero_habitacion, tipo_habitacion_id, estado, piso, vista) VALUES (?, ?, ?, ?, ?)",
      [numero_habitacion, tipo_habitacion_id, estado, piso, vista],
    )
    return { habitacion_id: result.insertId, ...habitacion }
  },

  async update(id, habitacion) {
    const { numero_habitacion, tipo_habitacion_id, estado, piso, vista } = habitacion
    const [result] = await pool.query(
      "UPDATE habitaciones SET numero_habitacion = ?, tipo_habitacion_id = ?, estado = ?, piso = ?, vista = ? WHERE habitacion_id = ?",
      [numero_habitacion, tipo_habitacion_id, estado, piso, vista, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM habitaciones WHERE habitacion_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Habitacion
