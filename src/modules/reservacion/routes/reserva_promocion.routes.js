import { Router } from "express"
import ReservaPromocionController from "../controllers/reserva_promocion.controller.js"

const router = Router()

router.get("/", ReservaPromocionController.getAllReservaPromocion)
router.get("/:id", ReservaPromocionController.getReservaPromocionByReservaId) // 'id' es reserva_id
router.post("/", ReservaPromocionController.createReservaPromocion)
router.put("/:id", ReservaPromocionController.updateReservaPromocion) // 'id' es reserva_id, promocion_id en body
router.delete("/:id", ReservaPromocionController.deleteReservaPromocion) // 'id' es reserva_id, promocion_id en body

export default router
