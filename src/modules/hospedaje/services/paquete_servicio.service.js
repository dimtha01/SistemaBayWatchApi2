import PaqueteServicioModel from "../models/paquete_servicio.model.js"

const PaqueteServicioService = {
  async getAllPaqueteServicio() {
    return await PaqueteServicioModel.findAll()
  },

  async getPaqueteServicioByPaqueteId(paqueteId) {
    return await PaqueteServicioModel.findByPaqueteId(paqueteId)
  },

  async createPaqueteServicio(paqueteServicioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await PaqueteServicioModel.create(paqueteServicioData)
  },

  async updatePaqueteServicio(paqueteId, servicioId, paqueteServicioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await PaqueteServicioModel.update(paqueteId, servicioId, paqueteServicioData)
  },

  async deletePaqueteServicio(paqueteId, servicioId) {
    return await PaqueteServicioModel.remove(paqueteId, servicioId)
  },
}

export default PaqueteServicioService
