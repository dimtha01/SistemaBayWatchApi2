import HistorialEstadoHabitacionService from "../services/historial_estado_habitacion.service.js"

const HistorialEstadoHabitacionController = {
  async getAllHistoriales(req, res) {
    try {
      const historiales = await HistorialEstadoHabitacionService.getAllHistoriales()
      res.json(historiales)
    } catch (error) {
      console.error("Error fetching historial de estado de habitacion:", error)
      res.status(500).json({ message: "Error al obtener el historial de estado de habitación", error: error.message })
    }
  },

  async getHistorialById(req, res) {
    try {
      const { id } = req.params
      const historial = await HistorialEstadoHabitacionService.getHistorialById(id)
      if (historial) {
        res.json(historial)
      } else {
        res.status(404).json({ message: "Historial de estado de habitación no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching historial de estado de habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener el historial de estado de habitación", error: error.message })
    }
  },

  async createHistorial(req, res) {
    try {
      const newHistorial = await HistorialEstadoHabitacionService.createHistorial(req.body)
      res.status(201).json(newHistorial)
    } catch (error) {
      console.error("Error creating historial de estado de habitacion:", error)
      res.status(500).json({ message: "Error al crear el historial de estado de habitación", error: error.message })
    }
  },

  async updateHistorial(req, res) {
    try {
      const { id } = req.params
      const updated = await HistorialEstadoHabitacionService.updateHistorial(id, req.body)
      if (updated) {
        res.json({ message: "Historial de estado de habitación actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Historial de estado de habitación no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating historial de estado de habitacion:", error)
      res
        .status(500)
        .json({ message: "Error al actualizar el historial de estado de habitación", error: error.message })
    }
  },

  async deleteHistorial(req, res) {
    try {
      const { id } = req.params
      const deleted = await HistorialEstadoHabitacionService.deleteHistorial(id)
      if (deleted) {
        res.json({ message: "Historial de estado de habitación eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Historial de estado de habitación no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting historial de estado de habitacion:", error)
      res.status(500).json({ message: "Error al eliminar el historial de estado de habitación", error: error.message })
    }
  },
}

export default HistorialEstadoHabitacionController
