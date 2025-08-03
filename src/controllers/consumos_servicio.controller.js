import ConsumoServicioService from "../services/consumos_servicio.service.js"

const ConsumoServicioController = {
  async getAllConsumos(req, res) {
    try {
      const consumos = await ConsumoServicioService.getAllConsumos()
      res.json(consumos)
    } catch (error) {
      console.error("Error fetching consumos de servicio:", error)
      res.status(500).json({ message: "Error al obtener los consumos de servicio", error: error.message })
    }
  },

  async getConsumoById(req, res) {
    try {
      const { id } = req.params
      const consumo = await ConsumoServicioService.getConsumoById(id)
      if (consumo) {
        res.json(consumo)
      } else {
        res.status(404).json({ message: "Consumo de servicio no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching consumo de servicio by ID:", error)
      res.status(500).json({ message: "Error al obtener el consumo de servicio", error: error.message })
    }
  },

  async createConsumo(req, res) {
    try {
      const newConsumo = await ConsumoServicioService.createConsumo(req.body)
      res.status(201).json(newConsumo)
    } catch (error) {
      console.error("Error creating consumo de servicio:", error)
      res.status(500).json({ message: "Error al crear el consumo de servicio", error: error.message })
    }
  },

  async updateConsumo(req, res) {
    try {
      const { id } = req.params
      const updated = await ConsumoServicioService.updateConsumo(id, req.body)
      if (updated) {
        res.json({ message: "Consumo de servicio actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Consumo de servicio no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating consumo de servicio:", error)
      res.status(500).json({ message: "Error al actualizar el consumo de servicio", error: error.message })
    }
  },

  async deleteConsumo(req, res) {
    try {
      const { id } = req.params
      const deleted = await ConsumoServicioService.deleteConsumo(id)
      if (deleted) {
        res.json({ message: "Consumo de servicio eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Consumo de servicio no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting consumo de servicio:", error)
      res.status(500).json({ message: "Error al eliminar el consumo de servicio", error: error.message })
    }
  },
}

export default ConsumoServicioController
