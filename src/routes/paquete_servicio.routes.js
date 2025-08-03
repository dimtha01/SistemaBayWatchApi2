import { Router } from "express"
import PaqueteServicioController from "../controllers/paquete_servicio.controller.js"

const router = Router()

router.get("/", PaqueteServicioController.getAllPaqueteServicio)
router.get("/:id", PaqueteServicioController.getPaqueteServicioByPaqueteId) // 'id' es paquete_id
router.post("/", PaqueteServicioController.createPaqueteServicio)
router.put("/:id", PaqueteServicioController.updatePaqueteServicio) // 'id' es paquete_id, servicio_id en body
router.delete("/:id", PaqueteServicioController.deletePaqueteServicio) // 'id' es paquete_id, servicio_id en body

export default router
