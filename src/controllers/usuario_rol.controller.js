import UsuarioRolService from "../services/usuario_rol.service.js"

const UsuarioRolController = {
  async getAllUsuarioRol(req, res) {
    try {
      const usuarioRol = await UsuarioRolService.getAllUsuarioRol()
      res.json(usuarioRol)
    } catch (error) {
      console.error("Error fetching usuario_rol:", error)
      res.status(500).json({ message: "Error al obtener los registros de usuario_rol", error: error.message })
    }
  },

  async getUsuarioRolByUsuarioId(req, res) {
    try {
      const { id: usuario_id } = req.params // Aquí 'id' es usuario_id
      const usuarioRol = await UsuarioRolService.getUsuarioRolByUsuarioId(usuario_id)
      if (usuarioRol && usuarioRol.length > 0) {
        res.json(usuarioRol)
      } else {
        res.status(404).json({ message: "Registros de usuario_rol no encontrados para este usuario" })
      }
    } catch (error) {
      console.error("Error fetching usuario_rol by Usuario ID:", error)
      res.status(500).json({ message: "Error al obtener los registros de usuario_rol", error: error.message })
    }
  },

  async createUsuarioRol(req, res) {
    try {
      const newUsuarioRol = await UsuarioRolService.createUsuarioRol(req.body)
      res.status(201).json(newUsuarioRol)
    } catch (error) {
      console.error("Error creating usuario_rol:", error)
      res.status(500).json({ message: "Error al crear el registro de usuario_rol", error: error.message })
    }
  },

  async updateUsuarioRol(req, res) {
    try {
      const { id: usuario_id } = req.params // 'id' es usuario_id
      const { rol_id } = req.body // rol_id viene en el body
      if (!rol_id) {
        return res.status(400).json({ message: "rol_id es requerido en el cuerpo para actualizar." })
      }
      // Para esta tabla de relación, la actualización no suele cambiar los IDs,
      // sino que se usa para verificar la existencia o para futuras columnas adicionales.
      // Aquí simplemente verificamos que el registro exista.
      const updated = await UsuarioRolService.updateUsuarioRol(usuario_id, rol_id, req.body)
      if (updated) {
        res.json({ message: "Registro de usuario_rol actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de usuario_rol no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating usuario_rol:", error)
      res.status(500).json({ message: "Error al actualizar el registro de usuario_rol", error: error.message })
    }
  },

  async deleteUsuarioRol(req, res) {
    try {
      const { id: usuario_id } = req.params // 'id' es usuario_id
      const { rol_id } = req.body // rol_id viene en el body
      if (!rol_id) {
        return res.status(400).json({ message: "rol_id es requerido en el cuerpo para eliminar." })
      }
      const deleted = await UsuarioRolService.deleteUsuarioRol(usuario_id, rol_id)
      if (deleted) {
        res.json({ message: "Registro de usuario_rol eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro de usuario_rol no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting usuario_rol:", error)
      res.status(500).json({ message: "Error al eliminar el registro de usuario_rol", error: error.message })
    }
  },
}

export default UsuarioRolController
