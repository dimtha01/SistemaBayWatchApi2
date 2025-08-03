import EspacioEventoModel from "../models/espacios_evento.model.js"

const EspacioEventoService = {
  async getAllEspacios() {
    return await EspacioEventoModel.findAll()
  },

  async getEspacioById(id) {
    return await EspacioEventoModel.findById(id)
  },

  async createEspacio(espacioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EspacioEventoModel.create(espacioData)
  },

  async updateEspacio(id, espacioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EspacioEventoModel.update(id, espacioData)
  },

  async deleteEspacio(id) {
    return await EspacioEventoModel.remove(id)
  },
}

export default EspacioEventoService
