import { Router } from "express";
import { getComodidades } from "../controllers/comodidades.controller.js";

const router = Router()

router.get("/", getComodidades);

export default router;