import DepartamentoService from "../services/departamentos.service.js"

const DepartamentoController = {
  async getAllDepartamentos(req, res) {
    try {
      const departamentos = await DepartamentoService.getAllDepartamentos()
      res.json(departamentos)
    } catch (error) {
      console.error("Error fetching departamentos:", error)
      res.status(500).json({ message: "Error al obtener los departamentos", error: error.message })
    }
  },

  async getDepartamentoById(req, res) {
    try {
      const { id } = req.params
      const departamento = await DepartamentoService.getDepartamentoById(id)
      if (departamento) {
        res.json(departamento)
      } else {
        res.status(404).json({ message: "Departamento no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching departamento by ID:", error)
      res.status(500).json({ message: "Error al obtener el departamento", error: error.message })
    }
  },

  async createDepartamento(req, res) {
    try {
      const newDepartamento = await DepartamentoService.createDepartamento(req.body)
      res.status(201).json(newDepartamento)
    } catch (error) {
      console.error("Error creating departamento:", error)
      res.status(500).json({ message: "Error al crear el departamento", error: error.message })
    }
  },

  async updateDepartamento(req, res) {
    try {
      const { id } = req.params
      const updated = await DepartamentoService.updateDepartamento(id, req.body)
      if (updated) {
        res.json({ message: "Departamento actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Departamento no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating departamento:", error)
      res.status(500).json({ message: "Error al actualizar el departamento", error: error.message })
    }
  },

  async deleteDepartamento(req, res) {
    try {
      const { id } = req.params
      const deleted = await DepartamentoService.deleteDepartamento(id)
      if (deleted) {
        res.json({ message: "Departamento eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Departamento no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting departamento:", error)
      res.status(500).json({ message: "Error al eliminar el departamento", error: error.message })
    }
  },
}

export default DepartamentoController
