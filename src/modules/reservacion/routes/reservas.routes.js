import { Router } from "express"
import ReservaController from "../controllers/reservas.controller.js"

const router = Router()

router.get("/", ReservaController.getAllReservas)
router.get("/:id", ReservaController.getReservaById)
router.post("/", ReservaController.createReserva)
router.put("/:id", ReservaController.updateReserva)
router.delete("/:id", ReservaController.deleteReserva)

export default router
