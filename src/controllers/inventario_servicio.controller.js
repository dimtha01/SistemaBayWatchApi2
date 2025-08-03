import InventarioServicioService from "../services/inventario_servicio.service.js"

const InventarioServicioController = {
  async getAllInventarioServicio(req, res) {
    try {
      const inventarioServicio = await InventarioServicioService.getAllInventarioServicio()
      res.json(inventarioServicio)
    } catch (error) {
      console.error("Error fetching inventario de servicio:", error)
      res.status(500).json({ message: "Error al obtener el inventario de servicio", error: error.message })
    }
  },

  async getInventarioServicioById(req, res) {
    try {
      const { id } = req.params
      const inventarioServicio = await InventarioServicioService.getInventarioServicioById(id)
      if (inventarioServicio) {
        res.json(inventarioServicio)
      } else {
        res.status(404).json({ message: "Item de inventario de servicio no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching inventario de servicio by ID:", error)
      res.status(500).json({ message: "Error al obtener el item de inventario de servicio", error: error.message })
    }
  },

  async createInventarioServicio(req, res) {
    try {
      const newInventarioServicio = await InventarioServicioService.createInventarioServicio(req.body)
      res.status(201).json(newInventarioServicio)
    } catch (error) {
      console.error("Error creating inventario de servicio:", error)
      res.status(500).json({ message: "Error al crear el item de inventario de servicio", error: error.message })
    }
  },

  async updateInventarioServicio(req, res) {
    try {
      const { id } = req.params
      const updated = await InventarioServicioService.updateInventarioServicio(id, req.body)
      if (updated) {
        res.json({ message: "Item de inventario de servicio actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Item de inventario de servicio no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating inventario de servicio:", error)
      res.status(500).json({ message: "Error al actualizar el item de inventario de servicio", error: error.message })
    }
  },

  async deleteInventarioServicio(req, res) {
    try {
      const { id } = req.params
      const deleted = await InventarioServicioService.deleteInventarioServicio(id)
      if (deleted) {
        res.json({ message: "Item de inventario de servicio eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Item de inventario de servicio no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting inventario de servicio:", error)
      res.status(500).json({ message: "Error al eliminar el item de inventario de servicio", error: error.message })
    }
  },
}

export default InventarioServicioController
