import EventoModel from "../models/eventos.model.js"

const EventoService = {
  async getAllEventos() {
    return await EventoModel.findAll()
  },

  async getEventoById(id) {
    return await EventoModel.findById(id)
  },

  async createEvento(eventoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EventoModel.create(eventoData)
  },

  async updateEvento(id, eventoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EventoModel.update(id, eventoData)
  },

  async deleteEvento(id) {
    return await EventoModel.remove(id)
  },
}

export default EventoService
