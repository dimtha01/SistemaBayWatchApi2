import PaqueteServicioService from "../services/paquete_servicio.service.js"

const PaqueteServicioController = {
  async getAllPaqueteServicio(req, res) {
    try {
      const paqueteServicio = await PaqueteServicioService.getAllPaqueteServicio()
      res.json(paqueteServicio)
    } catch (error) {
      console.error("Error fetching paquete_servicio:", error)
      res.status(500).json({ message: "Error al obtener los registros de paquete_servicio", error: error.message })
    }
  },

  async getPaqueteServicioByPaqueteId(req, res) {
    try {
      const { id: paquete_id } = req.params // 'id' es paquete_id
      const paqueteServicio = await PaqueteServicioService.getPaqueteServicioByPaqueteId(paquete_id)
      if (paqueteServicio && paqueteServicio.length > 0) {
        res.json(paqueteServicio)
      } else {
        res.status(404).json({ message: "Registros de paquete_servicio no encontrados para este paquete" })
      }
    } catch (error) {
      console.error("Error fetching paquete_servicio by Paquete ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de paquete_servicio", error: error.message })
    }
  },

  async createPaqueteServicio(req, res) {
    try {
      const newPaqueteServicio = await PaqueteServicioService.createPaqueteServicio(req.body)
      res.status(201).json(newPaqueteServicio)
    } catch (error) {
      console.error("Error creating paquete_servicio:", error)
      res.status(500).json({ message: "Error al crear el registro de paquete_servicio", error: error.message })
    }
  },

  async updatePaqueteServicio(req, res) {
    try {
      const { id: paquete_id } = req.params // 'id' es paquete_id
      const { servicio_id } = req.body // servicio_id viene en el body
      if (!servicio_id) {
        return res.status(400).json({ message: "servicio_id es requerido en el cuerpo para actualizar." })
      }
      // Para esta tabla de relación, la actualización no suele cambiar los IDs,
      // sino que se usa para verificar la existencia o para futuras columnas adicionales.
      // Aquí simplemente verificamos que el registro exista.
      const updated = await PaqueteServicioService.updatePaqueteServicio(paquete_id, servicio_id, req.body)
      if (updated) {
        res.json({ message: "Registro de paquete_servicio actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de paquete_servicio no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating paquete_servicio:", error)
      res.status(500).json({ message: "Error al actualizar el registro de paquete_servicio", error: error.message })
    }
  },

  async deletePaqueteServicio(req, res) {
    try {
      const { id: paquete_id } = req.params // 'id' es paquete_id
      const { servicio_id } = req.body // servicio_id viene en el body
      if (!servicio_id) {
        return res.status(400).json({ message: "servicio_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await PaqueteServicioService.deletePaqueteServicio(paquete_id, servicio_id)
      if (deleted) {
        res.json({ message: "Registro de paquete_servicio eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de paquete_servicio no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting paquete_servicio:", error)
      res.status(500).json({ message: "Error al eliminar el registro de paquete_servicio", error: error.message })
    }
  },
}

export default PaqueteServicioController
