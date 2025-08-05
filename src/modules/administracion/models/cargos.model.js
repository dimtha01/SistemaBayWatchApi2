// Aquí va tu ORM o capa de datos
const cargos = []

let nextId = 1

const CargoModel = {
  findAll() {
    return Promise.resolve(cargos)
  },

  findById(id) {
    const cargo = cargos.find(c => c.id === parseInt(id))
    return Promise.resolve(cargo)
  },

  create(cargoData) {
    const newCargo = { id: nextId++, ...cargoData }
    cargos.push(newCargo)
    return Promise.resolve(newCargo)
  },

  update(id, cargoData) {
    const index = cargos.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      cargos[index] = { ...cargos[index], ...cargoData }
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  },

  remove(id) {
    const index = cargos.findIndex(c => c.id === parseInt(id))
    if (index !== -1) {
      cargos.splice(index, 1)
      return Promise.resolve(true)
    }
    return Promise.resolve(false)
  },
}

export default CargoModel
