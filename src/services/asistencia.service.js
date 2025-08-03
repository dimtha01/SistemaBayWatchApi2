import AsistenciaModel from "../models/asistencia.model.js"

const AsistenciaService = {
  async getAllAsistencias() {
    return await AsistenciaModel.findAll()
  },

  async getAsistenciaById(id) {
    return await AsistenciaModel.findById(id)
  },

  async createAsistencia(asistenciaData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await AsistenciaModel.create(asistenciaData)
  },

  async updateAsistencia(id, asistenciaData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await AsistenciaModel.update(id, asistenciaData)
  },

  async deleteAsistencia(id) {
    return await AsistenciaModel.remove(id)
  },
}

export default AsistenciaService
