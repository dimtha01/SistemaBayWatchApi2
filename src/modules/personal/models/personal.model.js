import pool from "../../../config/db.js"

const Personal = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM personal")
    return rows
  },

  async findById(id) {
    const [rows] = await pool.query("SELECT * FROM personal WHERE personal_id = ?", [id])
    return rows[0]
  },

  async create(personal) {
    const {
      nombre,
      apellido,
      email,
      telefono,
      fecha_contratacion,
      salario,
      departamento_id,
      cargo_id,
      fecha_nacimiento,
      direccion,
    } = personal
    const [result] = await pool.query(
      "INSERT INTO personal (nombre, apellido, email, telefono, fecha_contratacion, salario, departamento_id, cargo_id, fecha_nacimiento, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        nombre,
        apellido,
        email,
        telefono,
        fecha_contratacion,
        salario,
        departamento_id,
        cargo_id,
        fecha_nacimiento,
        direccion,
      ],
    )
    return { personal_id: result.insertId, ...personal }
  },

  async update(id, personal) {
    const {
      nombre,
      apellido,
      email,
      telefono,
      fecha_contratacion,
      salario,
      departamento_id,
      cargo_id,
      fecha_nacimiento,
      direccion,
    } = personal
    const [result] = await pool.query(
      "UPDATE personal SET nombre = ?, apellido = ?, email = ?, telefono = ?, fecha_contratacion = ?, salario = ?, departamento_id = ?, cargo_id = ?, fecha_nacimiento = ?, direccion = ? WHERE personal_id = ?",
      [
        nombre,
        apellido,
        email,
        telefono,
        fecha_contratacion,
        salario,
        departamento_id,
        cargo_id,
        fecha_nacimiento,
        direccion,
        id,
      ],
    )
    return result.affectedRows > 0
  },

  async remove(id) {
    const [result] = await pool.query("DELETE FROM personal WHERE personal_id = ?", [id])
    return result.affectedRows > 0
  },
}

export default Personal
