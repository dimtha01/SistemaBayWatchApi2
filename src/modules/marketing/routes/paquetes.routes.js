import { Router } from "express"
import PaqueteController from "../controllers/paquetes.controller.js"

const router = Router()

router.get("/", PaqueteController.getAllPaquetes)
router.get("/:id", PaqueteController.getPaqueteById)
router.post("/", PaqueteController.createPaquete)
router.put("/:id", PaqueteController.updatePaquete)
router.delete("/:id", PaqueteController.deletePaquete)

export default router
