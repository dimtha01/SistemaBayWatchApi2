import CargoService from "../services/cargos.service.js"

const CargoController = {
  async getAllCargos(req, res) {
    try {
      const cargos = await CargoService.getAllCargos()
      res.json(cargos)
    } catch (error) {
      console.error("Error fetching cargos:", error)
      res.status(500).json({ message: "Error al obtener los cargos", error: error.message })
    }
  },

  async getCargoById(req, res) {
    try {
      const { id } = req.params
      const cargo = await CargoService.getCargoById(id)
      if (cargo) {
        res.json(cargo)
      } else {
        res.status(404).json({ message: "Cargo no encontrado" })
      }
    } catch (error) {
      console.error("Error fetching cargo by ID:", error)
      res.status(500).json({ message: "Error al obtener el cargo", error: error.message })
    }
  },

  async createCargo(req, res) {
    try {
      const newCargo = await CargoService.createCargo(req.body)
      res.status(201).json(newCargo)
    } catch (error) {
      console.error("Error creating cargo:", error)
      res.status(500).json({ message: "Error al crear el cargo", error: error.message })
    }
  },

  async updateCargo(req, res) {
    try {
      const { id } = req.params
      const updated = await CargoService.updateCargo(id, req.body)
      if (updated) {
        res.json({ message: "Cargo actualizado correctamente" })
      } else {
        res.status(404).json({ message: "Cargo no encontrado o no se pudo actualizar" })
      }
    } catch (error) {
      console.error("Error updating cargo:", error)
      res.status(500).json({ message: "Error al actualizar el cargo", error: error.message })
    }
  },

  async deleteCargo(req, res) {
    try {
      const { id } = req.params
      const deleted = await CargoService.deleteCargo(id)
      if (deleted) {
        res.json({ message: "Cargo eliminado correctamente" })
      } else {
        res.status(404).json({ message: "Cargo no encontrado o no se pudo eliminar" })
      }
    } catch (error) {
      console.error("Error deleting cargo:", error)
      res.status(500).json({ message: "Error al eliminar el cargo", error: error.message })
    }
  },
}

export default CargoController
