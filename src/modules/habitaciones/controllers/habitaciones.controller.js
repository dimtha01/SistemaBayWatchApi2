// controllers/habitacionComodidadController.js

import pool from "../../../config/db.js";
import { getDistribucionCalificaciones, getRelativeTime } from "../utils/index.js";

// GET - Obtener todas las relaciones habitación-comodidad con información completa
// export const getAllHabitacionComodidades = async (req, res) => {
//   try {
//     const query = `
//       SELECT 
//         hc.habitacion_id,
//         hc.comodidad_id,
//         hc.fecha_instalacion,
//         hc.notas,
//         -- Información de la habitación
//         h.numero_habitacion,
//         h.estado as estado_habitacion,
//         h.piso,
//         h.vista,
//         -- Información del tipo de habitación
//         th.tipo_habitacion_id,
//         th.nombre_tipo,
//         th.descripcion as descripcion_tipo,
//         th.capacidad_maxima,
//         th.precio_base_noche,
//         -- Información de la comodidad
//         ch.nombre_comodidad,
//         ch.descripcion as descripcion_comodidad,
//         ch.categoria_comodidad,
//         ch.estado as estado_comodidad,
//         -- Información del icono
//         ic.id_icon,
//         ic.icon,
//         ic.text as icon_text,
//         ic.descripcion as icon_descripcion,
//         -- Imagen principal de la habitación
//         img.imagen_id,
//         img.nombre_archivo,
//         img.ruta_archivo as imagen_principal
//       FROM habitacion_comodidad hc
//       INNER JOIN habitaciones h ON hc.habitacion_id = h.habitacion_id
//       LEFT JOIN tipos_habitacion th ON h.tipo_habitacion_id = th.tipo_habitacion_id
//       INNER JOIN comodidades_habitacion ch ON hc.comodidad_id = ch.comodidad_id
//       LEFT JOIN iconos_comodidades ic ON ch.id_icon = ic.id_icon
//       LEFT JOIN imagenes_habitacion img ON h.habitacion_id = img.habitacion_id AND img.es_principal = 1
//       ORDER BY h.piso, h.numero_habitacion, ch.categoria_comodidad, ch.nombre_comodidad
//     `;

//     const [rows] = await pool.execute(query);

//     // Agrupar datos por habitación
//     const habitacionesMap = new Map();

//     rows.forEach(row => {
//       const habitacionId = row.habitacion_id;

//       if (!habitacionesMap.has(habitacionId)) {
//         habitacionesMap.set(habitacionId, {
//           habitacion: {
//             habitacion_id: row.habitacion_id,
//             numero_habitacion: row.numero_habitacion,
//             estado: row.estado_habitacion,
//             piso: row.piso,
//             vista: row.vista,
//             tipo_habitacion: {
//               tipo_habitacion_id: row.tipo_habitacion_id,
//               nombre_tipo: row.nombre_tipo,
//               descripcion: row.descripcion_tipo,
//               capacidad_maxima: row.capacidad_maxima,
//               precio_base_noche: row.precio_base_noche
//             },
//             imagen_principal: row.imagen_principal ? {
//               imagen_id: row.imagen_id,
//               nombre_archivo: row.nombre_archivo,
//               ruta_archivo: row.imagen_principal
//             } : null
//           },
//           comodidades: [],
//           comodidades_por_categoria: {},
//           total_comodidades: 0
//         });
//       }

//       const habitacionData = habitacionesMap.get(habitacionId);

//       // Agregar comodidad
//       const comodidad = {
//         comodidad_id: row.comodidad_id,
//         nombre_comodidad: row.nombre_comodidad,
//         descripcion_comodidad: row.descripcion_comodidad,
//         categoria_comodidad: row.categoria_comodidad,
//         estado_comodidad: row.estado_comodidad,
//         fecha_instalacion: row.fecha_instalacion,
//         notas: row.notas,
//         icono: {
//           id_icon: row.id_icon,
//           icon: row.icon,
//           text: row.icon_text,
//           descripcion: row.icon_descripcion
//         }
//       };

//       habitacionData.comodidades.push(comodidad);
//       habitacionData.total_comodidades++;

//       // Agrupar por categoría
//       const categoria = row.categoria_comodidad;
//       if (!habitacionData.comodidades_por_categoria[categoria]) {
//         habitacionData.comodidades_por_categoria[categoria] = [];
//       }
//       habitacionData.comodidades_por_categoria[categoria].push(comodidad);
//     });

//     // Convertir Map a Array y ordenar por piso y número de habitación
//     const habitacionesConComodidades = Array.from(habitacionesMap.values())
//       .sort((a, b) => {
//         if (a.habitacion.piso !== b.habitacion.piso) {
//           return a.habitacion.piso - b.habitacion.piso;
//         }
//         return a.habitacion.numero_habitacion.localeCompare(b.habitacion.numero_habitacion);
//       });

//     // Estadísticas generales
//     const estadisticas = {
//       total_habitaciones: habitacionesMap.size,
//       total_relaciones: rows.length,
//       habitaciones_por_estado: {},
//       habitaciones_por_piso: {},
//       habitaciones_por_vista: {},
//       comodidades_por_categoria: {},
//       tipos_habitacion_stats: {}
//     };

//     // Calcular estadísticas
//     habitacionesConComodidades.forEach(item => {
//       const estado = item.habitacion.estado;
//       const piso = item.habitacion.piso;
//       const vista = item.habitacion.vista;
//       const tipoNombre = item.habitacion.tipo_habitacion.nombre_tipo;

