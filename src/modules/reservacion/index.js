// src/modules/reservacion/index.js
import equipamientoEventoRoutes from "./routes/equipamiento_evento.routes.js"
import espaciosEventoRoutes from "./routes/espacios_evento.routes.js"
import eventoCateringRoutes from "./routes/evento_catering.routes.js"
import eventoEquipamientoRoutes from "./routes/evento_equipamiento.routes.js"
import eventoEspacioRoutes from "./routes/evento_espacio.routes.js"
import eventoRoutes from "./routes/eventos.routes.js"
import reservaPromocionRoutes from "./routes/reserva_promocion.routes.js"
import reservasRoutes from "./routes/reservas.routes.js"
import tiposEventoRoutes from "./routes/tipos_evento.routes.js"

export default function registerReservacionRoutes(app) {
  app.use("/api/equipamiento-evento", equipamientoEventoRoutes)
  app.use("/api/espacios-evento", espaciosEventoRoutes)
  app.use("/api/evento-catering", eventoCateringRoutes)
  app.use("/api/evento-equipamiento", eventoEquipamientoRoutes)
  app.use("/api/evento-espacio", eventoEspacioRoutes)
  app.use("/api/evento", eventoRoutes)
  app.use("/api/reserva-promocion", reservaPromocionRoutes)
  app.use("/api/reservas", reservasRoutes)
  app.use("/api/tipos-evento", tiposEventoRoutes)
}
