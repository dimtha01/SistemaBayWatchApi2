import { Router } from "express"
import AsistenciaController from "../controllers/asistencia.controller.js"

const router = Router()

router.get("/", AsistenciaController.getAllAsistencias)
router.get("/:id", AsistenciaController.getAsistenciaById)
router.post("/", AsistenciaController.createAsistencia)
router.put("/:id", AsistenciaController.updateAsistencia)
router.delete("/:id", AsistenciaController.deleteAsistencia)

export default router
