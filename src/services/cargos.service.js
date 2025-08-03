import CargoModel from "../models/cargos.model.js"

const CargoService = {
  async getAllCargos() {
    return await CargoModel.findAll()
  },

  async getCargoById(id) {
    return await CargoModel.findById(id)
  },

  async createCargo(cargoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await CargoModel.create(cargoData)
  },

  async updateCargo(id, cargoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await CargoModel.update(id, cargoData)
  },

  async deleteCargo(id) {
    return await CargoModel.remove(id)
  },
}

export default CargoService
