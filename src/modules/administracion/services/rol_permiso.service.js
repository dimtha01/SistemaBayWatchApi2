import RolPermisoModel from "../models/rol_permiso.model.js"

const RolPermisoService = {
  async getAllRolPermiso() {
    return await RolPermisoModel.findAll()
  },

  async getRolPermisoByRolId(rolId) {
    return await RolPermisoModel.findByRolId(rolId)
  },

  async createRolPermiso(rolPermisoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await RolPermisoModel.create(rolPermisoData)
  },

  async updateRolPermiso(rolId, permisoId, rolPermisoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await RolPermisoModel.update(rolId, permisoId, rolPermisoData)
  },

  async deleteRolPermiso(rolId, permisoId) {
    return await RolPermisoModel.remove(rolId, permisoId)
  },
}

export default RolPermisoService
