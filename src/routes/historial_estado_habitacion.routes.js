import { Router } from "express"
import HistorialEstadoHabitacionController from "../controllers/historial_estado_habitacion.controller.js"

const router = Router()

router.get("/", HistorialEstadoHabitacionController.getAllHistoriales)
router.get("/:id", HistorialEstadoHabitacionController.getHistorialById)
router.post("/", HistorialEstadoHabitacionController.createHistorial)
router.put("/:id", HistorialEstadoHabitacionController.updateHistorial)
router.delete("/:id", HistorialEstadoHabitacionController.deleteHistorial)

export default router
