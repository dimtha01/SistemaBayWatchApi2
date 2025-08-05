import HabitacionService from "../services/habitaciones.service.js"

const HabitacionController = {
  async getAllHabitaciones(req, res) {
    try {
      const habitaciones = await HabitacionService.getAllHabitaciones()
      res.json(habitaciones)
    } catch (error) {
      console.error("Error fetching habitaciones:", error)
      res.status(500).json({ message: "Error al obtener las habitaciones", error: error.message })
    }
  },

  async getHabitacionById(req, res) {
    try {
      const { id } = req.params
      const habitacion = await HabitacionService.getHabitacionById(id)
      if (habitacion) {
        res.json(habitacion)
      } else {
        res.status(404).json({ message: "Habitación no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener la habitación", error: error.message })
    }
  },

  async createHabitacion(req, res) {
    try {
      const newHabitacion = await HabitacionService.createHabitacion(req.body)
      res.status(201).json(newHabitacion)
    } catch (error) {
      console.error("Error creating habitacion:", error)
      res.status(500).json({ message: "Error al crear la habitación", error: error.message })
    }
  },

  async updateHabitacion(req, res) {
    try {
      const { id } = req.params
      const updated = await HabitacionService.updateHabitacion(id, req.body)
      if (updated) {
        res.json({ message: "Habitación actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Habitación no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating habitacion:", error)
      res.status(500).json({ message: "Error al actualizar la habitación", error: error.message })
    }
  },

  async deleteHabitacion(req, res) {
    try {
      const { id } = req.params
      const deleted = await HabitacionService.deleteHabitacion(id)
      if (deleted) {
        res.json({ message: "Habitación eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Habitación no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting habitacion:", error)
      res.status(500).json({ message: "Error al eliminar la habitación", error: error.message })
    }
  },
}

export default HabitacionController
