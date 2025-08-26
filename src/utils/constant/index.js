// src/config.js
import dotenv from "dotenv"

dotenv.config()


export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "healderia_db";
export const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";
