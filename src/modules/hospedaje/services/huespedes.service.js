import HuespedModel from "../models/huespedes.model.js"

const HuespedService = {
  async getAllHuespedes() {
    return await HuespedModel.findAll()
  },

  async getHuespedById(id) {
    return await HuespedModel.findById(id)
  },

  async createHuesped(huespedData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await HuespedModel.create(huespedData)
  },

  async updateHuesped(id, huespedData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await HuespedModel.update(id, huespedData)
  },

  async deleteHuesped(id) {
    return await HuespedModel.remove(id)
  },
}

export default HuespedService
