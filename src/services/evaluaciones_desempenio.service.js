import EvaluacionDesempenioModel from "../models/evaluaciones_desempenio.model.js"

const EvaluacionDesempenioService = {
  async getAllEvaluaciones() {
    return await EvaluacionDesempenioModel.findAll()
  },

  async getEvaluacionById(id) {
    return await EvaluacionDesempenioModel.findById(id)
  },

  async createEvaluacion(evaluacionData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EvaluacionDesempenioModel.create(evaluacionData)
  },

  async updateEvaluacion(id, evaluacionData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EvaluacionDesempenioModel.update(id, evaluacionData)
  },

  async deleteEvaluacion(id) {
    return await EvaluacionDesempenioModel.remove(id)
  },
}

export default EvaluacionDesempenioService
