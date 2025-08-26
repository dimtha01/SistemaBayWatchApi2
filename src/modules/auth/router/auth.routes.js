// src/routes/auth.routes.js
import express from "express"
import { login, getProfile, register } from "../controllers/auth.controller.js"
import { protect } from "../middleware/auth.middleware.js"

const router = express.Router()

// Public routes
router.post("/login", login)
router.post("/register", register)

// Protected routes
router.get("/profile", protect, getProfile)

export default router