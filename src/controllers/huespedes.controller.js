import HuespedService from "../services/huespedes.service.js"

const HuespedController = {
  async getAllHuespedes(req, res) {
    try {
      const huespedes = await HuespedService.getAllHuespedes()
      res.json(huespedes)
    } catch (error) {
      console.error("Error fetching huespedes:", error)
      res.status(500).json({ message: "Error al obtener los huéspedes", error: error.message })
    }
  },

  async getHuespedById(req, res) {
    try {
      const { id } = req.params
      const huesped = await HuespedService.getHuespedById(id)
      if (huesped) {
        res.json(huesped)
      } else {
        res.status(404).json({ message: "Huésped no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching huesped by ID:", error)
      res.status(500).json({ message: "Error al obtener el huésped", error: error.message })
    }
  },

  async createHuesped(req, res) {
    try {
      const newHuesped = await HuespedService.createHuesped(req.body)
      res.status(201).json(newHuesped)
    } catch (error) {
      console.error("Error creating huesped:", error)
      res.status(500).json({ message: "Error al crear el huésped", error: error.message })
    }
  },

  async updateHuesped(req, res) {
    try {
      const { id } = req.params
      const updated = await HuespedService.updateHuesped(id, req.body)
      if (updated) {
        res.json({ message: "Huésped actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Huésped no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating huesped:", error)
      res.status(500).json({ message: "Error al actualizar el huésped", error: error.message })
    }
  },

  async deleteHuesped(req, res) {
    try {
      const { id } = req.params
      const deleted = await HuespedService.deleteHuesped(id)
      if (deleted) {
        res.json({ message: "Huésped eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Huésped no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting huesped:", error)
      res.status(500).json({ message: "Error al eliminar el huésped", error: error.message })
    }
  },
}

export default HuespedController
