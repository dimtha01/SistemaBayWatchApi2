import { Router } from "express"
import DetalleReservaHabitacionController from "../controllers/detalle_reserva_habitacion.controller.js"

const router = Router()

router.get("/", DetalleReservaHabitacionController.getAllDetalles)
router.get("/:id", DetalleReservaHabitacionController.getDetalleById)
router.post("/", DetalleReservaHabitacionController.createDetalle)
router.put("/:id", DetalleReservaHabitacionController.updateDetalle)
router.delete("/:id", DetalleReservaHabitacionController.deleteDetalle)

export default router
