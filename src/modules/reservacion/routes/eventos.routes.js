import { Router } from "express"
import EventoController from "../controllers/eventos.controller.js"

const router = Router()

router.get("/", EventoController.getAllEventos)
router.get("/:id", EventoController.getEventoById)
router.post("/", EventoController.createEvento)
router.put("/:id", EventoController.updateEvento)
router.delete("/:id", EventoController.deleteEvento)

export default router
