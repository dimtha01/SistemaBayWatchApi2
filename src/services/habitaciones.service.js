import HabitacionModel from "../models/habitaciones.model.js"

const HabitacionService = {
  async getAllHabitaciones() {
    return await HabitacionModel.findAll()
  },

  async getHabitacionById(id) {
    return await HabitacionModel.findById(id)
  },

  async createHabitacion(habitacionData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await HabitacionModel.create(habitacionData)
  },

  async updateHabitacion(id, habitacionData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await HabitacionModel.update(id, habitacionData)
  },

  async deleteHabitacion(id) {
    return await HabitacionModel.remove(id)
  },
}

export default HabitacionService
