import { Router } from "express"
import PermisoController from "../controllers/permisos.controller.js"

const router = Router()

router.get("/", PermisoController.getAllPermisos)
router.get("/:id", PermisoController.getPermisoById)
router.post("/", PermisoController.createPermiso)
router.put("/:id", PermisoController.updatePermiso)
router.delete("/:id", PermisoController.deletePermiso)

export default router
