import TipoHabitacionModel from "../models/tipos_habitacion.model.js"

const TipoHabitacionService = {
  async getAllTiposHabitacion() {
    return await TipoHabitacionModel.findAll()
  },

  async getTipoHabitacionById(id) {
    return await TipoHabitacionModel.findById(id)
  },

  async createTipoHabitacion(tipoHabitacionData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await TipoHabitacionModel.create(tipoHabitacionData)
  },

  async updateTipoHabitacion(id, tipoHabitacionData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await TipoHabitacionModel.update(id, tipoHabitacionData)
  },

  async deleteTipoHabitacion(id) {
    return await TipoHabitacionModel.remove(id)
  },
}

export default TipoHabitacionService
