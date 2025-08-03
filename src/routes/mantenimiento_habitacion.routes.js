import { Router } from "express"
import MantenimientoHabitacionController from "../controllers/mantenimiento_habitacion.controller.js"

const router = Router()

router.get("/", MantenimientoHabitacionController.getAllMantenimientos)
router.get("/:id", MantenimientoHabitacionController.getMantenimientoById)
router.post("/", MantenimientoHabitacionController.createMantenimiento)
router.put("/:id", MantenimientoHabitacionController.updateMantenimiento)
router.delete("/:id", MantenimientoHabitacionController.deleteMantenimiento)

export default router
