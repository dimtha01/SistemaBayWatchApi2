import { Router } from "express"
import PersonalController from "../controllers/personal.controller.js"

const router = Router()

router.get("/", PersonalController.getAllPersonal)
router.get("/:id", PersonalController.getPersonalById)
router.post("/", PersonalController.createPersonal)
router.put("/:id", PersonalController.updatePersonal)
router.delete("/:id", PersonalController.deletePersonal)

export default router
