import CategoriaServicioService from "../services/categorias_servicio.service.js"

const CategoriaServicioController = {
  async getAllCategorias(req, res) {
    try {
      const categorias = await CategoriaServicioService.getAllCategorias()
      res.json(categorias)
    } catch (error) {
      console.error("Error fetching categorias de servicio:", error)
      res.status(500).json({ message: "Error al obtener las categorías de servicio", error: error.message })
    }
  },

  async getCategoriaById(req, res) {
    try {
      const { id } = req.params
      const categoria = await CategoriaServicioService.getCategoriaById(id)
      if (categoria) {
        res.json(categoria)
      } else {
        res.status(404).json({ message: "Categoría de servicio no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching categoria de servicio by ID:", error)
      res.status(500).json({ message: "Error al obtener la categoría de servicio", error: error.message })
    }
  },

  async createCategoria(req, res) {
    try {
      const newCategoria = await CategoriaServicioService.createCategoria(req.body)
      res.status(201).json(newCategoria)
    } catch (error) {
      console.error("Error creating categoria de servicio:", error)
      res.status(500).json({ message: "Error al crear la categoría de servicio", error: error.message })
    }
  },

  async updateCategoria(req, res) {
    try {
      const { id } = req.params
      const updated = await CategoriaServicioService.updateCategoria(id, req.body)
      if (updated) {
        res.json({ message: "Categoría de servicio actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Categoría de servicio no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating categoria de servicio:", error)
      res.status(500).json({ message: "Error al actualizar la categoría de servicio", error: error.message })
    }
  },

  async deleteCategoria(req, res) {
    try {
      const { id } = req.params
      const deleted = await CategoriaServicioService.deleteCategoria(id)
      if (deleted) {
        res.json({ message: "Categoría de servicio eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Categoría de servicio no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting categoria de servicio:", error)
      res.status(500).json({ message: "Error al eliminar la categoría de servicio", error: error.message })
    }
  },
}

export default CategoriaServicioController
