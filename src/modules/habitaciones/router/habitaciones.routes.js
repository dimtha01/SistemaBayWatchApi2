import { Router } from "express";
import { getAllHabitaciones, getHabitacionById } from "../controllers/habitaciones.controller.js";

const router = Router()

router.get("/", getAllHabitaciones);
router.get("/:id", getHabitacionById);

export default router;