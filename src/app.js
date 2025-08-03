import express from "express"
import asistenciaRoutes from "./routes/asistencia.routes.js"
import caracteristicasHabitacionRoutes from "./routes/caracteristicas_habitacion.routes.js"
import cargosRoutes from "./routes/cargos.routes.js"
import categoriasServicioRoutes from "./routes/categorias_servicio.routes.js"
import cateringRoutes from "./routes/catering.routes.js"
import consumosServicioRoutes from "./routes/consumos_servicio.routes.js"
import departamentosRoutes from "./routes/departamentos.routes.js"
import detalleReservaHabitacionRoutes from "./routes/detalle_reserva_habitacion.routes.js"
import equipamientoEventoRoutes from "./routes/equipamiento_evento.routes.js"
import espaciosEventoRoutes from "./routes/espacios_evento.routes.js"
import evaluacionesDesempenioRoutes from "./routes/evaluaciones_desempenio.routes.js"
import eventoCateringRoutes from "./routes/evento_catering.routes.js"
import eventoEquipamientoRoutes from "./routes/evento_equipamiento.routes.js"
import eventoEspacioRoutes from "./routes/evento_espacio.routes.js"
import eventosRoutes from "./routes/eventos.routes.js"
import habitacionCaracteristicaRoutes from "./routes/habitacion_caracteristica.routes.js"
import habitacionesRoutes from "./routes/habitaciones.routes.js"
import historialEstadoHabitacionRoutes from "./routes/historial_estado_habitacion.routes.js"
import huespedesRoutes from "./routes/huespedes.routes.js"
import inventarioServicioRoutes from "./routes/inventario_servicio.routes.js"
import mantenimientoHabitacionRoutes from "./routes/mantenimiento_habitacion.routes.js"
import paqueteServicioRoutes from "./routes/paquete_servicio.routes.js"
import paquetesRoutes from "./routes/paquetes.routes.js"
import permisosRoutes from "./routes/permisos.routes.js"
import personalRoutes from "./routes/personal.routes.js"
import promocionesRoutes from "./routes/promociones.routes.js"
import reservaPromocionRoutes from "./routes/reserva_promocion.routes.js"
import reservasRoutes from "./routes/reservas.routes.js"
import rolPermisoRoutes from "./routes/rol_permiso.routes.js"
import rolesRoutes from "./routes/roles.routes.js"
import serviciosRoutes from "./routes/servicios.routes.js "
import tarifasRoutes from "./routes/tarifas.routes.js"
import tiposEventoRoutes from "./routes/tipos_evento.routes.js"
import tiposHabitacionRoutes from "./routes/tipos_habitacion.routes.js"
import turnosRoutes from "./routes/turnos.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"

import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config() // Carga las variables de entorno

const app = express()
const PORT = process.env.PORT || 3000

// Middleware para parsear JSON en las peticiones
app.use(morgan('dev'))
app.use(express.json())

// Rutas de la API
app.use("/api/asistencia", asistenciaRoutes);
app.use("/api/caracteristicas_habitacion", caracteristicasHabitacionRoutes);
app.use("/api/cargos", cargosRoutes);
app.use("/api/categorias_servicio", categoriasServicioRoutes);
app.use("/api/catering", cateringRoutes) // Nueva ruta
app.use("/api/consumos_servicio", consumosServicioRoutes) // Nueva ruta
app.use("/api/departamentos", departamentosRoutes) // Nueva ruta
app.use("/api/detalle_reserva_habitacion", detalleReservaHabitacionRoutes) // Nueva ruta
app.use("/api/equipamiento_evento", equipamientoEventoRoutes) // Nueva ruta
app.use("/api/espacios_evento", espaciosEventoRoutes) // Nueva ruta
app.use("/api/evaluaciones_desempenio", evaluacionesDesempenioRoutes) // Nueva ruta
app.use("/api/evento_catering", eventoCateringRoutes) // Nueva ruta
app.use("/api/evento_equipamiento", eventoEquipamientoRoutes) // Nueva ruta
app.use("/api/evento_espacio", eventoEspacioRoutes) // Nueva ruta
app.use("/api/eventos", eventosRoutes) // Nueva ruta
app.use("/api/habitacion_caracteristica", habitacionCaracteristicaRoutes) // Nueva ruta
app.use("/api/habitaciones", habitacionesRoutes) // Nueva ruta
app.use("/api/historial_estado_habitacion", historialEstadoHabitacionRoutes) // Nueva ruta
app.use("/api/huespedes", huespedesRoutes) // Nueva ruta
app.use("/api/inventario_servicio", inventarioServicioRoutes) // Nueva ruta
app.use("/api/mantenimiento_habitacion", mantenimientoHabitacionRoutes) // Nueva ruta
app.use("/api/paquete_servicio", paqueteServicioRoutes) // Nueva ruta
app.use("/api/paquetes", paquetesRoutes) // Nueva ruta
app.use("/api/permisos", permisosRoutes) // Nueva ruta
app.use("/api/personal", personalRoutes) // Nueva ruta
app.use("/api/promociones", promocionesRoutes) // Nueva ruta
app.use("/api/reserva_promocion", reservaPromocionRoutes) // Nueva ruta
app.use("/api/reservas", reservasRoutes) // Nueva ruta
app.use("/api/rol_permiso", rolPermisoRoutes) // Nueva ruta
app.use("/api/roles", rolesRoutes) // Nueva ruta
app.use("/api/servicios", serviciosRoutes) // Nueva ruta
app.use("/api/tarifas", tarifasRoutes) // Nueva ruta
app.use("/api/tipos_evento", tiposEventoRoutes) // Nueva ruta
app.use("/api/tipos_habitacion", tiposHabitacionRoutes) // Nueva ruta
app.use("/api/turnos", turnosRoutes) // Nueva ruta
app.use("/api/usuarios", usuariosRoutes) // Nueva ruta

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Sistema BayWatch funcionando!")
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
