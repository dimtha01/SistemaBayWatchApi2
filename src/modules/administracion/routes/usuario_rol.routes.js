import { Router } from "express"
import UsuarioRolController from "../controllers/usuario_rol.controller.js"

const router = Router()

router.get("/", UsuarioRolController.getAllUsuarioRol)
router.get("/:id", UsuarioRolController.getUsuarioRolById)
router.post("/", UsuarioRolController.createUsuarioRol)
router.put("/:id", UsuarioRolController.updateUsuarioRol)
router.delete("/:id", UsuarioRolController.deleteUsuarioRol)

export default router
