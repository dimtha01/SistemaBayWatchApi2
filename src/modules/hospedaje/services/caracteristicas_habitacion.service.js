import CaracteristicaModel from "../models/caracteristicas_habitacion.model.js"

const CaracteristicaHabitacionService = {
  async getAll() {
    return await CaracteristicaModel.findAll()
  },

  async getById(id) {
    return await CaracteristicaModel.findById(id)
  },

  async create(data) {
    return await CaracteristicaModel.create(data)
  },

  async update(id, data) {
    return await CaracteristicaModel.update(id, data)
  },

  async remove(id) {
    return await CaracteristicaModel.remove(id)
  }
}

export default CaracteristicaHabitacionService
