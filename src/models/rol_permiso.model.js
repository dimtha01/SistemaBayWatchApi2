import pool from "../config/db.js"

const RolPermiso = {
  async findAll() {
    const [rows] = await pool.query("SELECT * FROM rol_permiso")
    return rows
  },

  async findByRolId(rolId) {
    const [rows] = await pool.query("SELECT * FROM rol_permiso WHERE rol_id = ?", [rolId])
    return rows
  },

  async findByIds(rolId, permisoId) {
    const [rows] = await pool.query("SELECT * FROM rol_permiso WHERE rol_id = ? AND permiso_id = ?", [rolId, permisoId])
    return rows[0]
  },

  async create(rolPermiso) {
    const { rol_id, permiso_id } = rolPermiso
    const [result] = await pool.query("INSERT INTO rol_permiso (rol_id, permiso_id) VALUES (?, ?)", [
      rol_id,
      permiso_id,
    ])
    return { rol_id, permiso_id, ...rolPermiso }
  },

  async update(rolId, permisoId, rolPermisoData) {
    // Para esta tabla de relación, la actualización no suele cambiar los IDs,
    // sino que se usa para verificar la existencia o para futuras columnas adicionales.
    // Aquí simplemente verificamos que el registro exista.
    const [result] = await pool.query(
      "UPDATE rol_permiso SET rol_id = ? WHERE rol_id = ? AND permiso_id = ?",
      [rolId, rolId, permisoId], // No hay campos para actualizar más allá de la clave compuesta
    )
    return result.affectedRows > 0
  },

  async remove(rolId, permisoId) {
    const [result] = await pool.query("DELETE FROM rol_permiso WHERE rol_id = ? AND permiso_id = ?", [rolId, permisoId])
    return result.affectedRows > 0
  },
}

export default RolPermiso
