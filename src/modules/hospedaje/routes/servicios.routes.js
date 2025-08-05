import { Router } from "express"
import ServicioController from "../controllers/servicios.controller.js"

const router = Router()

router.get("/", ServicioController.getAllServicios)
router.get("/:id", ServicioController.getServicioById)
router.post("/", ServicioController.createServicio)
router.put("/:id", ServicioController.updateServicio)
router.delete("/:id", ServicioController.deleteServicio)

export default router
