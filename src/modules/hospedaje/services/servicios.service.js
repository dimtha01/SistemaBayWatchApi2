import ServicioModel from "../models/servicios.model.js"

const ServicioService = {
  async getAllServicios() {
    return await ServicioModel.findAll()
  },

  async getServicioById(id) {
    return await ServicioModel.findById(id)
  },

  async createServicio(servicioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await ServicioModel.create(servicioData)
  },

  async updateServicio(id, servicioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await ServicioModel.update(id, servicioData)
  },

  async deleteServicio(id) {
    return await ServicioModel.remove(id)
  },
}

export default ServicioService
