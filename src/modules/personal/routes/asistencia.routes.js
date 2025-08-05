import { Router } from "express"
import AsistenciaController from "../controllers/asistencia.controller.js"

const router = Router()

router.get("/", AsistenciaController.getAll)
router.get("/:id", AsistenciaController.getById)
router.post("/", AsistenciaController.create)
router.put("/:id", AsistenciaController.update)
router.delete("/:id", AsistenciaController.remove)

export default router