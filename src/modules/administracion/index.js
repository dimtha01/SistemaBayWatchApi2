
import cargosRoutes from "./routes/cargos.routes.js"
import inventarioServicioRoutes from "./routes/inventario_servicio.routes.js"
import permisosRoutes from "./routes/permisos.routes.js"
import rolPermisoRoutes from "./routes/rol_permiso.routes.js"
import rolesRoutes from "./routes/roles.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"
import usuarioRolRoutes from "./routes/usuario_rol.routes.js"

export default function registerAdministracionRoutes(app) {
  app.use("/api/cargos", cargosRoutes)
  app.use("/api/inventario-servicio", inventarioServicioRoutes)
  app.use("/api/permisos", permisosRoutes)
  app.use("/api/rol-permiso", rolPermisoRoutes)
  app.use("/api/roles", rolesRoutes)
  app.use("/api/usuarios", usuariosRoutes)
  app.use("/api/usuario-rol", usuarioRolRoutes)
}