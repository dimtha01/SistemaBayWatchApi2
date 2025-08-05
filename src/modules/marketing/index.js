import paquetesRoutes from "./routes/paquetes.routes.js"
import promocionesRoutes from "./routes/promociones.routes.js"

export default function registerMarketingRoutes(app) {
  app.use("/api/paquetes", paquetesRoutes)
  app.use("/api/promociones", promocionesRoutes)
}