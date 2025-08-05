import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import registerModules from "./modules/index.js"
import cors from "cors";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(morgan("dev"))
app.use(express.json())
app.use(cors());
// Registrar todos los módulos
registerModules(app)

app.get("/", (req, res) => {
  res.send("API de Sistema BayWatch funcionando!")
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})