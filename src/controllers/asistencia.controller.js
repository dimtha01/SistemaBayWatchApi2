import AsistenciaService from "../services/asistencia.service.js"

const AsistenciaController = {
  async getAllAsistencias(req, res) {
    try {
      const asistencias = await AsistenciaService.getAllAsistencias()
      res.json(asistencias)
    } catch (error) {
      console.error("Error fetching asistencias:", error)
      res.status(500).json({ message: "Error al obtener las asistencias", error: error.message })
    }
  },

  async getAsistenciaById(req, res) {
    try {
      const { id } = req.params
      const asistencia = await AsistenciaService.getAsistenciaById(id)
      if (asistencia) {
        res.json(asistencia)
      } else {
        res.status(404).json({ message: "Asistencia no encontrada" })
      }
    } catch (error) {
      console.error("Error fetching asistencia by ID:", error)
      res.status(500).json({ message: "Error al obtener la asistencia", error: error.message })
    }
  },

  async createAsistencia(req, res) {
    try {
      const newAsistencia = await AsistenciaService.createAsistencia(req.body)
      res.status(201).json(newAsistencia)
    } catch (error) {
      console.error("Error creating asistencia:", error)
      res.status(500).json({ message: "Error al crear la asistencia", error: error.message })
    }
  },

  async updateAsistencia(req, res) {
    try {
      const { id } = req.params
      const updated = await AsistenciaService.updateAsistencia(id, req.body)
      if (updated) {
        res.json({ message: "Asistencia actualizada correctamente" })
      } else {
        res.status(404).json({ message: "Asistencia no encontrada o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating asistencia:", error)
      res.status(500).json({ message: "Error al actualizar la asistencia", error: error.message })
    }
  },

  async deleteAsistencia(req, res) {
    try {
      const { id } = req.params
      const deleted = await AsistenciaService.deleteAsistencia(id)
      if (deleted) {
        res.json({ message: "Asistencia eliminada correctamente" })
      } else {
        res.status(404).json({ message: "Asistencia no encontrada o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting asistencia:", error)
      res.status(500).json({ message: "Error al eliminar la asistencia", error: error.message })
    }
  },
}

export default AsistenciaController
