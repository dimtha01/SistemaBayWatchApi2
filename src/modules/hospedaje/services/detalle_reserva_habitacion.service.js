import DetalleReservaHabitacionModel from "../models/detalle_reserva_habitacion.model.js"

const DetalleReservaHabitacionService = {
  async getAllDetalles() {
    return await DetalleReservaHabitacionModel.findAll()
  },

  async getDetalleById(id) {
    return await DetalleReservaHabitacionModel.findById(id)
  },

  async createDetalle(detalleData) {
    return await DetalleReservaHabitacionModel.create(detalleData)
  },

  async updateDetalle(id, detalleData) {
    return await DetalleReservaHabitacionModel.update(id, detalleData)
  },

  async deleteDetalle(id) {
    return await DetalleReservaHabitacionModel.remove(id)
  },
}

export default DetalleReservaHabitacionService
