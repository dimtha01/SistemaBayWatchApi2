import { Router } from "express"
import CateringController from "../controllers/catering.controller.js"

const router = Router()

router.get("/", CateringController.getAllCatering)
router.get("/:id", CateringController.getCateringById)
router.post("/", CateringController.createCatering)
router.put("/:id", CateringController.updateCatering)
router.delete("/:id", CateringController.deleteCatering)

export default router
