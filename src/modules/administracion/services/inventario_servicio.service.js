import InventarioServicioModel from "../models/inventario_servicio.model.js"

const InventarioServicioService = {
  async getAllInventarioServicio() {
    return await InventarioServicioModel.findAll()
  },

  async getInventarioServicioById(id) {
    return await InventarioServicioModel.findById(id)
  },

  async createInventarioServicio(inventarioServicioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await InventarioServicioModel.create(inventarioServicioData)
  },

  async updateInventarioServicio(id, inventarioServicioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await InventarioServicioModel.update(id, inventarioServicioData)
  },

  async deleteInventarioServicio(id) {
    return await InventarioServicioModel.remove(id)
  },
}

export default InventarioServicioService
