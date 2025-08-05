import CategoriaServicioModel from "../models/categorias_servicio.model.js"

const CategoriaServicioService = {
  async getAllCategorias() {
    return await CategoriaServicioModel.findAll()
  },

  async getCategoriaById(id) {
    return await CategoriaServicioModel.findById(id)
  },

  async createCategoria(categoriaData) {
    return await CategoriaServicioModel.create(categoriaData)
  },

  async updateCategoria(id, categoriaData) {
    return await CategoriaServicioModel.update(id, categoriaData)
  },

  async deleteCategoria(id) {
    return await CategoriaServicioModel.remove(id)
  },
}

export default CategoriaServicioService
