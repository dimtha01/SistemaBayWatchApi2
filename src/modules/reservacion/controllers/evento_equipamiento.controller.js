import EventoEquipamientoService from "../services/evento_equipamiento.service.js"

const EventoEquipamientoController = {
  async getAllEventoEquipamiento(req, res) {
    try {
      const eventoEquipamiento = await EventoEquipamientoService.getAllEventoEquipamiento()
      res.json(eventoEquipamiento)
    } catch (error) {
      console.error("Error fetching evento_equipamiento:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_equipamiento", error: error.message })
    }
  },

  async getEventoEquipamientoByEventoId(req, res) {
    try {
      const { id } = req.params // Aquí 'id' es evento_id
      const eventoEquipamiento = await EventoEquipamientoService.getEventoEquipamientoByEventoId(id)
      if (eventoEquipamiento && eventoEquipamiento.length > 0) {
        res.json(eventoEquipamiento)
      } else {
        res.status(404).json({ message: "Registros de evento_equipamiento no encontrados para este evento" })
      }
    } catch (error) {
      console.error("Error fetching evento_equipamiento by Evento ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de evento_equipamiento", error: error.message })
    }
  },

  async createEventoEquipamiento(req, res) {
    try {
      const newEventoEquipamiento = await EventoEquipamientoService.createEventoEquipamiento(req.body)
      res.status(201).json(newEventoEquipamiento)
    } catch (error) {
      console.error("Error creating evento_equipamiento:", error)
      res.status(500).json({ message: "Error al crear el registro de evento_equipamiento", error: error.message })
    }
  },

  async updateEventoEquipamiento(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { equipamiento_id, cantidad } = req.body // equipamiento_id y cantidad vienen en el body
      if (!equipamiento_id) {
        return res.status(400).json({ message: "equipamiento_id es requerido en el cuerpo para actualizar." })
      }
      const updated = await EventoEquipamientoService.updateEventoEquipamiento(evento_id, equipamiento_id, {
        cantidad,
      })
      if (updated) {
        res.json({ message: "Registro de evento_equipamiento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_equipamiento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating evento_equipamiento:", error)
      res.status(500).json({ message: "Error al actualizar el registro de evento_equipamiento", error: error.message })
    }
  },

  async deleteEventoEquipamiento(req, res) {
    try {
      const { id: evento_id } = req.params // 'id' es evento_id
      const { equipamiento_id } = req.body // equipamiento_id viene en el body
      if (!equipamiento_id) {
        return res.status(400).json({ message: "equipamiento_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await EventoEquipamientoService.deleteEventoEquipamiento(evento_id, equipamiento_id)
      if (deleted) {
        res.json({ message: "Registro de evento_equipamiento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de evento_equipamiento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting evento_equipamiento:", error)
      res.status(500).json({ message: "Error al eliminar el registro de evento_equipamiento", error: error.message })
    }
  },
}

export default EventoEquipamientoController
