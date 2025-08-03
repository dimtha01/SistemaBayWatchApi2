import EquipamientoEventoService from "../services/equipamiento_evento.service.js"

const EquipamientoEventoController = {
  async getAllEquipamiento(req, res) {
    try {
      const equipamiento = await EquipamientoEventoService.getAllEquipamiento()
      res.json(equipamiento)
    } catch (error) {
      console.error("Error fetching equipamiento de evento:", error)
      res.status(500).json({ message: "Error al obtener el equipamiento de evento", error: error.message })
    }
  },

  async getEquipamientoById(req, res) {
    try {
      const { id } = req.params
      const equipamiento = await EquipamientoEventoService.getEquipamientoById(id)
      if (equipamiento) {
        res.json(equipamiento)
      } else {
        res.status(404).json({ message: "Equipamiento de evento no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching equipamiento de evento by ID:", error)
      res.status(500).json({ message: "Error al obtener el equipamiento de evento", error: error.message })
    }
  },

  async createEquipamiento(req, res) {
    try {
      const newEquipamiento = await EquipamientoEventoService.createEquipamiento(req.body)
      res.status(201).json(newEquipamiento)
    } catch (error) {
      console.error("Error creating equipamiento de evento:", error)
      res.status(500).json({ message: "Error al crear el equipamiento de evento", error: error.message })
    }
  },

  async updateEquipamiento(req, res) {
    try {
      const { id } = req.params
      const updated = await EquipamientoEventoService.updateEquipamiento(id, req.body)
      if (updated) {
        res.json({ message: "Equipamiento de evento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Equipamiento de evento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating equipamiento de evento:", error)
      res.status(500).json({ message: "Error al actualizar el equipamiento de evento", error: error.message })
    }
  },

  async deleteEquipamiento(req, res) {
    try {
      const { id } = req.params
      const deleted = await EquipamientoEventoService.deleteEquipamiento(id)
      if (deleted) {
        res.json({ message: "Equipamiento de evento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Equipamiento de evento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting equipamiento de evento:", error)
      res.status(500).json({ message: "Error al eliminar el equipamiento de evento", error: error.message })
    }
  },
}

export default EquipamientoEventoController
