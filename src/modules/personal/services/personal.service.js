import PersonalModel from "../models/personal.model.js"

const PersonalService = {
  async getAllPersonal() {
    return await PersonalModel.findAll()
  },

  async getPersonalById(id) {
    return await PersonalModel.findById(id)
  },

  async createPersonal(personalData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await PersonalModel.create(personalData)
  },

  async updatePersonal(id, personalData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await PersonalModel.update(id, personalData)
  },

  async deletePersonal(id) {
    return await PersonalModel.remove(id)
  },
}

export default PersonalService
