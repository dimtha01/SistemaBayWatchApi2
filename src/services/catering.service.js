import CateringModel from "../models/catering.model.js"

const CateringService = {
  async getAllCatering() {
    return await CateringModel.findAll()
  },

  async getCateringById(id) {
    return await CateringModel.findById(id)
  },

  async createCatering(cateringData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await CateringModel.create(cateringData)
  },

  async updateCatering(id, cateringData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await CateringModel.update(id, cateringData)
  },

  async deleteCatering(id) {
    return await CateringModel.remove(id)
  },
}

export default CateringService
