import PermisoModel from "../models/permisos.model.js"

const PermisoService = {
  async getAllPermisos() {
    return await PermisoModel.findAll()
  },

  async getPermisoById(id) {
    return await PermisoModel.findById(id)
  },

  async createPermiso(permisoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await PermisoModel.create(permisoData)
  },

  async updatePermiso(id, permisoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await PermisoModel.update(id, permisoData)
  },

  async deletePermiso(id) {
    return await PermisoModel.remove(id)
  },
}

export default PermisoService
