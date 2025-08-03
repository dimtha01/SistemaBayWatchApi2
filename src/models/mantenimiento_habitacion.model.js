import pool from "../config/db.js"

const MantenimientoHabitacion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM mantenimiento_habitacion")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM mantenimiento_habitacion WHERE mantenimiento_id = ?", [id])
    return rows[0]
  },

  async create(mantenimiento) {
    const { habitacion_id, descripcion_problema, fecha_resolucion, estado_mantenimiento, personal_asignado_id } =
      mantenimiento
    const [result] = await pool.query(
      "INSERT INTO mantenimiento_habitacion (habitacion_id, descripcion_problema, fecha_resolucion, estado_mantenimiento, personal_asignado_id) VALUES (?, ?, ?, ?, ?)",
      [habitacion_id, descripcion_problema, fecha_resolucion, estado_mantenimiento, personal_asignado_id],
    )
    return { mantenimiento_id: result.insertId, ...mantenimiento }
  },

  async update(id, mantenimiento) {
    const { habitacion_id, descripcion_problema, fecha_resolucion, estado_mantenimiento, personal_asignado_id } =
      mantenimiento
    const [result] = await pool.query(
      "UPDATE mantenimiento_habitacion SET habitacion_id = ?, descripcion_problema = ?, fecha_resolucion = ?, estado_mantenimiento = ?, personal_asignado_id = ? WHERE mantenimiento_id = ?",
      [habitacion_id, descripcion_problema, fecha_resolucion, estado_mantenimiento, personal_asignado_id, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM mantenimiento_habitacion WHERE mantenimiento_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default MantenimientoHabitacion
