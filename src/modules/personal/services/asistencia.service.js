import AsistenciaModel from "../models/asistencia.model.js"

const AsistenciaService = {
  async getAll() {
    return await AsistenciaModel.findAll()
  },

  async getById(id) {
    return await AsistenciaModel.findById(id)
  },

  async create(data) {
    return await AsistenciaModel.create(data)
  },

  async update(id, data) {
    return await AsistenciaModel.update(id, data)
  },

  async remove(id) {
    return await AsistenciaModel.remove(id)
  }
}

export default AsistenciaService
