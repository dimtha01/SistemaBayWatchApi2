import CateringModel from "../models/catering.model.js"

const CateringService = {
  async getAllCatering() {
    return await CateringModel.findAll()
  },

  async getCateringById(id) {
    return await CateringModel.findById(id)
  },

  async createCatering(cateringData) {
    return await CateringModel.create(cateringData)
  },

  async updateCatering(id, cateringData) {
    return await CateringModel.update(id, cateringData)
  },

  async deleteCatering(id) {
    return await CateringModel.remove(id)
  },
}

export default CateringService
