import MantenimientoHabitacionModel from "../models/mantenimiento_habitacion.model.js"

const MantenimientoHabitacionService = {
  async getAllMantenimientos() {
    return await MantenimientoHabitacionModel.findAll()
  },

  async getMantenimientoById(id) {
    return await MantenimientoHabitacionModel.findById(id)
  },

  async createMantenimiento(mantenimientoData) {
    // Aquí podrías añadir validaciones de negocio antes de crear
    return await MantenimientoHabitacionModel.create(mantenimientoData)
  },

  async updateMantenimiento(id, mantenimientoData) {
    // Aquí podrías añadir validaciones de negocio antes de actualizar
    return await MantenimientoHabitacionModel.update(id, mantenimientoData)
  },

  async deleteMantenimiento(id) {
    return await MantenimientoHabitacionModel.remove(id)
  },
}

export default MantenimientoHabitacionService
