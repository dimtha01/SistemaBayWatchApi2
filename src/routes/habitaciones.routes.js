import { Router } from "express"
import HabitacionController from "../controllers/habitaciones.controller.js"

const router = Router()

router.get("/", HabitacionController.getAllHabitaciones)
router.get("/:id", HabitacionController.getHabitacionById)
router.post("/", HabitacionController.createHabitacion)
router.put("/:id", HabitacionController.updateHabitacion)
router.delete("/:id", HabitacionController.deleteHabitacion)

export default router
