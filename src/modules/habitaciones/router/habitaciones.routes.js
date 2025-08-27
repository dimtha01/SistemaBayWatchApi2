import { Router } from "express";
import { getAllHabitacionComodidades } from "../controllers/habitaciones.controller.js";

const router = Router()

router.get("/", getAllHabitacionComodidades);

export default router;