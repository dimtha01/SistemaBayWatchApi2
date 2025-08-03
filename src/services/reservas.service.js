import ReservaModel from "../models/reservas.model.js"

const ReservaService = {
  async getAllReservas() {
    return await ReservaModel.findAll()
  },

  async getReservaById(id) {
    return await ReservaModel.findById(id)
  },

  async createReserva(reservaData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await ReservaModel.create(reservaData)
  },

  async updateReserva(id, reservaData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await ReservaModel.update(id, reservaData)
  },

  async deleteReserva(id) {
    return await ReservaModel.remove(id)
  },
}

export default ReservaService
