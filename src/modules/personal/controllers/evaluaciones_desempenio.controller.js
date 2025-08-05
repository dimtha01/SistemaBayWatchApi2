import EvaluacionDesempenioService from "../services/evaluaciones_desempenio.service.js"

const EvaluacionDesempenioController = {
  async getAllEvaluaciones(req, res) {
    try {
      const evaluaciones = await EvaluacionDesempenioService.getAllEvaluaciones()
      res.json(evaluaciones)
    } catch (error) {
      console.error("Error fetching evaluaciones de desempeño:", error)
      res.status(500).json({ message: "Error al obtener las evaluaciones de desempeño", error: error.message })
    }
  },

  async getEvaluacionById(req, res) {
    try {
      const { id } = req.params
      const evaluacion = await EvaluacionDesempenioService.getEvaluacionById(id)
      if (evaluacion) {
        res.json(evaluacion)
      } else {
        res.status(404).json({ message: "Evaluación de desempeño no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching evaluacion de desempeño by ID:", error)
      res.status(500).json({ message: "Error al obtener la evaluación de desempeño", error: error.message })
    }
  },

  async createEvaluacion(req, res) {
    try {
      const newEvaluacion = await EvaluacionDesempenioService.createEvaluacion(req.body)
      res.status(201).json(newEvaluacion)
    } catch (error) {
      console.error("Error creating evaluacion de desempeño:", error)
      res.status(500).json({ message: "Error al crear la evaluación de desempeño", error: error.message })
    }
  },

  async updateEvaluacion(req, res) {
    try {
      const { id } = req.params
      const updated = await EvaluacionDesempenioService.updateEvaluacion(id, req.body)
      if (updated) {
        res.json({ message: "Evaluación de desempeño actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Evaluación de desempeño no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating evaluacion de desempeño:", error)
      res.status(500).json({ message: "Error al actualizar la evaluación de desempeño", error: error.message })
    }
  },

  async deleteEvaluacion(req, res) {
    try {
      const { id } = req.params
      const deleted = await EvaluacionDesempenioService.deleteEvaluacion(id)
      if (deleted) {
        res.json({ message: "Evaluación de desempeño eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Evaluación de desempeño no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting evaluacion de desempeño:", error)
      res.status(500).json({ message: "Error al eliminar la evaluación de desempeño", error: error.message })
    }
  },
}

export default EvaluacionDesempenioController
