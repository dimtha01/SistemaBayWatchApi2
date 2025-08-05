import HistorialEstadoHabitacionModel from "../models/historial_estado_habitacion.model.js"

const HistorialEstadoHabitacionService = {
  async getAllHistoriales() {
    return await HistorialEstadoHabitacionModel.findAll()
  },

  async getHistorialById(id) {
    return await HistorialEstadoHabitacionModel.findById(id)
  },

  async createHistorial(historialData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await HistorialEstadoHabitacionModel.create(historialData)
  },

  async updateHistorial(id, historialData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await HistorialEstadoHabitacionModel.update(id, historialData)
  },

  async deleteHistorial(id) {
    return await HistorialEstadoHabitacionModel.remove(id)
  },
}

export default HistorialEstadoHabitacionService
