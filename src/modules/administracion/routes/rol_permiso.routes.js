import { Router } from "express"
import RolPermisoController from "../controllers/rol_permiso.controller.js"

const router = Router()

router.get("/", RolPermisoController.getAllRolPermiso)
router.get("/:id", RolPermisoController.getRolPermisoByRolId) // 'id' es rol_id
router.post("/", RolPermisoController.createRolPermiso)
router.put("/:id", RolPermisoController.updateRolPermiso) // 'id' es rol_id, permiso_id en body
router.delete("/:id", RolPermisoController.deleteRolPermiso) // 'id' es rol_id, permiso_id en body

export default router