//       // Estadísticas por estado
//       estadisticas.habitaciones_por_estado[estado] = 
//         (estadisticas.habitaciones_por_estado[estado] || 0) + 1;

//       // Estadísticas por piso
//       estadisticas.habitaciones_por_piso[`Piso ${piso}`] = 
//         (estadisticas.habitaciones_por_piso[`Piso ${piso}`] || 0) + 1;

//       // Estadísticas por vista
//       estadisticas.habitaciones_por_vista[vista] = 
//         (estadisticas.habitaciones_por_vista[vista] || 0) + 1;

//       // Estadísticas por tipo de habitación
//       if (!estadisticas.tipos_habitacion_stats[tipoNombre]) {
//         estadisticas.tipos_habitacion_stats[tipoNombre] = {
//           total_habitaciones: 0,
//           total_comodidades: 0,
//           precio_promedio: 0,
//           pisos: new Set(),
//           estados: {}
//         };
//       }

//       const tipoStats = estadisticas.tipos_habitacion_stats[tipoNombre];
//       tipoStats.total_habitaciones++;
//       tipoStats.total_comodidades += item.total_comodidades;
//       tipoStats.precio_promedio = item.habitacion.tipo_habitacion.precio_base_noche;
//       tipoStats.pisos.add(piso);
//       tipoStats.estados[estado] = (tipoStats.estados[estado] || 0) + 1;

//       // Estadísticas por categoría de comodidad
//       Object.keys(item.comodidades_por_categoria).forEach(categoria => {
//         estadisticas.comodidades_por_categoria[categoria] = 
//           (estadisticas.comodidades_por_categoria[categoria] || 0) + 
//           item.comodidades_por_categoria[categoria].length;
//       });
//     });

//     // Convertir Set a Array para pisos
//     Object.keys(estadisticas.tipos_habitacion_stats).forEach(tipo => {
//       estadisticas.tipos_habitacion_stats[tipo].pisos = 
//         Array.from(estadisticas.tipos_habitacion_stats[tipo].pisos).sort((a, b) => a - b);
//     });

//     // Top habitaciones con más comodidades
//     const topHabitaciones = habitacionesConComodidades
//       .sort((a, b) => b.total_comodidades - a.total_comodidades)
//       .slice(0, 5)
//       .map(item => ({
//         habitacion_id: item.habitacion.habitacion_id,
//         numero_habitacion: item.habitacion.numero_habitacion,
//         piso: item.habitacion.piso,
//         vista: item.habitacion.vista,
//         tipo_habitacion: item.habitacion.tipo_habitacion.nombre_tipo,
//         total_comodidades: item.total_comodidades,
//         estado: item.habitacion.estado
//       }));

//     // Habitaciones por piso organizadas
//     const habitacionesPorPiso = {};
//     habitacionesConComodidades.forEach(item => {
//       const piso = item.habitacion.piso;
//       if (!habitacionesPorPiso[`Piso ${piso}`]) {
//         habitacionesPorPiso[`Piso ${piso}`] = [];
//       }
//       habitacionesPorPiso[`Piso ${piso}`].push({
//         habitacion_id: item.habitacion.habitacion_id,
//         numero_habitacion: item.habitacion.numero_habitacion,
//         estado: item.habitacion.estado,
//         vista: item.habitacion.vista,
//         tipo_habitacion: item.habitacion.tipo_habitacion.nombre_tipo,
//         total_comodidades: item.total_comodidades
//       });
//     });

//     res.status(200).json({
//       success: true,
//       message: 'Información completa de habitaciones y comodidades obtenida exitosamente',

//       // Resumen ejecutivo
//       resumen: {
//         total_habitaciones: estadisticas.total_habitaciones,
//         total_relaciones_habitacion_comodidad: estadisticas.total_relaciones,
//         promedio_comodidades_por_habitacion: estadisticas.total_relaciones > 0 ? 
//           Math.round((estadisticas.total_relaciones / estadisticas.total_habitaciones) * 100) / 100 : 0,
//         pisos_disponibles: Object.keys(estadisticas.habitaciones_por_piso).length,
//         tipos_vista_disponibles: Object.keys(estadisticas.habitaciones_por_vista).length
//       },

//       // Estadísticas detalladas
//       estadisticas: {
//         habitaciones_por_estado: estadisticas.habitaciones_por_estado,
//         habitaciones_por_piso: estadisticas.habitaciones_por_piso,
//         habitaciones_por_vista: estadisticas.habitaciones_por_vista,
//         comodidades_por_categoria: estadisticas.comodidades_por_categoria,
//         tipos_habitacion_estadisticas: estadisticas.tipos_habitacion_stats
//       },

//       // Análisis adicional
//       analisis: {
//         top_habitaciones_con_mas_comodidades: topHabitaciones,
//         habitaciones_por_piso_detallado: habitacionesPorPiso,
//         ocupacion_por_piso: Object.keys(habitacionesPorPiso).map(piso => ({
//           piso: piso,
//           total_habitaciones: habitacionesPorPiso[piso].length,
//           disponibles: habitacionesPorPiso[piso].filter(h => h.estado === 'Disponible').length,
//           ocupadas: habitacionesPorPiso[piso].filter(h => h.estado === 'Ocupada').length,
//           reservadas: habitacionesPorPiso[piso].filter(h => h.estado === 'Reservada').length,
//           mantenimiento: habitacionesPorPiso[piso].filter(h => h.estado === 'Mantenimiento').length
//         }))
//       },

