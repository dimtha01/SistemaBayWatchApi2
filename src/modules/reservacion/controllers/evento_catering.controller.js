import EventoCateringService from "../services/evento_catering.service.js"

const EventoCateringController = {
  async getAllEventoCatering(req, res) {
    try {
      const eventoCatering = await EventoCateringService.getAllEventoCatering()
      res.json(eventoCatering)
    } catch (error) {
      console.error("Error fetching evento_catering:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_catering", error: error.message })
    }
  },

  async getEventoCateringByEventoId(req, res) {
    try {
      const { id } = req.params // Aquí 'id' es evento_id
      const eventoCatering = await EventoCateringService.getEventoCateringByEventoId(id)
      if (eventoCatering && eventoCatering.length > 0) {
        res.json(eventoCatering)
      } else {
        res.status(404).json({ message: "Registros de evento_catering no encontrados para este evento" })
      }
    } catch (error) {
      console.error("Error fetching evento_catering by Evento ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_catering", error: error.message })
    }
  },

  async createEventoCatering(req, res) {
    try {
      const newEventoCatering = await EventoCateringService.createEventoCatering(req.body)
      res.status(201).json(newEventoCatering)
    } catch (error) {
      console.error("Error creating evento_catering:", error)
      res.status(500).json({ message: "Error al crear el registro de evento_catering", error: error.message })
    }
  },

  async updateEventoCatering(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { catering_id, cantidad_personas } = req.body // catering_id y cantidad_personas vienen en el body
      if (!catering_id) {
        return res.status(400).json({ message: "catering_id es requerido en el cuerpo para actualizar." })
      }
      const updated = await EventoCateringService.updateEventoCatering(evento_id, catering_id, { cantidad_personas })
      if (updated) {
        res.json({ message: "Registro de evento_catering actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_catering no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating evento_catering:", error)
      res.status(500).json({ message: "Error al actualizar el registro de evento_catering", error: error.message })
    }
  },

  async deleteEventoCatering(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { catering_id } = req.body // catering_id viene en el body
      if (!catering_id) {
        return res.status(400).json({ message: "catering_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await EventoCateringService.deleteEventoCatering(evento_id, catering_id)
      if (deleted) {
        res.json({ message: "Registro de evento_catering eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_catering no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting evento_catering:", error)
      res.status(500).json({ message: "Error al eliminar el registro de evento_catering", error: error.message })
    }
  },
}

export default EventoCateringController
