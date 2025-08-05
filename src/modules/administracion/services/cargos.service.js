import CargoModel from "../models/cargos.model.js"

const CargoService = {
  async getAllCargos() {
    return await CargoModel.findAll()
  },

  async getCargoById(id) {
    return await CargoModel.findById(id)
  },

  async createCargo(cargoData) {
    return await CargoModel.create(cargoData)
  },

  async updateCargo(id, cargoData) {
    return await CargoModel.update(id, cargoData)
  },

  async deleteCargo(id) {
    return await CargoModel.remove(id)
  },
}

export default CargoService
