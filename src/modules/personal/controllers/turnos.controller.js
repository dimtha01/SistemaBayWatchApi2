import TurnoService from "../services/turnos.service.js"

const TurnoController = {
  async getAllTurnos(req, res) {
    try {
      const turnos = await TurnoService.getAllTurnos()
      res.json(turnos)
    } catch (error) {
      console.error("Error fetching turnos:", error)
      res.status(500).json({ message: "Error al obtener los turnos", error: error.message })
    }
  },

  async getTurnoById(req, res) {
    try {
      const { id } = req.params
      const turno = await TurnoService.getTurnoById(id)
      if (turno) {
        res.json(turno)
      } else {
        res.status(404).json({ message: "Turno no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching turno by ID:", error)
      res.status(500).json({ message: "Error al obtener el turno", error: error.message })
    }
  },

  async createTurno(req, res) {
    try {
      const newTurno = await TurnoService.createTurno(req.body)
      res.status(201).json(newTurno)
    } catch (error) {
      console.error("Error creating turno:", error)
      res.status(500).json({ message: "Error al crear el turno", error: error.message })
    }
  },

  async updateTurno(req, res) {
    try {
      const { id } = req.params
      const updated = await TurnoService.updateTurno(id, req.body)
      if (updated) {
        res.json({ message: "Turno actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Turno no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating turno:", error)
      res.status(500).json({ message: "Error al actualizar el turno", error: error.message })
    }
  },

  async deleteTurno(req, res) {
    try {
      const { id } = req.params
      const deleted = await TurnoService.deleteTurno(id)
      if (deleted) {
        res.json({ message: "Turno eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Turno no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting turno:", error)
      res.status(500).json({ message: "Error al eliminar el turno", error: error.message })
    }
  },
}

export default TurnoController
