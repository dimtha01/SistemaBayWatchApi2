import { Router } from "express"
import DepartamentoController from "../controllers/departamentos.controller.js"

const router = Router()

router.get("/", DepartamentoController.getAllDepartamentos)
router.get("/:id", DepartamentoController.getDepartamentoById)
router.post("/", DepartamentoController.createDepartamento)
router.put("/:id", DepartamentoController.updateDepartamento)
router.delete("/:id", DepartamentoController.deleteDepartamento)

export default router
