import PromocionService from "../services/promociones.service.js"

const PromocionController = {
  async getAllPromociones(req, res) {
    try {
      const promociones = await PromocionService.getAllPromociones()
      res.json(promociones)
    } catch (error) {
      console.error("Error fetching promociones:", error)
      res.status(500).json({ message: "Error al obtener las promociones", error: error.message })
    }
  },

  async getPromocionById(req, res) {
    try {
      const { id } = req.params
      const promocion = await PromocionService.getPromocionById(id)
      if (promocion) {
        res.json(promocion)
      } else {
        res.status(404).json({ message: "Promoción no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching promocion by ID:", error)
      res.status(500).json({ message: "Error al obtener la promoción", error: error.message })
    }
  },

  async createPromocion(req, res) {
    try {
      const newPromocion = await PromocionService.createPromocion(req.body)
      res.status(201).json(newPromocion)
    } catch (error) {
      console.error("Error creating promocion:", error)
      res.status(500).json({ message: "Error al crear la promoción", error: error.message })
    }
  },

  async updatePromocion(req, res) {
    try {
      const { id } = req.params
      const updated = await PromocionService.updatePromocion(id, req.body)
      if (updated) {
        res.json({ message: "Promoción actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Promoción no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating promocion:", error)
      res.status(500).json({ message: "Error al actualizar la promoción", error: error.message })
    }
  },

  async deletePromocion(req, res) {
    try {
      const { id } = req.params
      const deleted = await PromocionService.deletePromocion(id)
      if (deleted) {
        res.json({ message: "Promoción eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Promoción no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting promocion:", error)
      res.status(500).json({ message: "Error al eliminar la promoción", error: error.message })
    }
  },
}

export default PromocionController
