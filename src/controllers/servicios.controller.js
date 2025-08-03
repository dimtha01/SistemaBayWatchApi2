import ServicioService from "../services/servicios.service.js"

const ServicioController = {
  async getAllServicios(req, res) {
    try {
      const servicios = await ServicioService.getAllServicios()
      res.json(servicios)
    } catch (error) {
      console.error("Error fetching servicios:", error)
      res.status(500).json({ message: "Error al obtener los servicios", error: error.message })
    }
  },

  async getServicioById(req, res) {
    try {
      const { id } = req.params
      const servicio = await ServicioService.getServicioById(id)
      if (servicio) {
        res.json(servicio)
      } else {
        res.status(404).json({ message: "Servicio no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching servicio by ID:", error)
      res.status(500).json({ message: "Error al obtener el servicio", error: error.message })
    }
  },

  async createServicio(req, res) {
    try {
      const newServicio = await ServicioService.createServicio(req.body)
      res.status(201).json(newServicio)
    } catch (error) {
      console.error("Error creating servicio:", error)
      res.status(500).json({ message: "Error al crear el servicio", error: error.message })
    }
  },

  async updateServicio(req, res) {
    try {
      const { id } = req.params
      const updated = await ServicioService.updateServicio(id, req.body)
      if (updated) {
        res.json({ message: "Servicio actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Servicio no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating servicio:", error)
      res.status(500).json({ message: "Error al actualizar el servicio", error: error.message })
    }
  },

  async deleteServicio(req, res) {
    try {
      const { id } = req.params
      const deleted = await ServicioService.deleteServicio(id)
      if (deleted) {
        res.json({ message: "Servicio eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Servicio no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting servicio:", error)
      res.status(500).json({ message: "Error al eliminar el servicio", error: error.message })
    }
  },
}

export default ServicioController
