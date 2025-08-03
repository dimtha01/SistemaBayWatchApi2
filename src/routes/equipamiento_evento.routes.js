import { Router } from "express"
import EquipamientoEventoController from "../controllers/equipamiento_evento.controller.js"

const router = Router()

router.get("/", EquipamientoEventoController.getAllEquipamiento)
router.get("/:id", EquipamientoEventoController.getEquipamientoById)
router.post("/", EquipamientoEventoController.createEquipamiento)
router.put("/:id", EquipamientoEventoController.updateEquipamiento)
router.delete("/:id", EquipamientoEventoController.deleteEquipamiento)

export default router
