import EventoEquipamientoModel from "../models/evento_equipamiento.model.js"

const EventoEquipamientoService = {
  async getAllEventoEquipamiento() {
    return await EventoEquipamientoModel.findAll()
  },

  async getEventoEquipamientoByEventoId(eventoId) {
    return await EventoEquipamientoModel.findByEventoId(eventoId)
  },

  async createEventoEquipamiento(eventoEquipamientoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await EventoEquipamientoModel.create(eventoEquipamientoData)
  },

  async updateEventoEquipamiento(eventoId, equipamientoId, eventoEquipamientoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await EventoEquipamientoModel.update(eventoId, equipamientoId, eventoEquipamientoData)
  },

  async deleteEventoEquipamiento(eventoId, equipamientoId) {
    return await EventoEquipamientoModel.remove(eventoId, equipamientoId)
  },
}

export default EventoEquipamientoService
