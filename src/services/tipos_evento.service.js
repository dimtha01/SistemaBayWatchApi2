import TipoEventoModel from "../models/tipos_evento.model.js"

const TipoEventoService = {
  async getAllTiposEvento() {
    return await TipoEventoModel.findAll()
  },

  async getTipoEventoById(id) {
    return await TipoEventoModel.findById(id)
  },

  async createTipoEvento(tipoEventoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await TipoEventoModel.create(tipoEventoData)
  },

  async updateTipoEvento(id, tipoEventoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await TipoEventoModel.update(id, tipoEventoData)
  },

  async deleteTipoEvento(id) {
    return await TipoEventoModel.remove(id)
  },
}

export default TipoEventoService
