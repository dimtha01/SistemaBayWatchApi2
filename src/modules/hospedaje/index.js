import caracteristicasRoutes from "./routes/caracteristicas_habitacion.routes.js"
import cateringRoutes from "./routes/catering.routes.js"
import consumosServicioRoutes from "./routes/consumos_servicio.routes.js"
import detalleReservaHabitacionRoutes from "./routes/detalle_reserva_habitacion.routes.js"
import habitacionCaracteristicaRoutes from "./routes/habitacion_caracteristica.routes.js"
import habitacionesRoutes from "./routes/habitaciones.routes.js"
import historialEstadoHabitacionRoutes from "./routes/historial_estado_habitacion.routes.js"
import huespedesRoutes from "./routes/huespedes.routes.js"
import paqueteServicioRoutes from "./routes/paquete_servicio.routes.js"
import serviciosRoutes from "./routes/servicios.routes.js"
import tarifasRoutes from "./routes/tarifas.routes.js"
import tiposHabitacionRoutes from "./routes/tipos_habitacion.routes.js"

export default function registerHospedajeRoutes(app) {
  app.use("/api/caracteristicas_habitacion", caracteristicasRoutes)
  app.use("/api/catering", cateringRoutes)
  app.use("/api/consumos-servicio", consumosServicioRoutes)
  app.use("/api/detalle-reserva-habitacion", detalleReservaHabitacionRoutes)
  app.use("/api/habitacion-caracteristica", habitacionCaracteristicaRoutes)
  app.use("/api/habitaciones", habitacionesRoutes)
  app.use("/api/historial-estado-habitacion", historialEstadoHabitacionRoutes)
  app.use("/api/huespedes", huespedesRoutes)
  app.use("/api/paquete-servicio", paqueteServicioRoutes)
  app.use("/api/servicios", serviciosRoutes)
  app.use("/api/tarifas", tarifasRoutes)
  app.use("/api/tipos-habitacion", tiposHabitacionRoutes)
}