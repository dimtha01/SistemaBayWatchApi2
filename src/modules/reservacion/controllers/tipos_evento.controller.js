import TipoEventoService from "../services/tipos_evento.service.js"

const TipoEventoController = {
  async getAllTiposEvento(req, res) {
    try {
      const tiposEvento = await TipoEventoService.getAllTiposEvento()
      res.json(tiposEvento)
    } catch (error) {
      console.error("Error fetching tipos de evento:", error)
      res.status(500).json({ message: "Error al obtener los tipos de evento", error: error.message })
    }
  },

  async getTipoEventoById(req, res) {
    try {
      const { id } = req.params
      const tipoEvento = await TipoEventoService.getTipoEventoById(id)
      if (tipoEvento) {
        res.json(tipoEvento)
      } else {
        res.status(404).json({ message: "Tipo de evento no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching tipo de evento by ID:", error)
      res.status(500).json({ message: "Error al obtener el tipo de evento", error: error.message })
    }
  },

  async createTipoEvento(req, res) {
    try {
      const newTipoEvento = await TipoEventoService.createTipoEvento(req.body)
      res.status(201).json(newTipoEvento)
    } catch (error) {
      console.error("Error creating tipo de evento:", error)
      res.status(500).json({ message: "Error al crear el tipo de evento", error: error.message })
    }
  },

  async updateTipoEvento(req, res) {
    try {
      const { id } = req.params
      const updated = await TipoEventoService.updateTipoEvento(id, req.body)
      if (updated) {
        res.json({ message: "Tipo de evento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Tipo de evento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating tipo de evento:", error)
      res.status(500).json({ message: "Error al actualizar el tipo de evento", error: error.message })
    }
  },

  async deleteTipoEvento(req, res) {
    try {
      const { id } = req.params
      const deleted = await TipoEventoService.deleteTipoEvento(id)
      if (deleted) {
        res.json({ message: "Tipo de evento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Tipo de evento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting tipo de evento:", error)
      res.status(500).json({ message: "Error al eliminar el tipo de evento", error: error.message })
    }
  },
}

export default TipoEventoController
