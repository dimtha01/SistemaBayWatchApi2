import EventoEspacioService from "../services/evento_espacio.service.js"

const EventoEspacioController = {
  async getAllEventoEspacio(req, res) {
    try {
      const eventoEspacio = await EventoEspacioService.getAllEventoEspacio()
      res.json(eventoEspacio)
    } catch (error) {
      console.error("Error fetching evento_espacio:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_espacio", error: error.message })
    }
  },

  async getEventoEspacioByEventoId(req, res) {
    try {
      const { id } = req.params // Aquí 'id' es evento_id
      const eventoEspacio = await EventoEspacioService.getEventoEspacioByEventoId(id)
      if (eventoEspacio && eventoEspacio.length > 0) {
        res.json(eventoEspacio)
      } else {
        res.status(404).json({ message: "Registros de evento_espacio no encontrados para este evento" })
      }
    } catch (error) {
      console.error("Error fetching evento_espacio by Evento ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_espacio", error: error.message })
    }
  },

  async createEventoEspacio(req, res) {
    try {
      const newEventoEspacio = await EventoEspacioService.createEventoEspacio(req.body)
      res.status(201).json(newEventoEspacio)
    } catch (error) {
      console.error("Error creating evento_espacio:", error)
      res.status(500).json({ message: "Error al crear el registro de evento_espacio", error: error.message })
    }
  },

  async updateEventoEspacio(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { espacio_id, fecha_uso, hora_inicio, hora_fin } = req.body // espacio_id, fecha_uso, hora_inicio, hora_fin vienen en el body
      if (!espacio_id || !fecha_uso) {
        return res.status(400).json({ message: "espacio_id y fecha_uso son requeridos en el cuerpo para actualizar." })
      }
      const updated = await EventoEspacioService.updateEventoEspacio(evento_id, espacio_id, fecha_uso, {
        hora_inicio,
        hora_fin,
      })
      if (updated) {
        res.json({ message: "Registro de evento_espacio actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_espacio no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating evento_espacio:", error)
      res.status(500).json({ message: "Error al actualizar el registro de evento_espacio", error: error.message })
    }
  },

  async deleteEventoEspacio(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { espacio_id, fecha_uso } = req.body // espacio_id y fecha_uso vienen en el body
      if (!espacio_id || !fecha_uso) {
        return res.status(400).json({ message: "espacio_id y fecha_uso son requeridos en el cuerpo para eliminar." })
      }
      const deleted = await EventoEspacioService.deleteEventoEspacio(evento_id, espacio_id, fecha_uso)
      if (deleted) {
        res.json({ message: "Registro de evento_espacio eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_espacio no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting evento_espacio:", error)
      res.status(500).json({ message: "Error al eliminar el registro de evento_espacio", error: error.message })
    }
  },
}

export default EventoEspacioController
