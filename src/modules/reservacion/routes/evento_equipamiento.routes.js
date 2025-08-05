import { Router } from "express"
import EventoEquipamientoController from "../controllers/evento_equipamiento.controller.js"

const router = Router()

router.get("/", EventoEquipamientoController.getAllEventoEquipamiento)
router.get("/:id", EventoEquipamientoController.getEventoEquipamientoByEventoId) // 'id' es evento_id
router.post("/", EventoEquipamientoController.createEventoEquipamiento)
router.put("/:id", EventoEquipamientoController.updateEventoEquipamiento) // 'id' es evento_id, equipamiento_id en body
router.delete("/:id", EventoEquipamientoController.deleteEventoEquipamiento) // 'id' es evento_id, equipamiento_id en body

export default router
