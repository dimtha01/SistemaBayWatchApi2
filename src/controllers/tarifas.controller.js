import TarifaService from "../services/tarifas.service.js"

const TarifaController = {
  async getAllTarifas(req, res) {
    try {
      const tarifas = await TarifaService.getAllTarifas()
      res.json(tarifas)
    } catch (error) {
      console.error("Error fetching tarifas:", error)
      res.status(500).json({ message: "Error al obtener las tarifas", error: error.message })
    }
  },

  async getTarifaById(req, res) {
    try {
      const { id } = req.params
      const tarifa = await TarifaService.getTarifaById(id)
      if (tarifa) {
        res.json(tarifa)
      } else {
        res.status(404).json({ message: "Tarifa no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching tarifa by ID:", error)
      res.status(500).json({ message: "Error al obtener la tarifa", error: error.message })
    }
  },

  async createTarifa(req, res) {
    try {
      const newTarifa = await TarifaService.createTarifa(req.body)
      res.status(201).json(newTarifa)
    } catch (error) {
      console.error("Error creating tarifa:", error)
      res.status(500).json({ message: "Error al crear la tarifa", error: error.message })
    }
  },

  async updateTarifa(req, res) {
    try {
      const { id } = req.params
      const updated = await TarifaService.updateTarifa(id, req.body)
      if (updated) {
        res.json({ message: "Tarifa actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Tarifa no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating tarifa:", error)
      res.status(500).json({ message: "Error al actualizar la tarifa", error: error.message })
    }
  },

  async deleteTarifa(req, res) {
    try {
      const { id } = req.params
      const deleted = await TarifaService.deleteTarifa(id)
      if (deleted) {
        res.json({ message: "Tarifa eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Tarifa no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting tarifa:", error)
      res.status(500).json({ message: "Error al eliminar la tarifa", error: error.message })
    }
  },
}

export default TarifaController
