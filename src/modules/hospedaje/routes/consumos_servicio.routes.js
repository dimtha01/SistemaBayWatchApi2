import { Router } from "express"
import ConsumoServicioController from "../controllers/consumos_servicio.controller.js"

const router = Router()

router.get("/", ConsumoServicioController.getAllConsumos)
router.get("/:id", ConsumoServicioController.getConsumoById)
router.post("/", ConsumoServicioController.createConsumo)
router.put("/:id", ConsumoServicioController.updateConsumo)
router.delete("/:id", ConsumoServicioController.deleteConsumo)

export default router
