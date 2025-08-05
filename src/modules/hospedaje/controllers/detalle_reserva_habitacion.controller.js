import DetalleReservaHabitacionService from "../services/detalle_reserva_habitacion.service.js"

const DetalleReservaHabitacionController = {
  async getAllDetalles(req, res) {
    try {
      const detalles = await DetalleReservaHabitacionService.getAllDetalles()
      res.json(detalles)
    } catch (error) {
      console.error("Error fetching detalles de reserva de habitacion:", error)
      res.status(500).json({ message: "Error al obtener los detalles de reserva de habitación", error: error.message })
    }
  },

  async getDetalleById(req, res) {
    try {
      const { id } = req.params
      const detalle = await DetalleReservaHabitacionService.getDetalleById(id)
      if (detalle) {
        res.json(detalle)
      } else {
        res.status(404).json({ message: "Detalle de reserva de habitación no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching detalle de reserva de habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener el detalle de reserva de habitación", error: error.message })
    }
  },

  async createDetalle(req, res) {
    try {
      const newDetalle = await DetalleReservaHabitacionService.createDetalle(req.body)
      res.status(201).json(newDetalle)
    } catch (error) {
      console.error("Error creating detalle de reserva de habitacion:", error)
      res.status(500).json({ message: "Error al crear el detalle de reserva de habitación", error: error.message })
    }
  },

  async updateDetalle(req, res) {
    try {
      const { id } = req.params
      const updated = await DetalleReservaHabitacionService.updateDetalle(id, req.body)
      if (updated) {
        res.json({ message: "Detalle de reserva de habitación actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Detalle de reserva de habitación no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating detalle de reserva de habitacion:", error)
      res.status(500).json({ message: "Error al actualizar el detalle de reserva de habitación", error: error.message })
    }
  },

  async deleteDetalle(req, res) {
    try {
      const { id } = req.params
      const deleted = await DetalleReservaHabitacionService.deleteDetalle(id)
      if (deleted) {
        res.json({ message: "Detalle de reserva de habitación eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Detalle de reserva de habitación no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting detalle de reserva de habitacion:", error)
      res.status(500).json({ message: "Error al eliminar el detalle de reserva de habitación", error: error.message })
    }
  },
}

export default DetalleReservaHabitacionController
