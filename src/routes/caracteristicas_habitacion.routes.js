import { Router } from "express"
import CaracteristicaHabitacionController from "../controllers/caracteristicas_habitacion.controller.js"

const router = Router()

router.get("/", CaracteristicaHabitacionController.getAllCaracteristicas)
router.get("/:id", CaracteristicaHabitacionController.getCaracteristicaById)
router.post("/", CaracteristicaHabitacionController.createCaracteristica)
router.put("/:id", CaracteristicaHabitacionController.updateCaracteristica)
router.delete("/:id", CaracteristicaHabitacionController.deleteCaracteristica)

export default router
