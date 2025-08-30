import { Router } from "express";
import { getTiposCama } from "../controllers/tiposCamas.controller.js";

const router = Router();

router.get("/", getTiposCama)

export default router;