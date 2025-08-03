import ReservaService from "../services/reservas.service.js"

const ReservaController = {
  async getAllReservas(req, res) {
    try {
      const reservas = await ReservaService.getAllReservas()
      res.json(reservas)
    } catch (error) {
      console.error("Error fetching reservas:", error)
      res.status(500).json({ message: "Error al obtener las reservas", error: error.message })
    }
  },

  async getReservaById(req, res) {
    try {
      const { id } = req.params
      const reserva = await ReservaService.getReservaById(id)
      if (reserva) {
        res.json(reserva)
      } else {
        res.status(404).json({ message: "Reserva no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching reserva by ID:", error)
      res.status(500).json({ message: "Error al obtener la reserva", error: error.message })
    }
  },

  async createReserva(req, res) {
    try {
      const newReserva = await ReservaService.createReserva(req.body)
      res.status(201).json(newReserva)
    } catch (error) {
      console.error("Error creating reserva:", error)
      res.status(500).json({ message: "Error al crear la reserva", error: error.message })
    }
  },

  async updateReserva(req, res) {
    try {
      const { id } = req.params
      const updated = await ReservaService.updateReserva(id, req.body)
      if (updated) {
        res.json({ message: "Reserva actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Reserva no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating reserva:", error)
      res.status(500).json({ message: "Error al actualizar la reserva", error: error.message })
    }
  },

  async deleteReserva(req, res) {
    try {
      const { id } = req.params
      const deleted = await ReservaService.deleteReserva(id)
      if (deleted) {
        res.json({ message: "Reserva eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Reserva no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting reserva:", error)
      res.status(500).json({ message: "Error al eliminar la reserva", error: error.message })
    }
  },
}

export default ReservaController
