import EventoService from "../services/eventos.service.js"

const EventoController = {
  async getAllEventos(req, res) {
    try {
      const eventos = await EventoService.getAllEventos()
      res.json(eventos)
    } catch (error) {
      console.error("Error fetching eventos:", error)
      res.status(500).json({ message: "Error al obtener los eventos", error: error.message })
    }
  },

  async getEventoById(req, res) {
    try {
      const { id } = req.params
      const evento = await EventoService.getEventoById(id)
      if (evento) {
        res.json(evento)
      } else {
        res.status(404).json({ message: "Evento no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching evento by ID:", error)
      res.status(500).json({ message: "Error al obtener el evento", error: error.message })
    }
  },

  async createEvento(req, res) {
    try {
      const newEvento = await EventoService.createEvento(req.body)
      res.status(201).json(newEvento)
    } catch (error) {
      console.error("Error creating evento:", error)
      res.status(500).json({ message: "Error al crear el evento", error: error.message })
    }
  },

  async updateEvento(req, res) {
    try {
      const { id } = req.params
      const updated = await EventoService.updateEvento(id, req.body)
      if (updated) {
        res.json({ message: "Evento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Evento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating evento:", error)
      res.status(500).json({ message: "Error al actualizar el evento", error: error.message })
    }
  },

  async deleteEvento(req, res) {
    try {
      const { id } = req.params
      const deleted = await EventoService.deleteEvento(id)
      if (deleted) {
        res.json({ message: "Evento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Evento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting evento:", error)
      res.status(500).json({ message: "Error al eliminar el evento", error: error.message })
    }
  },
}

export default EventoController
