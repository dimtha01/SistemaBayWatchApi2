import DepartamentoModel from "../models/departamentos.model.js"

const DepartamentoService = {
  async getAllDepartamentos() {
    return await DepartamentoModel.findAll()
  },

  async getDepartamentoById(id) {
    return await DepartamentoModel.findById(id)
  },

  async createDepartamento(departamentoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await DepartamentoModel.create(departamentoData)
  },

  async updateDepartamento(id, departamentoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await DepartamentoModel.update(id, departamentoData)
  },

  async deleteDepartamento(id) {
    return await DepartamentoModel.remove(id)
  },
}

export default DepartamentoService
