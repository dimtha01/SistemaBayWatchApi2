import RolModel from "../models/roles.model.js"

const RolService = {
  async getAllRoles() {
    return await RolModel.findAll()
  },

  async getRolById(id) {
    return await RolModel.findById(id)
  },

  async createRol(rolData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await RolModel.create(rolData)
  },

  async updateRol(id, rolData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await RolModel.update(id, rolData)
  },

  async deleteRol(id) {
    return await RolModel.remove(id)
  },
}

export default RolService
