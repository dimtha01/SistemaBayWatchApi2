import TarifaModel from "../models/tarifas.model.js"

const TarifaService = {
  async getAllTarifas() {
    return await TarifaModel.findAll()
  },

  async getTarifaById(id) {
    return await TarifaModel.findById(id)
  },

  async createTarifa(tarifaData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await TarifaModel.create(tarifaData)
  },

  async updateTarifa(id, tarifaData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await TarifaModel.update(id, tarifaData)
  },

  async deleteTarifa(id) {
    return await TarifaModel.remove(id)
  },
}

export default TarifaService
