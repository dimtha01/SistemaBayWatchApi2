import RolService from "../services/roles.service.js"

const RolController = {
  async getAllRoles(req, res) {
    try {
      const roles = await RolService.getAllRoles()
      res.json(roles)
    } catch (error) {
      console.error("Error fetching roles:", error)
      res.status(500).json({ message: "Error al obtener los roles", error: error.message })
    }
  },

  async getRolById(req, res) {
    try {
      const { id } = req.params
      const rol = await RolService.getRolById(id)
      if (rol) {
        res.json(rol)
      } else {
        res.status(404).json({ message: "Rol no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching rol by ID:", error)
      res.status(500).json({ message: "Error al obtener el rol", error: error.message })
    }
  },

  async createRol(req, res) {
    try {
      const newRol = await RolService.createRol(req.body)
      res.status(201).json(newRol)
    } catch (error) {
      console.error("Error creating rol:", error)
      res.status(500).json({ message: "Error al crear el rol", error: error.message })
    }
  },

  async updateRol(req, res) {
    try {
      const { id } = req.params
      const updated = await RolService.updateRol(id, req.body)
      if (updated) {
        res.json({ message: "Rol actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Rol no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating rol:", error)
      res.status(500).json({ message: "Error al actualizar el rol", error: error.message })
    }
  },

  async deleteRol(req, res) {
    try {
      const { id } = req.params
      const deleted = await RolService.deleteRol(id)
      if (deleted) {
        res.json({ message: "Rol eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Rol no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting rol:", error)
      res.status(500).json({ message: "Error al eliminar el rol", error: error.message })
    }
  },
}

export default RolController
