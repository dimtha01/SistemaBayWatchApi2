import PromocionModel from "../models/promociones.model.js"

const PromocionService = {
  async getAllPromociones() {
    return await PromocionModel.findAll()
  },

  async getPromocionById(id) {
    return await PromocionModel.findById(id)
  },

  async createPromocion(promocionData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await PromocionModel.create(promocionData)
  },

  async updatePromocion(id, promocionData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await PromocionModel.update(id, promocionData)
  },

  async deletePromocion(id) {
    return await PromocionModel.remove(id)
  },
}

export default PromocionService
