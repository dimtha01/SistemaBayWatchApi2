import { Router } from "express"
import CaracteristicaHabitacionController from "../controllers/caracteristicas_habitacion.controller.js"

const router = Router()

router.get("/", CaracteristicaHabitacionController.getAll)
router.get("/:id", CaracteristicaHabitacionController.getById)
router.post("/", CaracteristicaHabitacionController.create)
router.put("/:id", CaracteristicaHabitacionController.update)
router.delete("/:id", CaracteristicaHabitacionController.remove)

export default router
