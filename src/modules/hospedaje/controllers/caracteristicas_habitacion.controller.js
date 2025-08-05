import CaracteristicaHabitacionService from "../services/caracteristicas_habitacion.service.js"

const CaracteristicaHabitacionController = {
  async getAll(req, res) {
    try {
      const data = await CaracteristicaHabitacionService.getAll()
      res.json(data)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener características", error: error.message })
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params
      const data = await CaracteristicaHabitacionService.getById(id)
      if (data) res.json(data)
      else res.status(404).json({ message: "Característica no encontrada" })
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la característica", error: error.message })
    }
  },

  async create(req, res) {
    try {
      const nueva = await CaracteristicaHabitacionService.create(req.body)
      res.status(201).json(nueva)
    } catch (error) {
      res.status(500).json({ message: "Error al crear característica", error: error.message })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const updated = await CaracteristicaHabitacionService.update(id, req.body)
      if (updated) res.json({ message: "Característica actualizada" })
      else res.status(404).json({ message: "Característica no encontrada" })
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar característica", error: error.message })
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params
      const deleted = await CaracteristicaHabitacionService.remove(id)
      if (deleted) res.json({ message: "Característica eliminada" })
      else res.status(404).json({ message: "Característica no encontrada" })
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar característica", error: error.message })
    }
  }
}

export default CaracteristicaHabitacionController
