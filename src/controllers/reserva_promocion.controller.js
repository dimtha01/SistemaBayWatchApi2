import ReservaPromocionService from "../services/reserva_promocion.service.js"

const ReservaPromocionController = {
  async getAllReservaPromocion(req, res) {
    try {
      const reservaPromocion = await ReservaPromocionService.getAllReservaPromocion()
      res.json(reservaPromocion)
    } catch (error) {
      console.error("Error fetching reserva_promocion:", error)
      res.status(500).json({ message: "Error al obtener los registros de reserva_promocion", error: error.message })
    }
  },

  async getReservaPromocionByReservaId(req, res) {
    try {
      const { id: reserva_id } = req.params // Aquí 'id' es reserva_id
      const reservaPromocion = await ReservaPromocionService.getReservaPromocionByReservaId(reserva_id)
      if (reservaPromocion && reservaPromocion.length > 0) {
        res.json(reservaPromocion)
      } else {
        res.status(404).json({ message: "Registros de reserva_promocion no encontrados para esta reserva" })
      }
    } catch (error) {
      console.error("Error fetching reserva_promocion by Reserva ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de reserva_promocion", error: error.message })
    }
  },

  async createReservaPromocion(req, res) {
    try {
      const newReservaPromocion = await ReservaPromocionService.createReservaPromocion(req.body)
      res.status(201).json(newReservaPromocion)
    } catch (error) {
      console.error("Error creating reserva_promocion:", error)
      res.status(500).json({ message: "Error al crear el registro de reserva_promocion", error: error.message })
    }
  },

  async updateReservaPromocion(req, res) {
    try {
      const { id: reserva_id } = req.params // 'id' es reserva_id
      const { promocion_id } = req.body // promocion_id viene en el body
      if (!promocion_id) {
        return res.status(400).json({ message: "promocion_id es requerido en el cuerpo para actualizar." })
      }
      // Para esta tabla de relación, la actualización no suele cambiar los IDs,
      // sino que se usa para verificar la existencia o para futuras columnas adicionales.
      // Aquí simplemente verificamos que el registro exista.
      const updated = await ReservaPromocionService.updateReservaPromocion(reserva_id, promocion_id, req.body)
      if (updated) {
        res.json({ message: "Registro de reserva_promocion actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de reserva_promocion no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating reserva_promocion:", error)
      res.status(500).json({ message: "Error al actualizar el registro de reserva_promocion", error: error.message })
    }
  },

  async deleteReservaPromocion(req, res) {
    try {
      const { id: reserva_id } = req.params // 'id' es reserva_id
      const { promocion_id } = req.body // promocion_id viene en el body
      if (!promocion_id) {
        return res.status(400).json({ message: "promocion_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await ReservaPromocionService.deleteReservaPromocion(reserva_id, promocion_id)
      if (deleted) {
        res.json({ message: "Registro de reserva_promocion eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de reserva_promocion no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting reserva_promocion:", error)
      res.status(500).json({ message: "Error al eliminar el registro de reserva_promocion", error: error.message })
    }
  },
}

export default ReservaPromocionController
