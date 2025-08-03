import PaqueteService from "../services/paquetes.service.js"

const PaqueteController = {
  async getAllPaquetes(req, res) {
    try {
      const paquetes = await PaqueteService.getAllPaquetes()
      res.json(paquetes)
    } catch (error) {
      console.error("Error fetching paquetes:", error)
      res.status(500).json({ message: "Error al obtener los paquetes", error: error.message })
    }
  },

  async getPaqueteById(req, res) {
    try {
      const { id } = req.params
      const paquete = await PaqueteService.getPaqueteById(id)
      if (paquete) {
        res.json(paquete)
      } else {
        res.status(404).json({ message: "Paquete no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching paquete by ID:", error)
      res.status(500).json({ message: "Error al obtener el paquete", error: error.message })
    }
  },

  async createPaquete(req, res) {
    try {
      const newPaquete = await PaqueteService.createPaquete(req.body)
      res.status(201).json(newPaquete)
    } catch (error) {
      console.error("Error creating paquete:", error)
      res.status(500).json({ message: "Error al crear el paquete", error: error.message })
    }
  },

  async updatePaquete(req, res) {
    try {
      const { id } = req.params
      const updated = await PaqueteService.updatePaquete(id, req.body)
      if (updated) {
        res.json({ message: "Paquete actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Paquete no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating paquete:", error)
      res.status(500).json({ message: "Error al actualizar el paquete", error: error.message })
    }
  },

  async deletePaquete(req, res) {
    try {
      const { id } = req.params
      const deleted = await PaqueteService.deletePaquete(id)
      if (deleted) {
        res.json({ message: "Paquete eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Paquete no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting paquete:", error)
      res.status(500).json({ message: "Error al eliminar el paquete", error: error.message })
    }
  },
}

export default PaqueteController
