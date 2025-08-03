import PaqueteModel from "../models/paquetes.model.js"

const PaqueteService = {
  async getAllPaquetes() {
    return await PaqueteModel.findAll()
  },

  async getPaqueteById(id) {
    return await PaqueteModel.findById(id)
  },

  async createPaquete(paqueteData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await PaqueteModel.create(paqueteData)
  },

  async updatePaquete(id, paqueteData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await PaqueteModel.update(id, paqueteData)
  },

  async deletePaquete(id) {
    return await PaqueteModel.remove(id)
  },
}

export default PaqueteService