//       // Datos completos organizados por habitación
//       habitaciones_con_comodidades: habitacionesConComodidades,

//       // Metadatos
//       metadata: {
//         fecha_consulta: new Date().toISOString(),
//         total_registros: rows.length,
//         ordenamiento: "Por piso y número de habitación",
//         estructura_respuesta: {
//           resumen: "Información resumida de la consulta",
//           estadisticas: "Análisis estadístico de los datos",
//           analisis: "Análisis avanzado por pisos y ocupación",
//           habitaciones_con_comodidades: "Datos organizados por habitación con comodidades"
//         }
//       }
//     });

//   } catch (error) {
//     console.error('Error al obtener habitación-comodidades:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error interno del servidor',
//       error: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// };
export const getAllHabitaciones = async (req, res) => {
  try {
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    // EXTRAER PARÁMETROS DE FILTRO DE LA URL
    const {
      capacidad,
      tipo_cama,
      vista,
      precio_min,
      precio_max,
      comodidades // Puede ser string separado por comas: "Wi-Fi,TV,Aire Acondicionado"
    } = req.query;

    // CONSTRUIR CONDICIONES WHERE DINÁMICAMENTE
    let whereConditions = [];
    let queryParams = [];

    // Filtro por capacidad
    if (capacidad) {
      whereConditions.push('th.capacidad_maxima >= ?');
      queryParams.push(parseInt(capacidad));
    }

    // Filtro por vista
    if (vista) {
      whereConditions.push('vh.nombre_vista = ?');
      queryParams.push(vista);
    }

    // Filtro por rango de precio
    if (precio_min) {
      whereConditions.push('th.precio_base_noche >= ?');
      queryParams.push(parseFloat(precio_min));
    }
    if (precio_max) {
      whereConditions.push('th.precio_base_noche <= ?');
      queryParams.push(parseFloat(precio_max));
    }

    // Construir la cláusula WHERE
    const whereClause = whereConditions.length > 0
      ? `WHERE ${whereConditions.join(' AND ')}`
      : '';

    // CONSULTA PRINCIPAL MODIFICADA CON FILTROS
    const habitacionesQuery = `
      SELECT 
        h.habitacion_id,
        h.numero_habitacion,
        h.descripcion,
        h.estado,
        h.piso,
        vh.nombre_vista as vista,
        th.tipo_habitacion_id,
        th.nombre_tipo,
        th.capacidad_maxima,
        th.precio_base_noche,
        img.imagen_id,
        img.nombre_archivo,
        img.ruta_archivo,
        img.es_principal,
        img.orden_visualizacion
      FROM habitaciones h
      LEFT JOIN tipos_habitacion th ON h.tipo_habitacion_id = th.tipo_habitacion_id
      LEFT JOIN vistas_habitacion vh ON h.vista_id = vh.vista_id
      LEFT JOIN imagenes_habitacion img ON h.habitacion_id = img.habitacion_id
      ${whereClause}
      ORDER BY h.piso, h.numero_habitacion, img.orden_visualizacion
    `;

    const [habitacionesRows] = await pool.execute(habitacionesQuery, queryParams);

    // Si no hay habitaciones que cumplan los filtros, retornar vacío
    if (habitacionesRows.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No se encontraron habitaciones que cumplan con los filtros especificados',
        data: [],
        total: 0,
        filtros_aplicados: {
          capacidad,
          tipo_cama,
          vista,
          precio_min,
          precio_max,
          comodidades
        }
      });
    }

    // Obtener IDs de habitaciones filtradas para las siguientes consultas
    const habitacionIds = [...new Set(habitacionesRows.map(row => row.habitacion_id))];
    const habitacionIdsPlaceholder = habitacionIds.map(() => '?').join(',');

    // CONSULTA DE COMODIDADES (filtrada por habitaciones)
    let comodidadesQuery = `
      SELECT 
        hc.habitacion_id,
        ch.comodidad_id,
        ch.nombre_comodidad,
        ch.descripcion,
        ch.categoria_comodidad,
        ch.id_icon,
        ch.estado,
        hc.fecha_instalacion,
        hc.notas,
        ic.icon,
        ic.text as icon_text,
        ic.descripcion as icon_descripcion,
        ic.estado as icon_estado
      FROM habitacion_comodidad hc
      INNER JOIN comodidades_habitacion ch ON hc.comodidad_id = ch.comodidad_id
      LEFT JOIN iconos_comodidades ic ON ch.id_icon = ic.id_icon
      WHERE ch.estado = 'Activo' AND hc.habitacion_id IN (${habitacionIdsPlaceholder})
    `;

    // Filtro por comodidades específicas
    let comodidadesParams = [...habitacionIds];
    if (comodidades) {
      const comodidadesList = comodidades.split(',').map(c => c.trim());
      const comodidadesPlaceholder = comodidadesList.map(() => '?').join(',');
      comodidadesQuery += ` AND ch.nombre_comodidad IN (${comodidadesPlaceholder})`;
      comodidadesParams.push(...comodidadesList);
    }

    comodidadesQuery += ` ORDER BY hc.habitacion_id, ch.categoria_comodidad, ch.nombre_comodidad`;

    const [comodidadesRows] = await pool.execute(comodidadesQuery, comodidadesParams);

    // CONSULTA DE CAMAS (filtrada por tipo de habitación)
    const tipoHabitacionIds = [...new Set(habitacionesRows.map(row => row.tipo_habitacion_id))];
    let camasQuery = `
      SELECT 
        thc.tipo_habitacion_id,
        tc.tipo_cama_id,
        tc.nombre_tipo_cama,
        tc.descripcion as descripcion_cama,
        tc.capacidad_personas,
        tc.dimensiones,
        tc.estado as estado_cama,
        thc.cantidad,
        thc.es_principal
      FROM tipo_habitacion_camas thc
      INNER JOIN tipos_cama tc ON thc.tipo_cama_id = tc.tipo_cama_id
      WHERE tc.estado = 'Activo' AND thc.tipo_habitacion_id IN (${tipoHabitacionIds.map(() => '?').join(',')})
    `;

    let camasParams = [...tipoHabitacionIds];

    // Filtro por tipo de cama
    if (tipo_cama) {
      camasQuery += ` AND tc.nombre_tipo_cama = ?`;
      camasParams.push(tipo_cama);
    }

    camasQuery += ` ORDER BY thc.tipo_habitacion_id, thc.es_principal DESC, tc.nombre_tipo_cama`;

    const [camasRows] = await pool.execute(camasQuery, camasParams);

    // Crear mapa de comodidades
    const comodidadesPorHabitacion = {};
    comodidadesRows.forEach(comodidad => {
      if (!comodidadesPorHabitacion[comodidad.habitacion_id]) {
        comodidadesPorHabitacion[comodidad.habitacion_id] = [];
      }
      comodidadesPorHabitacion[comodidad.habitacion_id].push({
        comodidad_id: comodidad.comodidad_id,
        nombre_comodidad: comodidad.nombre_comodidad,
        descripcion: comodidad.descripcion,
        categoria_comodidad: comodidad.categoria_comodidad,
        estado: comodidad.estado,
        fecha_instalacion: comodidad.fecha_instalacion,
        notas: comodidad.notas,
        icono: {
          id_icon: comodidad.id_icon,
          icon: comodidad.icon,
          text: comodidad.icon_text,
          descripcion: comodidad.icon_descripcion,
          estado: comodidad.icon_estado
        }
      });
    });

    // Crear mapa de camas por tipo de habitación
    const camasPorTipoHabitacion = {};
    camasRows.forEach(cama => {
      if (!camasPorTipoHabitacion[cama.tipo_habitacion_id]) {
        camasPorTipoHabitacion[cama.tipo_habitacion_id] = [];
      }
      camasPorTipoHabitacion[cama.tipo_habitacion_id].push({
        tipo_cama_id: cama.tipo_cama_id,
        nombre_tipo_cama: cama.nombre_tipo_cama,
        descripcion: cama.descripcion_cama,
        capacidad_personas: cama.capacidad_personas,
        dimensiones: cama.dimensiones,
        estado: cama.estado_cama,
        cantidad: cama.cantidad,
        es_principal: cama.es_principal,
        capacidad_total: cama.capacidad_personas * cama.cantidad
      });
    });

    // Agrupar habitaciones
    const habitacionesMap = {};

    habitacionesRows.forEach(row => {
      if (!habitacionesMap[row.habitacion_id]) {
        const camasDelTipo = camasPorTipoHabitacion[row.tipo_habitacion_id] || [];
        const capacidadTotalCamas = camasDelTipo.reduce((total, cama) => {
          return total + cama.capacidad_total;
        }, 0);
        const camaPrincipal = camasDelTipo.find(cama => cama.es_principal === 1) || camasDelTipo[0] || null;

        habitacionesMap[row.habitacion_id] = {
          habitacion_id: row.habitacion_id,
          numero_habitacion: row.numero_habitacion,
          estado: row.estado,
          piso: row.piso,
          vista: row.vista,
          tipo_habitacion: {
            tipo_habitacion_id: row.tipo_habitacion_id,
            nombre_tipo: row.nombre_tipo,
            descripcion: row.descripcion,
            capacidad_maxima: row.capacidad_maxima,
            precio_base_noche: row.precio_base_noche,
            camas: camasDelTipo,
            cama_principal: camaPrincipal,
            capacidad_total_camas: capacidadTotalCamas,
            resumen_camas: camasDelTipo.map(cama =>
              `${cama.cantidad} ${cama.nombre_tipo_cama}${cama.cantidad > 1 ? 's' : ''}`
            ).join(', ')
          },
          imagen_id: null,
          nombre_archivo: null,
          ruta_archivo: null,
          orden_visualizacion: null,
          imagenes: []
        };
      }

      if (row.imagen_id) {
        const imagen = {
          imagen_id: row.imagen_id,
          nombre_archivo: row.nombre_archivo,
          ruta_archivo: row.ruta_archivo ? `${baseUrl}${row.ruta_archivo}` : null,
          es_principal: row.es_principal,
          orden_visualizacion: row.orden_visualizacion
        };

        habitacionesMap[row.habitacion_id].imagenes.push(imagen);

        if (row.es_principal === 1 || !habitacionesMap[row.habitacion_id].imagen_id) {
          habitacionesMap[row.habitacion_id].imagen_id = row.imagen_id;
          habitacionesMap[row.habitacion_id].nombre_archivo = row.nombre_archivo;
          habitacionesMap[row.habitacion_id].ruta_archivo = row.ruta_archivo ? `${baseUrl}${row.ruta_archivo}` : null;
          habitacionesMap[row.habitacion_id].orden_visualizacion = row.orden_visualizacion;
        }
      }
    });

    // FILTRO ADICIONAL POR COMODIDADES (si se requiere que tenga TODAS las comodidades)
    let processedData = Object.values(habitacionesMap).map(habitacion => ({
      ...habitacion,
      comodidades: comodidadesPorHabitacion[habitacion.habitacion_id] || []
    }));

    // Si se especificaron comodidades, filtrar habitaciones que tengan TODAS las comodidades
    if (comodidades) {
      const comodidadesRequeridas = comodidades.split(',').map(c => c.trim());
      processedData = processedData.filter(habitacion => {
        const comodidadesHabitacion = habitacion.comodidades.map(c => c.nombre_comodidad);
        return comodidadesRequeridas.every(comodidadRequerida =>
          comodidadesHabitacion.includes(comodidadRequerida)
        );
      });
    }

    res.status(200).json({
      success: true,
      message: `Se encontraron ${processedData.length} habitaciones que cumplen con los filtros`,
      data: processedData,
      total: processedData.length,
      filtros_aplicados: {
        capacidad: capacidad ? parseInt(capacidad) : null,
        tipo_cama: tipo_cama || null,
        vista: vista || null,
        precio_min: precio_min ? parseFloat(precio_min) : null,
        precio_max: precio_max ? parseFloat(precio_max) : null,
        comodidades: comodidades ? comodidades.split(',').map(c => c.trim()) : null
      }
    });

  } catch (error) {
    console.error('Error al obtener habitaciones:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

// GET - Obtener información completa de una habitación específica con comodidades e imágenes
export const getHabitacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    // Validar que el ID sea un número
    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        message: 'ID de habitación inválido'
      });
    }

    const habitacionId = parseInt(id);

    // CONSULTA PRINCIPAL DE LA HABITACIÓN
    const habitacionQuery = `
      SELECT 
        h.habitacion_id,
        h.numero_habitacion,
        h.descripcion,
        h.estado,
        h.piso,
        h.calificacion_promedio,
        h.total_resenas,
        h.fecha_ultima_resena,
        vh.nombre_vista as vista,
        th.tipo_habitacion_id,
        th.nombre_tipo,
        th.capacidad_maxima,
        th.precio_base_noche,
        img.imagen_id,
        img.nombre_archivo,
        img.ruta_archivo,
        img.es_principal,
        img.orden_visualizacion
      FROM habitaciones h
      LEFT JOIN tipos_habitacion th ON h.tipo_habitacion_id = th.tipo_habitacion_id
      LEFT JOIN vistas_habitacion vh ON h.vista_id = vh.vista_id
      LEFT JOIN imagenes_habitacion img ON h.habitacion_id = img.habitacion_id
      WHERE h.habitacion_id = ?
      ORDER BY img.orden_visualizacion
    `;

    const [habitacionRows] = await pool.execute(habitacionQuery, [habitacionId]);

    if (habitacionRows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Habitación no encontrada'
      });
    }

    // CONSULTA DE FECHAS DE RESERVA
    const fechasReservaQuery = `
      SELECT 
        fecha_entrada,
        fecha_salida
      FROM reserva_habitacion
      WHERE habitacion_id = ?
      ORDER BY fecha_entrada DESC
    `;

    const [fechasReservaRows] = await pool.execute(fechasReservaQuery, [habitacionId]);

    // CONSULTA DE COMODIDADES
    const comodidadesQuery = `
      SELECT 
        hc.habitacion_id,
        ch.comodidad_id,
        ch.nombre_comodidad,
        ch.descripcion,
        ch.categoria_comodidad,
        ch.id_icon,
        ch.estado,
        hc.fecha_instalacion,
        hc.notas,
        ic.icon,
        ic.text as icon_text,
        ic.descripcion as icon_descripcion,
        ic.estado as icon_estado
      FROM habitacion_comodidad hc
      INNER JOIN comodidades_habitacion ch ON hc.comodidad_id = ch.comodidad_id
      LEFT JOIN iconos_comodidades ic ON ch.id_icon = ic.id_icon
      WHERE ch.estado = 'Activo' AND hc.habitacion_id = ?
      ORDER BY ch.categoria_comodidad, ch.nombre_comodidad
    `;

    const [comodidadesRows] = await pool.execute(comodidadesQuery, [habitacionId]);

    // CONSULTA DE CAMAS
    const tipoHabitacionId = habitacionRows[0].tipo_habitacion_id;
    const camasQuery = `
      SELECT 
        thc.tipo_habitacion_id,
        tc.tipo_cama_id,
        tc.nombre_tipo_cama,
        tc.descripcion as descripcion_cama,
        tc.capacidad_personas,
        tc.dimensiones,
        tc.estado as estado_cama,
        thc.cantidad,
        thc.es_principal
      FROM tipo_habitacion_camas thc
      INNER JOIN tipos_cama tc ON thc.tipo_cama_id = tc.tipo_cama_id
      WHERE tc.estado = 'Activo' AND thc.tipo_habitacion_id = ?
      ORDER BY thc.es_principal DESC, tc.nombre_tipo_cama
    `;

    const [camasRows] = await pool.execute(camasQuery, [tipoHabitacionId]);

    // CONSULTA DE RESEÑAS CON INFORMACIÓN DEL USUARIO
    const resenasQuery = `
      SELECT 
        r.resena_id,
        r.habitacion_id,
        r.usuario_id,
        r.calificacion,
        r.comentario,
        r.fecha_creacion,
        CASE 
          WHEN r.nombre_huesped IS NOT NULL THEN r.nombre_huesped
          WHEN u.huesped_id IS NOT NULL THEN h.nombre
          WHEN u.personal_id IS NOT NULL THEN p.nombre
          ELSE 'Huésped Anónimo'
        END AS nombre_mostrar,
        CASE 
          WHEN u.huesped_id IS NOT NULL THEN 'huesped'
          WHEN u.personal_id IS NOT NULL THEN 'personal'
          ELSE 'anonimo'
        END AS tipo_usuario
      FROM resenas_habitacion r
      LEFT JOIN usuarios u ON r.usuario_id = u.usuario_id
      LEFT JOIN huespedes h ON u.huesped_id = h.huesped_id
      LEFT JOIN personal p ON u.personal_id = p.personal_id
      WHERE r.habitacion_id = ?
      ORDER BY r.fecha_creacion DESC
    `;

    const [resenasRows] = await pool.execute(resenasQuery, [habitacionId]);

    // PROCESAR DATOS DE LA HABITACIÓN
    const primeraFila = habitacionRows[0];

    // Procesar fechas de reserva (solo fechas)
    const fechasReserva = fechasReservaRows.map(reserva => ({
      fecha_entrada: reserva.fecha_entrada,
      fecha_salida: reserva.fecha_salida
    }));

    // Procesar camas
    const camas = camasRows.map(cama => ({
      tipo_cama_id: cama.tipo_cama_id,
      nombre_tipo_cama: cama.nombre_tipo_cama,
      descripcion: cama.descripcion_cama,
      capacidad_personas: cama.capacidad_personas,
      dimensiones: cama.dimensiones,
      estado: cama.estado_cama,
      cantidad: cama.cantidad,
      es_principal: cama.es_principal,
      capacidad_total: cama.capacidad_personas * cama.cantidad
    }));

    const capacidadTotalCamas = camas.reduce((total, cama) => total + cama.capacidad_total, 0);
    const camaPrincipal = camas.find(cama => cama.es_principal === 1) || camas[0] || null;

    // Procesar comodidades
    const comodidades = comodidadesRows.map(comodidad => ({
      comodidad_id: comodidad.comodidad_id,
      nombre_comodidad: comodidad.nombre_comodidad,
      descripcion: comodidad.descripcion,
      categoria_comodidad: comodidad.categoria_comodidad,
      estado: comodidad.estado,
      fecha_instalacion: comodidad.fecha_instalacion,
      notas: comodidad.notas,
      icono: {
        id_icon: comodidad.id_icon,
        icon: comodidad.icon,
        text: comodidad.icon_text,
        descripcion: comodidad.icon_descripcion,
        estado: comodidad.icon_estado
      }
    }));

    // Procesar imágenes
    const imagenes = [];
    let imagenPrincipal = null;

    habitacionRows.forEach(row => {
      if (row.imagen_id) {
        const imagen = {
          imagen_id: row.imagen_id,
          nombre_archivo: row.nombre_archivo,
          ruta_archivo: row.ruta_archivo ? `${baseUrl}${row.ruta_archivo}` : null,
          es_principal: row.es_principal,
          orden_visualizacion: row.orden_visualizacion
        };

        imagenes.push(imagen);

        if (row.es_principal === 1 || !imagenPrincipal) {
          imagenPrincipal = imagen;
        }
      }
    });

    // Procesar reseñas
    const resenas = resenasRows.map(resena => ({
      resena_id: resena.resena_id,
      usuario_id: resena.usuario_id,
      nombre_mostrar: resena.nombre_mostrar,
      tipo_usuario: resena.tipo_usuario,
      calificacion: parseFloat(resena.calificacion),
      comentario: resena.comentario,
      fecha_creacion: resena.fecha_creacion,
      fecha_relativa: getRelativeTime(resena.fecha_creacion)
    }));

    // Estadísticas de reseñas
    const estadisticasResenas = {
      total_resenas: parseInt(primeraFila.total_resenas) || 0,
      calificacion_promedio: parseFloat(primeraFila.calificacion_promedio) || 0,
      fecha_ultima_resena: primeraFila.fecha_ultima_resena,
      distribucion_calificaciones: getDistribucionCalificaciones(resenasRows)
    };

    // CONSTRUIR RESPUESTA FINAL
    const habitacion = {
      habitacion_id: primeraFila.habitacion_id,
      numero_habitacion: primeraFila.numero_habitacion,
      estado: primeraFila.estado,
      piso: primeraFila.piso,
      vista: primeraFila.vista,
      tipo_habitacion: {
        tipo_habitacion_id: primeraFila.tipo_habitacion_id,
        nombre_tipo: primeraFila.nombre_tipo,
        descripcion: primeraFila.descripcion,
        capacidad_maxima: primeraFila.capacidad_maxima,
        precio_base_noche: primeraFila.precio_base_noche,
        camas: camas,
        cama_principal: camaPrincipal,
        capacidad_total_camas: capacidadTotalCamas,
        resumen_camas: camas.map(cama =>
          `${cama.cantidad} ${cama.nombre_tipo_cama}${cama.cantidad > 1 ? 's' : ''}`
        ).join(', ')
      },
      imagen_principal: imagenPrincipal,
      imagenes: imagenes,
      comodidades: comodidades,
      fechas_reserva: fechasReserva,
      resenas: resenas,
      estadisticas_resenas: estadisticasResenas
    };

    res.status(200).json({
      success: true,
      message: 'Habitación encontrada exitosamente',
      data: habitacion
    });

  } catch (error) {
    console.error('Error al obtener habitación por ID:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};







// GET - Obtener todas las imágenes de una habitación específica
export const getImagenesHabitacion = async (req, res) => {
  try {
    const { habitacionId } = req.params;

    const query = `
      SELECT 
        img.imagen_id,
        img.habitacion_id,
        img.nombre_archivo,
        img.ruta_archivo,
        img.es_principal,
        img.orden_visualizacion,
        img.fecha_subida,
        -- Información de la habitación
        h.numero_habitacion,
        h.estado as estado_habitacion,
        -- Información del tipo de habitación
        th.nombre_tipo,
        th.precio_base_noche,
        th.capacidad_maxima
      FROM imagenes_habitacion img
      INNER JOIN habitaciones h ON img.habitacion_id = h.habitacion_id
      LEFT JOIN tipos_habitacion th ON h.tipo_habitacion_id = th.tipo_habitacion_id
      WHERE img.habitacion_id = ?
      ORDER BY img.es_principal DESC, img.orden_visualizacion ASC
    `;

    const [rows] = await pool.execute(query, [habitacionId]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No se encontraron imágenes para la habitación ${habitacionId}`
      });
    }

    const imagenPrincipal = rows.find(img => img.es_principal === 1);
    const imagenesSecundarias = rows.filter(img => img.es_principal === 0);

    res.status(200).json({
      success: true,
      message: `Imágenes de la habitación ${habitacionId} obtenidas exitosamente`,
      habitacion: {
        habitacion_id: rows[0].habitacion_id,
        numero_habitacion: rows[0].numero_habitacion,
        estado_habitacion: rows[0].estado_habitacion,
        tipo_habitacion: {
          nombre_tipo: rows[0].nombre_tipo,
          precio_base_noche: rows[0].precio_base_noche,
          capacidad_maxima: rows[0].capacidad_maxima
        }
      },
      total_imagenes: rows.length,
      imagen_principal: imagenPrincipal || null,
      imagenes_secundarias: imagenesSecundarias,
      todas_imagenes: rows.map(row => ({
        imagen_id: row.imagen_id,
        nombre_archivo: row.nombre_archivo,
        ruta_archivo: row.ruta_archivo,
        es_principal: row.es_principal === 1,
        orden_visualizacion: row.orden_visualizacion,
        fecha_subida: row.fecha_subida
      }))
    });

  } catch (error) {
    console.error('Error al obtener imágenes de habitación:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

// GET - Obtener estadísticas de comodidades
export const getEstadisticasComodidades = async (req, res) => {
  try {
    const queries = {
      // Comodidades más populares
      comodidadesPopulares: `
        SELECT 
          ch.comodidad_id,
          ch.nombre_comodidad,
          ch.categoria_comodidad,
          ic.icon,
          COUNT(hc.habitacion_id) as total_habitaciones
        FROM comodidades_habitacion ch
        LEFT JOIN habitacion_comodidad hc ON ch.comodidad_id = hc.comodidad_id
        LEFT JOIN iconos_comodidades ic ON ch.id_icon = ic.id_icon
        GROUP BY ch.comodidad_id
        ORDER BY total_habitaciones DESC
        LIMIT 10
      `,

      // Habitaciones con más comodidades por tipo
      habitacionesConMasComodidades: `
        SELECT 
          h.habitacion_id,
          h.numero_habitacion,
          th.nombre_tipo,
          th.precio_base_noche,
          th.capacidad_maxima,
          COUNT(hc.comodidad_id) as total_comodidades,
          COUNT(img.imagen_id) as total_imagenes
        FROM habitaciones h
        LEFT JOIN tipos_habitacion th ON h.tipo_habitacion_id = th.tipo_habitacion_id
        LEFT JOIN habitacion_comodidad hc ON h.habitacion_id = hc.habitacion_id
        LEFT JOIN imagenes_habitacion img ON h.habitacion_id = img.habitacion_id
        GROUP BY h.habitacion_id
        ORDER BY total_comodidades DESC
        LIMIT 10
      `,

      // Comodidades por categoría
      comodidadesPorCategoria: `
        SELECT 
          ch.categoria_comodidad,
          COUNT(DISTINCT ch.comodidad_id) as total_comodidades_categoria,
          COUNT(hc.habitacion_id) as total_asignaciones
        FROM comodidades_habitacion ch
        LEFT JOIN habitacion_comodidad hc ON ch.comodidad_id = hc.comodidad_id
        GROUP BY ch.categoria_comodidad
        ORDER BY total_asignaciones DESC
      `,

      // Estadísticas por tipo de habitación
      estadisticasPorTipo: `
        SELECT 
          th.tipo_habitacion_id,
          th.nombre_tipo,
          th.descripcion,
          th.precio_base_noche,
          th.capacidad_maxima,
          COUNT(DISTINCT h.habitacion_id) as total_habitaciones,
          COUNT(hc.comodidad_id) as total_comodidades_asignadas,
          COUNT(img.imagen_id) as total_imagenes,
          CASE 
            WHEN COUNT(DISTINCT h.habitacion_id) > 0 
            THEN ROUND(COUNT(hc.comodidad_id) / COUNT(DISTINCT h.habitacion_id), 2)
            ELSE 0 
          END as promedio_comodidades_por_habitacion
        FROM tipos_habitacion th
        LEFT JOIN habitaciones h ON th.tipo_habitacion_id = h.tipo_habitacion_id
        LEFT JOIN habitacion_comodidad hc ON h.habitacion_id = hc.habitacion_id
        LEFT JOIN imagenes_habitacion img ON h.habitacion_id = img.habitacion_id
        GROUP BY th.tipo_habitacion_id
        ORDER BY total_comodidades_asignadas DESC
      `
    };

    const [comodidadesPopulares] = await pool.execute(queries.comodidadesPopulares);
    const [habitacionesConMasComodidades] = await pool.execute(queries.habitacionesConMasComodidades);
    const [comodidadesPorCategoria] = await pool.execute(queries.comodidadesPorCategoria);
    const [estadisticasPorTipo] = await pool.execute(queries.estadisticasPorTipo);

    res.status(200).json({
      success: true,
      message: 'Estadísticas obtenidas exitosamente',
      estadisticas: {
        comodidades_mas_populares: comodidadesPopulares,
        habitaciones_con_mas_comodidades: habitacionesConMasComodidades,
        comodidades_por_categoria: comodidadesPorCategoria,
        estadisticas_por_tipo_habitacion: estadisticasPorTipo
      }
    });

  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};


// POST - Asignar comodidad a habitación
export const asignarComodidadAHabitacion = async (req, res) => {
  try {
    const { habitacion_id, comodidad_id, fecha_instalacion, notas } = req.body;

    // Validar campos requeridos
    if (!habitacion_id || !comodidad_id) {
      return res.status(400).json({
        success: false,
        message: 'habitacion_id y comodidad_id son requeridos'
      });
    }

    // Verificar si la relación ya existe
    const checkQuery = `
      SELECT * FROM habitacion_comodidad 
      WHERE habitacion_id = ? AND comodidad_id = ?
    `;
    const [existing] = await pool.execute(checkQuery, [habitacion_id, comodidad_id]);

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Esta comodidad ya está asignada a la habitación'
      });
    }

    // Insertar nueva relación
    const insertQuery = `
      INSERT INTO habitacion_comodidad (habitacion_id, comodidad_id, fecha_instalacion, notas)
      VALUES (?, ?, ?, ?)
    `;

    const fechaInstalacion = fecha_instalacion || new Date().toISOString().split('T')[0];
    await pool.execute(insertQuery, [habitacion_id, comodidad_id, fechaInstalacion, notas || null]);

    res.status(201).json({
      success: true,
      message: 'Comodidad asignada a la habitación exitosamente',
      data: {
        habitacion_id,
        comodidad_id,
        fecha_instalacion: fechaInstalacion,
        notas: notas || null
      }
    });

  } catch (error) {
    console.error('Error al asignar comodidad:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

// DELETE - Desasignar comodidad de habitación
export const desasignarComodidadDeHabitacion = async (req, res) => {
  try {
    const { habitacionId, comodidadId } = req.params;

    // Verificar si la relación existe
    const checkQuery = `
      SELECT * FROM habitacion_comodidad 
      WHERE habitacion_id = ? AND comodidad_id = ?
    `;
    const [existing] = await pool.execute(checkQuery, [habitacionId, comodidadId]);

    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'La relación habitación-comodidad no existe'
      });
    }

    // Eliminar la relación
    const deleteQuery = `
      DELETE FROM habitacion_comodidad 
      WHERE habitacion_id = ? AND comodidad_id = ?
    `;
    await pool.execute(deleteQuery, [habitacionId, comodidadId]);

    res.status(200).json({
      success: true,
      message: 'Comodidad desasignada de la habitación exitosamente',
      data: {
        habitacion_id: parseInt(habitacionId),
        comodidad_id: parseInt(comodidadId)
      }
    });

  } catch (error) {
    console.error('Error al desasignar comodidad:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

// PUT - Actualizar relación habitación-comodidad
export const actualizarHabitacionComodidad = async (req, res) => {
  try {
    const { habitacionId, comodidadId } = req.params;
    const { fecha_instalacion, notas } = req.body;

    // Verificar si la relación existe
    const checkQuery = `
      SELECT * FROM habitacion_comodidad 
      WHERE habitacion_id = ? AND comodidad_id = ?
    `;
    const [existing] = await pool.execute(checkQuery, [habitacionId, comodidadId]);

    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'La relación habitación-comodidad no existe'
      });
    }

    // Actualizar la relación
    const updateQuery = `
      UPDATE habitacion_comodidad 
      SET fecha_instalacion = ?, notas = ?
      WHERE habitacion_id = ? AND comodidad_id = ?
    `;

    await pool.execute(updateQuery, [
      fecha_instalacion || existing[0].fecha_instalacion,
      notas !== undefined ? notas : existing[0].notas,
      habitacionId,
      comodidadId
    ]);

    res.status(200).json({
      success: true,
      message: 'Relación habitación-comodidad actualizada exitosamente',
      data: {
        habitacion_id: parseInt(habitacionId),
        comodidad_id: parseInt(comodidadId),
        fecha_instalacion: fecha_instalacion || existing[0].fecha_instalacion,
        notas: notas !== undefined ? notas : existing[0].notas
      }
    });

  } catch (error) {
    console.error('Error al actualizar relación:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};
