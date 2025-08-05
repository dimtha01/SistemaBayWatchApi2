import registerAdministracionRoutes from "./administracion/index.js"
import registerPersonalRoutes from "./personal/index.js"
import registerHospedajeRoutes from "./hospedaje/index.js"
import registerMantenimientoRoutes from "./mantenimiento/index.js"
import registerReservacionRoutes from "./reservacion/index.js"
// import registerFallasRoutes from "./fallas/index.js"
// import registerGerencialRoutes from "./gerencial/index.js"
import registerMarketingRoutes from "./marketing/index.js"

export default function registerModules(app) {
  registerAdministracionRoutes(app)
  registerPersonalRoutes(app)
  registerHospedajeRoutes(app)
  registerMantenimientoRoutes(app)
  registerReservacionRoutes(app)
  // registerFallasRoutes(app)
  // registerGerencialRoutes(app)
  registerMarketingRoutes(app)
}