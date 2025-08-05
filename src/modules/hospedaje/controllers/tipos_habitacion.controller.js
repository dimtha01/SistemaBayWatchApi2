import TipoHabitacionService from "../services/tipos_habitacion.service.js"

const TipoHabitacionController = {
  async getAllTiposHabitacion(req, res) {
    try {
      const tiposHabitacion = await TipoHabitacionService.getAllTiposHabitacion()
      res.json(tiposHabitacion)
    } catch (error) {
      console.error("Error fetching tipos de habitacion:", error)
      res.status(500).json({ message: "Error al obtener los tipos de habitación", error: error.message })
    }
  },

  async getTipoHabitacionById(req, res) {
    try {
      const { id } = req.params
      const tipoHabitacion = await TipoHabitacionService.getTipoHabitacionById(id)
      if (tipoHabitacion) {
        res.json(tipoHabitacion)
      } else {
        res.status(404).json({ message: "Tipo de habitación no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching tipo de habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener el tipo de habitación", error: error.message })
    }
  },

  async createTipoHabitacion(req, res) {
    try {
      const newTipoHabitacion = await TipoHabitacionService.createTipoHabitacion(req.body)
      res.status(201).json(newTipoHabitacion)
    } catch (error) {
      console.error("Error creating tipo de habitacion:", error)
      res.status(500).json({ message: "Error al crear el tipo de habitación", error: error.message })
    }
  },

  async updateTipoHabitacion(req, res) {
    try {
      const { id } = req.params
      const updated = await TipoHabitacionService.updateTipoHabitacion(id, req.body)
      if (updated) {
        res.json({ message: "Tipo de habitación actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Tipo de habitación no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating tipo de habitacion:", error)
      res.status(500).json({ message: "Error al actualizar el tipo de habitación", error: error.message })
    }
  },

  async deleteTipoHabitacion(req, res) {
    try {
      const { id } = req.params
      const deleted = await TipoHabitacionService.deleteTipoHabitacion(id)
      if (deleted) {
        res.json({ message: "Tipo de habitación eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Tipo de habitación no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting tipo de habitacion:", error)
      res.status(500).json({ message: "Error al eliminar el tipo de habitación", error: error.message })
    }
  },
}

export default TipoHabitacionController
