import CateringService from "../services/catering.service.js"

const CateringController = {
  async getAllCatering(req, res) {
    try {
      const catering = await CateringService.getAllCatering()
      res.json(catering)
    } catch (error) {
      console.error("Error fetching catering:", error)
      res.status(500).json({ message: "Error al obtener los menús de catering", error: error.message })
    }
  },

  async getCateringById(req, res) {
    try {
      const { id } = req.params
      const catering = await CateringService.getCateringById(id)
      if (catering) {
        res.json(catering)
      } else {
        res.status(404).json({ message: "Menú de catering no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching catering by ID:", error)
      res.status(500).json({ message: "Error al obtener el menú de catering", error: error.message })
    }
  },

  async createCatering(req, res) {
    try {
      const newCatering = await CateringService.createCatering(req.body)
      res.status(201).json(newCatering)
    } catch (error) {
      console.error("Error creating catering:", error)
      res.status(500).json({ message: "Error al crear el menú de catering", error: error.message })
    }
  },

  async updateCatering(req, res) {
    try {
      const { id } = req.params
      const updated = await CateringService.updateCatering(id, req.body)
      if (updated) {
        res.json({ message: "Menú de catering actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Menú de catering no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating catering:", error)
      res.status(500).json({ message: "Error al actualizar el menú de catering", error: error.message })
    }
  },

  async deleteCatering(req, res) {
    try {
      const { id } = req.params
      const deleted = await CateringService.deleteCatering(id)
      if (deleted) {
        res.json({ message: "Menú de catering eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Menú de catering no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting catering:", error)
      res.status(500).json({ message: "Error al eliminar el menú de catering", error: error.message })
    }
  },
}

export default CateringController
