import { Router } from "express"
import TurnoController from "../controllers/turnos.controller.js"

const router = Router()

router.get("/", TurnoController.getAllTurnos)
router.get("/:id", TurnoController.getTurnoById)
router.post("/", TurnoController.createTurno)
router.put("/:id", TurnoController.updateTurno)
router.delete("/:id", TurnoController.deleteTurno)

export default router
  