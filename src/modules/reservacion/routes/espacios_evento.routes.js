import { Router } from "express"
import EspacioEventoController from "../controllers/espacios_evento.controller.js"

const router = Router()

router.get("/", EspacioEventoController.getAllEspacios)
router.get("/:id", EspacioEventoController.getEspacioById)
router.post("/", EspacioEventoController.createEspacio)
router.put("/:id", EspacioEventoController.updateEspacio)
router.delete("/:id", EspacioEventoController.deleteEspacio)

export default router
