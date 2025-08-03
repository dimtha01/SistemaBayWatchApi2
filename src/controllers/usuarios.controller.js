import UsuarioService from "../services/usuarios.service.js"

const UsuarioController = {
  async getAllUsuarios(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios()
      res.json(usuarios)
    } catch (error) {
      console.error("Error fetching usuarios:", error)
      res.status(500).json({ message: "Error al obtener los usuarios", error: error.message })
    }
  },

  async getUsuarioById(req, res) {
    try {
      const { id } = req.params
      const usuario = await UsuarioService.getUsuarioById(id)
      if (usuario) {
        res.json(usuario)
      } else {
        res.status(404).json({ message: "Usuario no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching usuario by ID:", error)
      res.status(500).json({ message: "Error al obtener el usuario", error: error.message })
    }
  },

  async createUsuario(req, res) {
    try {
      const newUsuario = await UsuarioService.createUsuario(req.body)
      res.status(201).json(newUsuario)
    } catch (error) {
      console.error("Error creating usuario:", error)
      res.status(500).json({ message: "Error al crear el usuario", error: error.message })
    }
  },

  async updateUsuario(req, res) {
    try {
      const { id } = req.params
      const updated = await UsuarioService.updateUsuario(id, req.body)
      if (updated) {
        res.json({ message: "Usuario actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Usuario no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating usuario:", error)
      res.status(500).json({ message: "Error al actualizar el usuario", error: error.message })
    }
  },

  async deleteUsuario(req, res) {
    try {
      const { id } = req.params
      const deleted = await UsuarioService.deleteUsuario(id)
      if (deleted) {
        res.json({ message: "Usuario eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Usuario no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting usuario:", error)
      res.status(500).json({ message: "Error al eliminar el usuario", error: error.message })
    }
  },
}

export default UsuarioController
