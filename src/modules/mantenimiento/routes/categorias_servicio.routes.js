import { Router } from "express"
import CategoriaServicioController from "../controllers/categorias_servicio.controller.js"

const router = Router()

router.get("/", CategoriaServicioController.getAllCategorias)
router.get("/:id", CategoriaServicioController.getCategoriaById)
router.post("/", CategoriaServicioController.createCategoria)
router.put("/:id", CategoriaServicioController.updateCategoria)
router.delete("/:id", CategoriaServicioController.deleteCategoria)

export default router
