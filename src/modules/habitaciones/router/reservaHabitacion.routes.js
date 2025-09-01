import { Router } from "express";
import { getReservasPorHabitacion } from "../controllers/reservaHbitacion.controller.js";

const router = Router()

router.get("/:habitacion_id", getReservasPorHabitacion)

export default router