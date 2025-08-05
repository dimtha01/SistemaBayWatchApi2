import PersonalService from "../services/personal.service.js"

const PersonalController = {
  async getAllPersonal(req, res) {
    try {
      const personal = await PersonalService.getAllPersonal()
      res.json(personal)
    } catch (error) {
      console.error("Error fetching personal:", error)
      res.status(500).json({ message: "Error al obtener el personal", error: error.message })
    }
  },

  async getPersonalById(req, res) {
    try {
      const { id } = req.params
      const personal = await PersonalService.getPersonalById(id)
      if (personal) {
        res.json(personal)
      } else {
        res.status(404).json({ message: "Personal no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching personal by ID:", error)
      res.status(500).json({ message: "Error al obtener el personal", error: error.message })
    }
  },

  async createPersonal(req, res) {
    try {
      const newPersonal = await PersonalService.createPersonal(req.body)
      res.status(201).json(newPersonal)
    } catch (error) {
      console.error("Error creating personal:", error)
      res.status(500).json({ message: "Error al crear el personal", error: error.message })
    }
  },

  async updatePersonal(req, res) {
    try {
      const { id } = req.params
      const updated = await PersonalService.updatePersonal(id, req.body)
      if (updated) {
        res.json({ message: "Personal actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Personal no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating personal:", error)
      res.status(500).json({ message: "Error al actualizar el personal", error: error.message })
    }
  },

  async deletePersonal(req, res) {
    try {
      const { id } = req.params
      const deleted = await PersonalService.deletePersonal(id)
      if (deleted) {
        res.json({ message: "Personal eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Personal no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting personal:", error)
      res.status(500).json({ message: "Error al eliminar el personal", error: error.message })
    }
  },
}

export default PersonalController
