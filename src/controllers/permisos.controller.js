import PermisoService from "../services/permisos.service.js"

const PermisoController = {
  async getAllPermisos(req, res) {
    try {
      const permisos = await PermisoService.getAllPermisos()
      res.json(permisos)
    } catch (error) {
      console.error("Error fetching permisos:", error)
      res.status(500).json({ message: "Error al obtener los permisos", error: error.message })
    }
  },

  async getPermisoById(req, res) {
    try {
      const { id } = req.params
      const permiso = await PermisoService.getPermisoById(id)
      if (permiso) {
        res.json(permiso)
      } else {
        res.status(404).json({ message: "Permiso no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching permiso by ID:", error)
      res.status(500).json({ message: "Error al obtener el permiso", error: error.message })
    }
  },

  async createPermiso(req, res) {
    try {
      const newPermiso = await PermisoService.createPermiso(req.body)
      res.status(201).json(newPermiso)
    } catch (error) {
      console.error("Error creating permiso:", error)
      res.status(500).json({ message: "Error al crear el permiso", error: error.message })
    }
  },

  async updatePermiso(req, res) {
    try {
      const { id } = req.params
      const updated = await PermisoService.updatePermiso(id, req.body)
      if (updated) {
        res.json({ message: "Permiso actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Permiso no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating permiso:", error)
      res.status(500).json({ message: "Error al actualizar el permiso", error: error.message })
    }
  },

  async deletePermiso(req, res) {
    try {
      const { id } = req.params
      const deleted = await PermisoService.deletePermiso(id)
      if (deleted) {
        res.json({ message: "Permiso eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Permiso no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting permiso:", error)
      res.status(500).json({ message: "Error al eliminar el permiso", error: error.message })
    }
  },
}

export default PermisoController
