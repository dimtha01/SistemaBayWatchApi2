import habitacionesRoutes from "./router/habitaciones.routes.js"
import comodidadesRoutes from "./router/comodidades.routes.js"
import tiposCamasRoutes from "./router/tiposCamas.routes.js"
import vistasHabitacionesRoutes from "./router/vistaHabitaciones.routes.js"
import reservaHabitacionRoutes from "./router/reservaHabitacion.routes.js"

export const habitacionesRouter = (app) => {
  app.use('/api/habitaciones', habitacionesRoutes)
  app.use('/api/comodidades', comodidadesRoutes)
  app.use('/api/tiposCamas', tiposCamasRoutes)
  app.use('/api/vistaHabitacion', vistasHabitacionesRoutes)
  app.use('/api/reservaHabitacion', reservaHabitacionRoutes)

}