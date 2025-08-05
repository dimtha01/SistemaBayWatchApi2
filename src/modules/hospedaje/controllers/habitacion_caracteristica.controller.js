import HabitacionCaracteristicaService from "../services/habitacion_caracteristica.service.js"

const HabitacionCaracteristicaController = {
  async getAllHabitacionCaracteristicas(req, res) {
    try {
      const habitacionCaracteristicas = await HabitacionCaracteristicaService.getAllHabitacionCaracteristicas()
      res.json(habitacionCaracteristicas)
    } catch (error) {
      console.error("Error fetching habitacion_caracteristica:", error)
      res
        .status(500)
        .json({ message: "Error al obtener los registros de habitacion_caracteristica", error: error.message })
    }
  },

  async getHabitacionCaracteristicaByHabitacionId(req, res) {
    try {
      const { id: habitacion_id } = req.params // 'id' es habitacion_id
      const habitacionCaracteristicas =
        await HabitacionCaracteristicaService.getHabitacionCaracteristicaByHabitacionId(habitacion_id)
      if (habitacionCaracteristicas && habitacionCaracteristicas.length > 0) {
        res.json(habitacionCaracteristicas)
      } else {
        res.status(404).json({ message: "Registros de habitacion_caracteristica no encontrados para esta habitación" })
      }
    } catch (error) {
      console.error("Error fetching habitacion_caracteristica by Habitacion ID:", error)
      res
        .status(500)
        .json({ message: "Error al obtener los registros de habitacion_caracteristica", error: error.message })
    }
  },

  async createHabitacionCaracteristica(req, res) {
    try {
      const newHabitacionCaracteristica = await HabitacionCaracteristicaService.createHabitacionCaracteristica(req.body)
      res.status(201).json(newHabitacionCaracteristica)
    } catch (error) {
      console.error("Error creating habitacion_caracteristica:", error)
      res.status(500).json({ message: "Error al crear el registro de habitacion_caracteristica", error: error.message })
    }
  },

  async updateHabitacionCaracteristica(req, res) {
    try {
      const { id: habitacion_id } = req.params // 'id' es habitacion_id
      const { caracteristica_id } = req.body // caracteristica_id viene en el body
      if (!caracteristica_id) {
        return res.status(400).json({ message: "caracteristica_id es requerido en el cuerpo para actualizar." })
      }
      // Para esta tabla de relación, la actualización no suele cambiar los IDs,
      // sino que se usa para verificar la existencia o para futuras columnas adicionales.
      // Aquí simplemente verificamos que el registro exista.
      const updated = await HabitacionCaracteristicaService.updateHabitacionCaracteristica(
        habitacion_id,
        caracteristica_id,
        req.body,
      )
      if (updated) {
        res.json({ message: "Registro de habitacion_caracteristica actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de habitacion_caracteristica no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating habitacion_caracteristica:", error)
      res
        .status(500)
        .json({ message: "Error al actualizar el registro de habitacion_caracteristica", error: error.message })
    }
  },

  async deleteHabitacionCaracteristica(req, res) {
    try {
      const { id: habitacion_id } = req.params // 'id' es habitacion_id
      const { caracteristica_id } = req.body // caracteristica_id viene en el body
      if (!caracteristica_id) {
        return res.status(400).json({ message: "caracteristica_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await HabitacionCaracteristicaService.deleteHabitacionCaracteristica(
        habitacion_id,
        caracteristica_id,
      )
      if (deleted) {
        res.json({ message: "Registro de habitacion_caracteristica eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de habitacion_caracteristica no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting habitacion_caracteristica:", error)
      res
        .status(500)
        .json({ message: "Error al eliminar el registro de habitacion_caracteristica", error: error.message })
    }
  },
}

export default HabitacionCaracteristicaController
