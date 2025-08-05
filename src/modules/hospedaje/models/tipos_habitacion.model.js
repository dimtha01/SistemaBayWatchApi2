import pool from "../../../config/db.js"

const TipoHabitacion = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM tipos_habitacion")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM tipos_habitacion WHERE tipo_habitacion_id = ?", [id])
    return rows[0]
  },

  async create(tipoHabitacion) {
    const { nombre_tipo, descripcion, capacidad_maxima, precio_base_noche } = tipoHabitacion
    const [result] = await pool.query(
      "INSERT INTO tipos_habitacion (nombre_tipo, descripcion, capacidad_maxima, precio_base_noche) VALUES (?, ?, ?, ?)",
      [nombre_tipo, descripcion, capacidad_maxima, precio_base_noche],
    )
    return { tipo_habitacion_id: result.insertId, ...tipoHabitacion }
  },

  async update(id, tipoHabitacion) {
    const { nombre_tipo, descripcion, capacidad_maxima, precio_base_noche } = tipoHabitacion
    const [result] = await pool.query(
      "UPDATE tipos_habitacion SET nombre_tipo = ?, descripcion = ?, capacidad_maxima = ?, precio_base_noche = ? WHERE tipo_habitacion_id = ?",
      [nombre_tipo, descripcion, capacidad_maxima, precio_base_noche, id],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM tipos_habitacion WHERE tipo_habitacion_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default TipoHabitacion
