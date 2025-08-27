import multer from "multer"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// __dirname en ESModules
const __filename = fileURLToPath(import.meta.url)
// Go up one level from 'middlewares' to 'src'
const __dirname = path.dirname(__filename)

// Carpetas - now relative to src/
const uploadsDir = path.join(__dirname, "..", "uploads") // This places 'uploads' inside 'src'
const imagesDir = path.join(uploadsDir, "images")
const habitacionesDir = path.join(imagesDir, "habitaciones") // Subcarpeta para habitaciones

// Crear carpeta si no existe
const ensureDirExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// ✅ Crear todas las carpetas al iniciar
;[uploadsDir, imagesDir, habitacionesDir].forEach(ensureDirExists)

// Almacenamiento dinámico
const dynamicStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isImage = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"].includes(file.mimetype)
    
    if (!isImage) {
      return cb(new Error("Solo se permiten archivos de imagen"), null)
    }

    // Si el campo es para habitaciones, usar la carpeta específica
    if (file.fieldname === "habitaciones" || file.fieldname === "imagenesHabitacion") {
      cb(null, habitacionesDir)
    } else {
      // Para otros tipos de imágenes, usar la carpeta general de images
      cb(null, imagesDir)
    }
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname)
    const base = path.basename(file.originalname, ext).replace(/\s+/g, "_")
    const uniqueName = `${base}-${Date.now()}${ext}`
    cb(null, uniqueName)
  },
})

// Filtro de tipos de archivo - solo imágenes
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"]
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb(new Error("Solo se permiten archivos de imagen (JPEG, PNG, WebP, SVG)"), false)
  }
}

// Multer configurado para múltiples campos
export const upload = multer({
  storage: dynamicStorage,
  fileFilter,
})