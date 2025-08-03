import CaracteristicaHabitacionService from "../services/caracteristicas_habitacion.service.js"

const CaracteristicaHabitacionController = {
  async getAllCaracteristicas(req, res) {
    try {
      const caracteristicas = await CaracteristicaHabitacionService.getAllCaracteristicas()
      res.json(caracteristicas)
    } catch (error) {
      console.error("Error fetching caracteristicas de habitacion:", error)
      res.status(500).json({ message: "Error al obtener las características de habitación", error: error.message })
    }
  },

  async getCaracteristicaById(req, res) {
    try {
      const { id } = req.params
      const caracteristica = await CaracteristicaHabitacionService.getCaracteristicaById(id)
      if (caracteristica) {
        res.json(caracteristica)
      } else {
        res.status(404).json({ message: "Característica de habitación no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching caracteristica de habitacion by ID:", error)
      res.status(500).json({ message: "Error al obtener la característica de habitación", error: error.message })
    }
  },

  async createCaracteristica(req, res) {
    try {
      const newCaracteristica = await CaracteristicaHabitacionService.createCaracteristica(req.body)
      res.status(201).json(newCaracteristica)
    } catch (error) {
      console.error("Error creating caracteristica de habitacion:", error)
      res.status(500).json({ message: "Error al crear la característica de habitación", error: error.message })
    }
  },

  async updateCaracteristica(req, res) {
    try {
      const { id } = req.params
      const updated = await CaracteristicaHabitacionService.updateCaracteristica(id, req.body)
      if (updated) {
        res.json({ message: "Característica de habitación actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Característica de habitación no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating caracteristica de habitacion:", error)
      res.status(500).json({ message: "Error al actualizar la característica de habitación", error: error.message })
    }
  },

  async deleteCaracteristica(req, res) {
    try {
      const { id } = req.params
      const deleted = await CaracteristicaHabitacionService.deleteCaracteristica(id)
      if (deleted) {
        res.json({ message: "Característica de habitación eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Característica de habitación no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting caracteristica de habitacion:", error)
      res.status(500).json({ message: "Error al eliminar la característica de habitación", error: error.message })
    }
  },
}

export default CaracteristicaHabitacionController
