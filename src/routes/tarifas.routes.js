import { Router } from "express"
import TarifaController from "../controllers/tarifas.controller.js"

const router = Router()

router.get("/", TarifaController.getAllTarifas)
router.get("/:id", TarifaController.getTarifaById)
router.post("/", TarifaController.createTarifa)
router.put("/:id", TarifaController.updateTarifa)
router.delete("/:id", TarifaController.deleteTarifa)

export default router
