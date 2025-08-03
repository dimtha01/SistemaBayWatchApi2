import EventoCateringModel from "../models/evento_catering.model.js"

const EventoCateringService = {
  async getAllEventoCatering() {
    return await EventoCateringModel.findAll()
  },

  async getEventoCateringByEventoId(eventoId) {
    return await EventoCateringModel.findByEventoId(eventoId)
  },

  async createEventoCatering(eventoCateringData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EventoCateringModel.create(eventoCateringData)
  },

  async updateEventoCatering(eventoId, cateringId, eventoCateringData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EventoCateringModel.update(eventoId, cateringId, eventoCateringData)
  },

  async deleteEventoCatering(eventoId, cateringId) {
    return await EventoCateringModel.remove(eventoId, cateringId)
  },
}

export default EventoCateringService
