import ReservaPromocionModel from "../models/reserva_promocion.model.js"

const ReservaPromocionService = {
  async getAllReservaPromocion() {
    return await ReservaPromocionModel.findAll()
  },

  async getReservaPromocionByReservaId(reservaId) {
    return await ReservaPromocionModel.findByReservaId(reservaId)
  },

  async createReservaPromocion(reservaPromocionData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await ReservaPromocionModel.create(reservaPromocionData)
  },

  async updateReservaPromocion(reservaId, promocionId, reservaPromocionData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await ReservaPromocionModel.update(reservaId, promocionId, reservaPromocionData)
  },

  async deleteReservaPromocion(reservaId, promocionId) {
    return await ReservaPromocionModel.remove(reservaId, promocionId)
  },
}

export default ReservaPromocionService
