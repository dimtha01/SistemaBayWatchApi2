import { Router } from "express"
import TipoEventoController from "../controllers/tipos_evento.controller.js"

const router = Router()

router.get("/", TipoEventoController.getAllTiposEvento)
router.get("/:id", TipoEventoController.getTipoEventoById)
router.post("/", TipoEventoController.createTipoEvento)
router.put("/:id", TipoEventoController.updateTipoEvento)
router.delete("/:id", TipoEventoController.deleteTipoEvento)

export default router
