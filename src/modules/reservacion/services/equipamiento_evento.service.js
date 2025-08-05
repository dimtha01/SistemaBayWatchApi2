import EquipamientoEventoModel from "../models/equipamiento_evento.model.js"

const EquipamientoEventoService = {
  async getAllEquipamiento() {
    return await EquipamientoEventoModel.findAll()
  },

  async getEquipamientoById(id) {
    return await EquipamientoEventoModel.findById(id)
  },

  async createEquipamiento(equipamientoData) {
    return await EquipamientoEventoModel.create(equipamientoData)
  },

  async updateEquipamiento(id, equipamientoData) {
    return await EquipamientoEventoModel.update(id, equipamientoData)
  },

  async deleteEquipamiento(id) {
    return await EquipamientoEventoModel.remove(id)
  },
}

export default EquipamientoEventoService
