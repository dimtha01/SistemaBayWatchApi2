import { Router } from "express"
import HabitacionCaracteristicaController from "../controllers/habitacion_caracteristica.controller.js"

const router = Router()

router.get("/", HabitacionCaracteristicaController.getAllHabitacionCaracteristicas)
router.get("/:id", HabitacionCaracteristicaController.getHabitacionCaracteristicaByHabitacionId) // 'id' es habitacion_id
router.post("/", HabitacionCaracteristicaController.createHabitacionCaracteristica)
router.put("/:id", HabitacionCaracteristicaController.updateHabitacionCaracteristica) // 'id' es habitacion_id, caracteristica_id en body
router.delete("/:id", HabitacionCaracteristicaController.deleteHabitacionCaracteristica) // 'id' es habitacion_id, caracteristica_id en body

export default router
