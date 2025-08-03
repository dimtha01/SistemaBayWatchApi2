import RolPermisoService from "../services/rol_permiso.service.js"

const RolPermisoController = {
  async getAllRolPermiso(req, res) {
    try {
      const rolPermiso = await RolPermisoService.getAllRolPermiso()
      res.json(rolPermiso)
    } catch (error) {
      console.error("Error fetching rol_permiso:", error)
      res.status(500).json({ message: "Error al obtener los registros de rol_permiso", error: error.message })
    }
  },

  async getRolPermisoByRolId(req, res) {
    try {
      const { id: rol_id } = req.params // Aquí 'id' es rol_id
      const rolPermiso = await RolPermisoService.getRolPermisoByRolId(rol_id)
      if (rolPermiso && rolPermiso.length > 0) {
        res.json(rolPermiso)
      } else {
        res.status(404).json({ message: "Registros de rol_permiso no encontrados para este rol" })
      }
    } catch (error) {
      console.error("Error fetching rol_permiso by Rol ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de rol_permiso", error: error.message })
    }
  },

  async createRolPermiso(req, res) {
    try {
      const newRolPermiso = await RolPermisoService.createRolPermiso(req.body)
      res.status(201).json(newRolPermiso)
    } catch (error) {
      console.error("Error creating rol_permiso:", error)
      res.status(500).json({ message: "Error al crear el registro de rol_permiso", error: error.message })
    }
  },

  async updateRolPermiso(req, res) {
    try {
      const { id: rol_id } = req.params // 'id' es rol_id
      const { permiso_id } = req.body // permiso_id viene en el body
      if (!permiso_id) {
        return res.status(400).json({ message: "permiso_id es requerido en el cuerpo para actualizar." })
      }
      // Para esta tabla de relación, la actualización no suele cambiar los IDs,
      // sino que se usa para verificar la existencia o para futuras columnas adicionales.
      // Aquí simplemente verificamos que el registro exista.
      const updated = await RolPermisoService.updateRolPermiso(rol_id, permiso_id, req.body)
      if (updated) {
        res.json({ message: "Registro de rol_permiso actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de rol_permiso no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating rol_permiso:", error)
      res.status(500).json({ message: "Error al actualizar el registro de rol_permiso", error: error.message })
    }
  },

  async deleteRolPermiso(req, res) {
    try {
      const { id: rol_id } = req.params // 'id' es rol_id
      const { permiso_id } = req.body // permiso_id viene en el body
      if (!permiso_id) {
        return res.status(400).json({ message: "permiso_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await RolPermisoService.deleteRolPermiso(rol_id, permiso_id)
      if (deleted) {
        res.json({ message: "Registro de rol_permiso eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de rol_permiso no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting rol_permiso:", error)
      res.status(500).json({ message: "Error al eliminar el registro de rol_permiso", error: error.message })
    }
  },
}

export default RolPermisoController
