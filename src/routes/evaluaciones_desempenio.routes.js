import { Router } from "express"
import EvaluacionDesempenioController from "../controllers/evaluaciones_desempenio.controller.js"

const router = Router()

router.get("/", EvaluacionDesempenioController.getAllEvaluaciones)
router.get("/:id", EvaluacionDesempenioController.getEvaluacionById)
router.post("/", EvaluacionDesempenioController.createEvaluacion)
router.put("/:id", EvaluacionDesempenioController.updateEvaluacion)
router.delete("/:id", EvaluacionDesempenioController.deleteEvaluacion)

export default router
