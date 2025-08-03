import { Router } from "express"
import HuespedController from "../controllers/huespedes.controller.js"

const router = Router()

router.get("/", HuespedController.getAllHuespedes)
router.get("/:id", HuespedController.getHuespedById)
router.post("/", HuespedController.createHuesped)
router.put("/:id", HuespedController.updateHuesped)
router.delete("/:id", HuespedController.deleteHuesped)

export default router
