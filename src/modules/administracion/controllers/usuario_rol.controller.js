import UsuarioRolService from "../services/usuario_rol.service.js"

const UsuarioRolController = {
  async getAllUsuarioRol(req, res) {
    try {
      const usuarioRoles = await UsuarioRolService.getAllUsuarioRol()
      res.json(usuarioRoles)
    } catch (error) {
      console.error("Error al obtener usuario_rol:", error)
      res.status(500).json({ message: "Error al obtener los registros", error: error.message })
    }
  },

  async getUsuarioRolById(req, res) {
    try {
      const { id } = req.params
      const usuarioRol = await UsuarioRolService.getUsuarioRolById(id)
      if (usuarioRol) {
        res.json(usuarioRol)
      } else {
        res.status(404).json({ message: "Registro usuario_rol no encontrado" })
      }
    } catch (error) {
      console.error("Error al obtener usuario_rol por ID:", error)
      res.status(500).json({ message: "Error al obtener el registro", error: error.message })
    }
  },

  async createUsuarioRol(req, res) {
    try {
      const newUsuarioRol = await UsuarioRolService.createUsuarioRol(req.body)
      res.status(201).json(newUsuarioRol)
    } catch (error) {
      console.error("Error al crear usuario_rol:", error)
      res.status(500).json({ message: "Error al crear el registro", error: error.message })
    }
  },

  async updateUsuarioRol(req, res) {
    try {
      const { id } = req.params
      const updated = await UsuarioRolService.updateUsuarioRol(id, req.body)
      if (updated) {
        res.json({ message: "UsuarioRol actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Registro no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error al actualizar usuario_rol:", error)
      res.status(500).json({ message: "Error al actualizar el registro", error: error.message })
    }
  },

  async deleteUsuarioRol(req, res) {
    try {
      const { id } = req.params
      const deleted = await UsuarioRolService.deleteUsuarioRol(id)
      if (deleted) {
        res.json({ message: "UsuarioRol eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Registro no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error al eliminar usuario_rol:", error)
      res.status(500).json({ message: "Error al eliminar el registro", error: error.message })
    }
  },
}

export default UsuarioRolController
