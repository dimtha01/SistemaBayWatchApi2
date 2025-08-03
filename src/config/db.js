import mysql from "mysql2/promise"
import dotenv from "dotenv"

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "proyecto_de_gestion_de_hotele",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("✅ Conexión a la base de datos exitosa.");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error.message);
    process.exit(1); // Opcional: salir del proceso si falla la conexión
  }
}

testConnection();
export default pool
