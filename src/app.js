import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import registerModules from "./modules/index.js"
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import { upload } from "./middleware/uploadMiddleware.js";


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan("dev"))
app.use(express.json())
app.use(cors());

const uploadsPath = path.join(__dirname, 'uploads');
console.log("Serviendo desde:", uploadsPath);
app.use('/uploads', express.static(uploadsPath));
// Registrar todos los módulos
registerModules(app)

app.get("/", (req, res) => {
  res.send("API de Sistema BayWatch funcionando!")
})

const uploadImgHabitaciones = upload.fields([{ name: "habitaciones", maxCount: 5 }]); // Cambia maxCount al número que quieras

app.post('/upland', uploadImgHabitaciones, (req, res) => {
  if (!req.files || !req.files.habitaciones) {
    return res.status(400).json({
      success: false,
      message: 'No se subió ningún archivo'
    });
  }

  const files = req.files.habitaciones;
  const uploadedFiles = files.map(file => ({
    filename: file.filename,
    url: `/uploads/images/habitaciones/${file.filename}`
  }));

  res.json({
    success: true,
    message: `${files.length} imagen(es) subida(s) exitosamente`,
    files: uploadedFiles,
    totalFiles: files.length
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})