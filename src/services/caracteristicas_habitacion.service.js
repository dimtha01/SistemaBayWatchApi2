import CaracteristicaHabitacionModel from "../models/caracteristicas_habitacion.model.js"

const CaracteristicaHabitacionService = {
  async getAllCaracteristicas() {
    return await CaracteristicaHabitacionModel.findAll()
  },

  async getCaracteristicaById(id) {
    return await CaracteristicaHabitacionModel.findById(id)
  },

  async createCaracteristica(caracteristicaData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await CaracteristicaHabitacionModel.create(caracteristicaData)
  },

  async updateCaracteristica(id, caracteristicaData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await CaracteristicaHabitacionModel.update(id, caracteristicaData)
  },

  async deleteCaracteristica(id) {
    return await CaracteristicaHabitacionModel.remove(id)
  },
}

export default CaracteristicaHabitacionService
