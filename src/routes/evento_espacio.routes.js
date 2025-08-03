import { Router } from "express"
import EventoEspacioController from "../controllers/evento_espacio.controller.js"

const router = Router()

router.get("/", EventoEspacioController.getAllEventoEspacio)
router.get("/:id", EventoEspacioController.getEventoEspacioByEventoId) // 'id' es evento_id
router.post("/", EventoEspacioController.createEventoEspacio)
router.put("/:id", EventoEspacioController.updateEventoEspacio) // 'id' es evento_id, espacio_id y fecha_uso en body
router.delete("/:id", EventoEspacioController.deleteEventoEspacio) // 'id' es evento_id, espacio_id y fecha_uso en body

export default router
