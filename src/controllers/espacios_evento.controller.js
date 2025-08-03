import EspacioEventoService from "../services/espacios_evento.service.js"

const EspacioEventoController = {
  async getAllEspacios(req, res) {
    try {
      const espacios = await EspacioEventoService.getAllEspacios()
      res.json(espacios)
    } catch (error) {
      console.error("Error fetching espacios de evento:", error)
      res.status(500).json({ message: "Error al obtener los espacios de evento", error: error.message })
    }
  },

  async getEspacioById(req, res) {
    try {
      const { id } = req.params
      const espacio = await EspacioEventoService.getEspacioById(id)
      if (espacio) {
        res.json(espacio)
      } else {
        res.status(404).json({ message: "Espacio de evento no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching espacio de evento by ID:", error)
      res.status(500).json({ message: "Error al obtener el espacio de evento", error: error.message })
    }
  },

  async createEspacio(req, res) {
    try {
      const newEspacio = await EspacioEventoService.createEspacio(req.body)
      res.status(201).json(newEspacio)
    } catch (error) {
      console.error("Error creating espacio de evento:", error)
      res.status(500).json({ message: "Error al crear el espacio de evento", error: error.message })
    }
  },

  async updateEspacio(req, res) {
    try {
      const { id } = req.params
      const updated = await EspacioEventoService.updateEspacio(id, req.body)
      if (updated) {
        res.json({ message: "Espacio de evento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Espacio de evento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating espacio de evento:", error)
      res.status(500).json({ message: "Error al actualizar el espacio de evento", error: error.message })
    }
  },

  async deleteEspacio(req, res) {
    try {
      const { id } = req.params
      const deleted = await EspacioEventoService.deleteEspacio(id)
      if (deleted) {
        res.json({ message: "Espacio de evento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Espacio de evento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting espacio de evento:", error)
      res.status(500).json({ message: "Error al eliminar el espacio de evento", error: error.message })
    }
  },
}

export default EspacioEventoController
