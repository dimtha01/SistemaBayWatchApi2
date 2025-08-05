import categoriasServicioRoutes from "./routes/categorias_servicio.routes.js"
import mantenimientoHabitacionRoutes from "./routes/mantenimiento_habitacion.routes.js"

export default function registerMantenimientoRoutes(app) {
  app.use("/api/categorias-servicio", categoriasServicioRoutes)
  app.use("/api/mantenimiento-habitacion", mantenimientoHabitacionRoutes)
}
