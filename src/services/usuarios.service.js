import UsuarioModel from "../models/usuarios.model.js"

const UsuarioService = {
  async getAllUsuarios() {
    return await UsuarioModel.findAll()
  },

  async getUsuarioById(id) {
    return await UsuarioModel.findById(id)
  },

  async createUsuario(usuarioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await UsuarioModel.create(usuarioData)
  },

  async updateUsuario(id, usuarioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await UsuarioModel.update(id, usuarioData)
  },

  async deleteUsuario(id) {
    return await UsuarioModel.remove(id)
  },
}

export default UsuarioService
