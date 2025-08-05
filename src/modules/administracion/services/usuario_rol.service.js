import UsuarioRolModel from "../models/usuario_rol.model.js"

const UsuarioRolService = {
  async getAllUsuarioRol() {
    return await UsuarioRolModel.findAll()
  },

  async getUsuarioRolById(id) {
    return await UsuarioRolModel.findById(id)
  },

  async createUsuarioRol(data) {
    return await UsuarioRolModel.create(data)
  },

  async updateUsuarioRol(id, data) {
    return await UsuarioRolModel.update(id, data)
  },

  async deleteUsuarioRol(id) {
    return await UsuarioRolModel.remove(id)
  },
}

export default UsuarioRolService
