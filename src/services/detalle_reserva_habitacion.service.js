import DetalleReservaHabitacionModel from "../models/detalle_reserva_habitacion.model.js"

const DetalleReservaHabitacionService = {
  async getAllDetalles() {
    return await DetalleReservaHabitacionModel.findAll()
  },

  async getDetalleById(id) {
    return await DetalleReservaHabitacionModel.findById(id)
  },

  async createDetalle(detalleData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await DetalleReservaHabitacionModel.create(detalleData)
  },

  async updateDetalle(id, detalleData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await DetalleReservaHabitacionModel.update(id, detalleData)
  },

  async deleteDetalle(id) {
    return await DetalleReservaHabitacionModel.remove(id)
  },
}

export default DetalleReservaHabitacionService
