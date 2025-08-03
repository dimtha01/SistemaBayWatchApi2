import { Router } from "express"
import InventarioServicioController from "../controllers/inventario_servicio.controller.js"

const router = Router()

router.get("/", InventarioServicioController.getAllInventarioServicio)
router.get("/:id", InventarioServicioController.getInventarioServicioById)
router.post("/", InventarioServicioController.createInventarioServicio)
router.put("/:id", InventarioServicioController.updateInventarioServicio)
router.delete("/:id", InventarioServicioController.deleteInventarioServicio)

export default router
