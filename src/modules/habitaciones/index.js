import habitacionesRoutes from "./router/habitaciones.routes.js"

export const habitacionesRouter = (app) => {
  app.use('/api/habitaciones', habitacionesRoutes)
}