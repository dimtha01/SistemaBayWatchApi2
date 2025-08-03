import ConsumoServicioModel from "../models/consumos_servicio.model.js"

const ConsumoServicioService = {
  async getAllConsumos() {
    return await ConsumoServicioModel.findAll()
  },

  async getConsumoById(id) {
    return await ConsumoServicioModel.findById(id)
  },

  async createConsumo(consumoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await ConsumoServicioModel.create(consumoData)
  },

  async updateConsumo(id, consumoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await ConsumoServicioModel.update(id, consumoData)
  },

  async deleteConsumo(id) {
    return await ConsumoServicioModel.remove(id)
  },
}

export default ConsumoServicioService
