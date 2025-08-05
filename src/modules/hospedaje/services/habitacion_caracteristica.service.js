import HabitacionCaracteristicaModel from "../models/habitacion_caracteristica.model.js"

const HabitacionCaracteristicaService = {
  async getAllHabitacionCaracteristicas() {
    return await HabitacionCaracteristicaModel.findAll()
  },

  async getHabitacionCaracteristicaByHabitacionId(habitacionId) {
    return await HabitacionCaracteristicaModel.findByHabitacionId(habitacionId)
  },

  async createHabitacionCaracteristica(habitacionCaracteristicaData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await HabitacionCaracteristicaModel.create(habitacionCaracteristicaData)
  },

  async updateHabitacionCaracteristica(habitacionId, caracteristicaId, habitacionCaracteristicaData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await HabitacionCaracteristicaModel.update(habitacionId, caracteristicaId, habitacionCaracteristicaData)
  },

  async deleteHabitacionCaracteristica(habitacionId, caracteristicaId) {
    return await HabitacionCaracteristicaModel.remove(habitacionId, caracteristicaId)
  },
}

export default HabitacionCaracteristicaService
