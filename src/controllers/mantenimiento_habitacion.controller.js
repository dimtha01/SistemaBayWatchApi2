import MantenimientoHabitacionService from "../services/mantenimiento_habitacion.service.js"

const MantenimientoHabitacionController = {
  async getAllMantenimientos(req, res) {
    try {
      const mantenimientos = await MantenimientoHabitacionService.getAllMantenimientos()
      res.json(mantenimientos)
    } catch (error) {
      console.error("Error fetching mantenimientos de habitacion:", error)
      res.status(500).json({ message: "Error al obtener los mantenimientos de habitación", error: error.message })
    }
  },

  async getMantenimientoById(req, res) {
    try {
      const { id } = req.params
      const mantenimiento = await MantenimientoHabitacionService.getMantenimientoById(id)
      if (mantenimiento) {
        res.json(mantenimiento)
      } else {
        res.status(404).json({ message: "Mantenimiento de habitación no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching mantenimiento de habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener el mantenimiento de habitación", error: error.message })
    }
  },

  async createMantenimiento(req, res) {
    try {
      const newMantenimiento = await MantenimientoHabitacionService.createMantenimiento(req.body)
      res.status(201).json(newMantenimiento)
    } catch (error) {
      console.error("Error creating mantenimiento de habitacion:", error)
      res.status(500).json({ message: "Error al crear el mantenimiento de habitación", error: error.message })
    }
  },

  async updateMantenimiento(req, res) {
    try {
      const { id } = req.params
      const updated = await MantenimientoHabitacionService.updateMantenimiento(id, req.body)
      if (updated) {
        res.json({ message: "Mantenimiento de habitación actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Mantenimiento de habitación no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating mantenimiento de habitacion:", error)
      res.status(500).json({ message: "Error al actualizar el mantenimiento de habitación", error: error.message })
    }
  },

  async deleteMantenimiento(req, res) {
    try {
      const { id } = req.params
      const deleted = await MantenimientoHabitacionService.deleteMantenimiento(id)
      if (deleted) {
        res.json({ message: "Mantenimiento de habitación eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Mantenimiento de habitación no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting mantenimiento de habitacion:", error)
      res.status(500).json({ message: "Error al eliminar el mantenimiento de habitación", error: error.message })
    }
  },
}

export default MantenimientoHabitacionController
