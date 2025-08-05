import DepartamentoModel from "../models/departamentos.model.js"

const DepartamentoService = {
  async getAllDepartamentos() {
    return await DepartamentoModel.findAll()
  },

  async getDepartamentoById(id) {
    return await DepartamentoModel.findById(id)
  },

  async createDepartamento(departamentoData) {
    return await DepartamentoModel.create(departamentoData)
  },

  async updateDepartamento(id, departamentoData) {
    return await DepartamentoModel.update(id, departamentoData)
  },

  async deleteDepartamento(id) {
    return await DepartamentoModel.remove(id)
  },
}

export default DepartamentoService
