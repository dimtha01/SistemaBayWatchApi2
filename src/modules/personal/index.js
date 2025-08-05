import asistenciaRoutes from "./routes/asistencia.routes.js"
import departamentosRoutes from "./routes/departamentos.routes.js"
import evaluacionesDesempenioRoutes from './routes/evaluaciones_desempenio.routes.js'
import personalRoutes from './routes/personal.routes.js'
import turnosRoutes from './routes/turnos.routes.js'

export default function registerPersonalRoutes(app) {
  app.use("/api/asistencia", asistenciaRoutes)
  app.use("/api/departamentos", departamentosRoutes)
  app.use("/api/evaluaciones-desempenio", evaluacionesDesempenioRoutes)
  app.use("/api/personal", personalRoutes)
  app.use("/api/turnos", turnosRoutes)
}