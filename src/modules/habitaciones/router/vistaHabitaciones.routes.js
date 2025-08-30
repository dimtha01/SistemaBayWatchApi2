import { Router } from "express";
import { getVistasHabitacion } from "../controllers/vistaHabitaciones.controller.js";


const router = Router();

router.get('/', getVistasHabitacion);

export default router;