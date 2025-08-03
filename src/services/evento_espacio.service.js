import EventoEspacioModel from "../models/evento_espacio.model.js"

const EventoEspacioService = {
  async getAllEventoEspacio() {
    return await EventoEspacioModel.findAll()
  },

  async getEventoEspacioByEventoId(eventoId) {
    return await EventoEspacioModel.findByEventoId(eventoId)
  },

  async createEventoEspacio(eventoEspacioData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EventoEspacioModel.create(eventoEspacioData)
  },

  async updateEventoEspacio(eventoId, espacioId, fechaUso, eventoEspacioData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EventoEspacioModel.update(eventoId, espacioId, fechaUso, eventoEspacioData)
  },

  async deleteEventoEspacio(eventoId, espacioId, fechaUso) {
    return await EventoEspacioModel.remove(eventoId, espacioId, fechaUso)
  },
}

export default EventoEspacioService
