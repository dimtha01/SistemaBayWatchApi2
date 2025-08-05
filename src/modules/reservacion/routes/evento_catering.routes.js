import { Router } from "express"
import EventoCateringController from "../controllers/evento_catering.controller.js"

const router = Router()

router.get("/", EventoCateringController.getAllEventoCatering)
router.get("/:id", EventoCateringController.getEventoCateringByEventoId) // 'id' es evento_id
router.post("/", EventoCateringController.createEventoCatering)
router.put("/:id", EventoCateringController.updateEventoCatering) // 'id' es evento_id, catering_id en body
router.delete("/:id", EventoCateringController.deleteEventoCatering) // 'id' es evento_id, catering_id en body

export default router
