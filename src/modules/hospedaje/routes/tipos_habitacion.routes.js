import { Router } from "express"
import TipoHabitacionController from "../controllers/tipos_habitacion.controller.js"

const router = Router()

router.get("/", TipoHabitacionController.getAllTiposHabitacion)
router.get("/:id", TipoHabitacionController.getTipoHabitacionById)
router.post("/", TipoHabitacionController.createTipoHabitacion)
router.put("/:id", TipoHabitacionController.updateTipoHabitacion)
router.delete("/:id", TipoHabitacionController.deleteTipoHabitacion)

export default router
