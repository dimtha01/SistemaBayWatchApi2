import TurnoModel from "../models/turnos.model.js"

const TurnoService = {
  async getAllTurnos() {
    return await TurnoModel.findAll()
  },

  async getTurnoById(id) {
    return await TurnoModel.findById(id)
  },

  async createTurno(turnoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await TurnoModel.create(turnoData)
  },

  async updateTurno(id, turnoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await TurnoModel.update(id, turnoData)
  },

  async deleteTurno(id) {
    return await TurnoModel.remove(id)
  },
}

export default TurnoService
