import AsistenciaService from "../services/asistencia.service.js"

const AsistenciaController = {
  async getAll(req, res) {
    try {
      const data = await AsistenciaService.getAll()
      res.json(data)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener asistencias", error: error.message })
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params
      const data = await AsistenciaService.getById(id)
      if (data) res.json(data)
      else res.status(404).json({ message: "Asistencia no encontrada" })
    } catch (error) {
      res.status(500).json({ message: "Error al obtener asistencia", error: error.message })
    }
  },

  async create(req, res) {
    try {
      const newAsistencia = await AsistenciaService.create(req.body)
      res.status(201).json(newAsistencia)
    } catch (error) {
      res.status(500).json({ message: "Error al crear asistencia", error: error.message })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const updated = await AsistenciaService.update(id, req.body)
      if (updated) res.json({ message: "Asistencia actualizada" })
      else res.status(404).json({ message: "No se encontró la asistencia" })
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar asistencia", error: error.message })
    }
  },

  async remove(req, res) {
    try {
      const { id } = req.params
      const deleted = await AsistenciaService.remove(id)
      if (deleted) res.json({ message: "Asistencia eliminada" })
      else res.status(404).json({ message: "No se encontró la asistencia" })
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar asistencia", error: error.message })
    }
  }
}

export default AsistenciaController
