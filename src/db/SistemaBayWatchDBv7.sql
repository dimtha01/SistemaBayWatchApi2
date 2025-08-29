/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP TABLE IF EXISTS `asistencia`;
CREATE TABLE `asistencia` (
  `asistencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora_entrada` time DEFAULT NULL,
  `hora_salida` time DEFAULT NULL,
  `estado_asistencia` varchar(50) NOT NULL DEFAULT 'Presente',
  PRIMARY KEY (`asistencia_id`),
  UNIQUE KEY `personal_id` (`personal_id`,`fecha`),
  CONSTRAINT `asistencia_ibfk_1` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`personal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `cargos`;
CREATE TABLE `cargos` (
  `cargo_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cargo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`cargo_id`),
  UNIQUE KEY `nombre_cargo` (`nombre_cargo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `categorias_servicio`;
CREATE TABLE `categorias_servicio` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`categoria_id`),
  UNIQUE KEY `nombre_categoria` (`nombre_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `catering`;
CREATE TABLE `catering` (
  `catering_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_menu` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_por_persona` decimal(10,2) NOT NULL,
  PRIMARY KEY (`catering_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `comodidades_habitacion`;
CREATE TABLE `comodidades_habitacion` (
  `comodidad_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_comodidad` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `categoria_comodidad` varchar(50) NOT NULL,
  `id_icon` int(11) DEFAULT NULL,
  `estado` varchar(20) DEFAULT 'Activo',
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`comodidad_id`),
  UNIQUE KEY `nombre_comodidad` (`nombre_comodidad`),
  KEY `idx_categoria` (`categoria_comodidad`),
  KEY `id_icon` (`id_icon`),
  CONSTRAINT `comodidades_habitacion_ibfk_1` FOREIGN KEY (`id_icon`) REFERENCES `iconos_comodidades` (`id_icon`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `consumos_servicio`;
CREATE TABLE `consumos_servicio` (
  `consumo_id` int(11) NOT NULL AUTO_INCREMENT,
  `reserva_id` int(11) DEFAULT NULL,
  `huesped_id` int(11) DEFAULT NULL,
  `habitacion_id` int(11) DEFAULT NULL,
  `servicio_id` int(11) NOT NULL,
  `fecha_consumo` datetime DEFAULT current_timestamp(),
  `cantidad` decimal(10,2) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `total_consumo` decimal(10,2) NOT NULL,
  `estado_pago` varchar(50) NOT NULL DEFAULT 'Pendiente',
  PRIMARY KEY (`consumo_id`),
  KEY `reserva_id` (`reserva_id`),
  KEY `huesped_id` (`huesped_id`),
  KEY `habitacion_id` (`habitacion_id`),
  KEY `servicio_id` (`servicio_id`),
  CONSTRAINT `consumos_servicio_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`reserva_id`),
  CONSTRAINT `consumos_servicio_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`huesped_id`),
  CONSTRAINT `consumos_servicio_ibfk_3` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`),
  CONSTRAINT `consumos_servicio_ibfk_4` FOREIGN KEY (`servicio_id`) REFERENCES `servicios` (`servicio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `departamentos`;
CREATE TABLE `departamentos` (
  `departamento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_departamento` varchar(100) NOT NULL,
  PRIMARY KEY (`departamento_id`),
  UNIQUE KEY `nombre_departamento` (`nombre_departamento`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `detalle_reserva_habitacion`;
CREATE TABLE `detalle_reserva_habitacion` (
  `detalle_id` int(11) NOT NULL AUTO_INCREMENT,
  `reserva_id` int(11) NOT NULL,
  `habitacion_id` int(11) NOT NULL,
  `fecha_detalle` date NOT NULL,
  `tarifa_noche` decimal(10,2) NOT NULL,
  PRIMARY KEY (`detalle_id`),
  UNIQUE KEY `habitacion_id` (`habitacion_id`,`fecha_detalle`),
  KEY `reserva_id` (`reserva_id`),
  CONSTRAINT `detalle_reserva_habitacion_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`reserva_id`),
  CONSTRAINT `detalle_reserva_habitacion_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `equipamiento_evento`;
CREATE TABLE `equipamiento_evento` (
  `equipamiento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_equipamiento` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_alquiler` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`equipamiento_id`),
  UNIQUE KEY `nombre_equipamiento` (`nombre_equipamiento`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `espacios_evento`;
CREATE TABLE `espacios_evento` (
  `espacio_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_espacio` varchar(100) NOT NULL,
  `capacidad_maxima` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_hora` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`espacio_id`),
  UNIQUE KEY `nombre_espacio` (`nombre_espacio`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `evaluaciones_desempenio`;
CREATE TABLE `evaluaciones_desempenio` (
  `evaluacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_id` int(11) NOT NULL,
  `fecha_evaluacion` date NOT NULL,
  `evaluador_id` int(11) DEFAULT NULL,
  `puntuacion` int(11) DEFAULT NULL,
  `comentarios` text DEFAULT NULL,
  PRIMARY KEY (`evaluacion_id`),
  KEY `personal_id` (`personal_id`),
  KEY `evaluador_id` (`evaluador_id`),
  CONSTRAINT `evaluaciones_desempenio_ibfk_1` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`personal_id`),
  CONSTRAINT `evaluaciones_desempenio_ibfk_2` FOREIGN KEY (`evaluador_id`) REFERENCES `personal` (`personal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `evento_catering`;
CREATE TABLE `evento_catering` (
  `evento_id` int(11) NOT NULL,
  `catering_id` int(11) NOT NULL,
  `cantidad_personas` int(11) NOT NULL,
  PRIMARY KEY (`evento_id`,`catering_id`),
  KEY `catering_id` (`catering_id`),
  CONSTRAINT `evento_catering_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`),
  CONSTRAINT `evento_catering_ibfk_2` FOREIGN KEY (`catering_id`) REFERENCES `catering` (`catering_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `evento_equipamiento`;
CREATE TABLE `evento_equipamiento` (
  `evento_id` int(11) NOT NULL,
  `equipamiento_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`evento_id`,`equipamiento_id`),
  KEY `equipamiento_id` (`equipamiento_id`),
  CONSTRAINT `evento_equipamiento_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`),
  CONSTRAINT `evento_equipamiento_ibfk_2` FOREIGN KEY (`equipamiento_id`) REFERENCES `equipamiento_evento` (`equipamiento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `evento_espacio`;
CREATE TABLE `evento_espacio` (
  `evento_id` int(11) NOT NULL,
  `espacio_id` int(11) NOT NULL,
  `fecha_uso` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  PRIMARY KEY (`evento_id`,`espacio_id`,`fecha_uso`),
  KEY `espacio_id` (`espacio_id`),
  CONSTRAINT `evento_espacio_ibfk_1` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`),
  CONSTRAINT `evento_espacio_ibfk_2` FOREIGN KEY (`espacio_id`) REFERENCES `espacios_evento` (`espacio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE `eventos` (
  `evento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_evento` varchar(255) NOT NULL,
  `tipo_evento_id` int(11) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `huesped_id` int(11) DEFAULT NULL,
  `contacto_externo_nombre` varchar(255) DEFAULT NULL,
  `contacto_externo_email` varchar(255) DEFAULT NULL,
  `presupuesto_estimado` decimal(10,2) DEFAULT NULL,
  `presupuesto_final` decimal(10,2) DEFAULT NULL,
  `estado_evento` varchar(50) NOT NULL DEFAULT 'Planificado',
  PRIMARY KEY (`evento_id`),
  KEY `tipo_evento_id` (`tipo_evento_id`),
  KEY `huesped_id` (`huesped_id`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`tipo_evento_id`) REFERENCES `tipos_evento` (`tipo_evento_id`),
  CONSTRAINT `eventos_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`huesped_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `habitacion_comodidad`;
CREATE TABLE `habitacion_comodidad` (
  `habitacion_id` int(11) NOT NULL,
  `comodidad_id` int(11) NOT NULL,
  `fecha_instalacion` date DEFAULT NULL,
  `notas` text DEFAULT NULL,
  PRIMARY KEY (`habitacion_id`,`comodidad_id`),
  KEY `comodidad_id` (`comodidad_id`),
  CONSTRAINT `habitacion_comodidad_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`) ON DELETE CASCADE,
  CONSTRAINT `habitacion_comodidad_ibfk_2` FOREIGN KEY (`comodidad_id`) REFERENCES `comodidades_habitacion` (`comodidad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `habitaciones`;
CREATE TABLE `habitaciones` (
  `habitacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `numero_habitacion` varchar(10) NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'Disponible',
  `piso` int(11) DEFAULT NULL,
  `vista_id` int(11) DEFAULT NULL,
  `calificacion_promedio` decimal(3,2) DEFAULT 0.00 COMMENT 'Calificación promedio (0.00 - 5.00)',
  `total_resenas` int(11) DEFAULT 0 COMMENT 'Total de reseñas',
  `fecha_ultima_resena` datetime DEFAULT NULL,
  PRIMARY KEY (`habitacion_id`),
  UNIQUE KEY `numero_habitacion` (`numero_habitacion`),
  KEY `tipo_habitacion_id` (`tipo_habitacion_id`),
  KEY `habitaciones_ibfk_vista` (`vista_id`),
  CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitacion` (`tipo_habitacion_id`),
  CONSTRAINT `habitaciones_ibfk_vista` FOREIGN KEY (`vista_id`) REFERENCES `vistas_habitacion` (`vista_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `historial_estado_habitacion`;
CREATE TABLE `historial_estado_habitacion` (
  `historial_id` int(11) NOT NULL AUTO_INCREMENT,
  `habitacion_id` int(11) NOT NULL,
  `fecha_cambio` datetime DEFAULT current_timestamp(),
  `estado_anterior` varchar(50) DEFAULT NULL,
  `estado_nuevo` varchar(50) NOT NULL,
  `personal_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`historial_id`),
  KEY `habitacion_id` (`habitacion_id`),
  KEY `personal_id` (`personal_id`),
  CONSTRAINT `historial_estado_habitacion_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`),
  CONSTRAINT `historial_estado_habitacion_ibfk_2` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`personal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `huespedes`;
CREATE TABLE `huespedes` (
  `huesped_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nacionalidad` varchar(100) DEFAULT NULL,
  `preferencias` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`preferencias`)),
  `fecha_registro` datetime DEFAULT current_timestamp(),
  `ultima_actualizacion` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`huesped_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `iconos_comodidades`;
CREATE TABLE `iconos_comodidades` (
  `id_icon` int(11) NOT NULL AUTO_INCREMENT,
  `icon` varchar(100) NOT NULL,
  `text` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` varchar(20) DEFAULT 'Activo',
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_icon`),
  UNIQUE KEY `icon_unique` (`icon`),
  UNIQUE KEY `text_unique` (`text`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `imagenes_habitacion`;
CREATE TABLE `imagenes_habitacion` (
  `imagen_id` int(11) NOT NULL AUTO_INCREMENT,
  `habitacion_id` int(11) NOT NULL,
  `nombre_archivo` varchar(255) NOT NULL,
  `ruta_archivo` varchar(500) NOT NULL,
  `es_principal` tinyint(1) DEFAULT 0,
  `orden_visualizacion` int(11) DEFAULT 1,
  `fecha_subida` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`imagen_id`),
  KEY `habitacion_id` (`habitacion_id`),
  KEY `idx_principal` (`es_principal`),
  KEY `idx_orden` (`orden_visualizacion`),
  CONSTRAINT `imagenes_habitacion_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `inventario_servicio`;
CREATE TABLE `inventario_servicio` (
  `item_inventario_id` int(11) NOT NULL AUTO_INCREMENT,
  `servicio_id` int(11) NOT NULL,
  `nombre_item` varchar(255) NOT NULL,
  `cantidad_disponible` decimal(10,2) NOT NULL,
  `unidad_medida` varchar(50) DEFAULT NULL,
  `fecha_ultima_actualizacion` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`item_inventario_id`),
  KEY `servicio_id` (`servicio_id`),
  CONSTRAINT `inventario_servicio_ibfk_1` FOREIGN KEY (`servicio_id`) REFERENCES `servicios` (`servicio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `logs_auditoria`;
CREATE TABLE `logs_auditoria` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_hora` datetime DEFAULT current_timestamp(),
  `accion` varchar(255) NOT NULL,
  `tabla_afectada` varchar(100) DEFAULT NULL,
  `registro_id_afectado` int(11) DEFAULT NULL,
  `detalles_cambio` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`detalles_cambio`)),
  `ip_origen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `logs_auditoria_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `mantenimiento_habitacion`;
CREATE TABLE `mantenimiento_habitacion` (
  `mantenimiento_id` int(11) NOT NULL AUTO_INCREMENT,
  `habitacion_id` int(11) NOT NULL,
  `descripcion_problema` text NOT NULL,
  `fecha_reporte` datetime DEFAULT current_timestamp(),
  `fecha_resolucion` datetime DEFAULT NULL,
  `estado_mantenimiento` varchar(50) NOT NULL DEFAULT 'Pendiente',
  `personal_asignado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`mantenimiento_id`),
  KEY `habitacion_id` (`habitacion_id`),
  KEY `personal_asignado_id` (`personal_asignado_id`),
  CONSTRAINT `mantenimiento_habitacion_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`),
  CONSTRAINT `mantenimiento_habitacion_ibfk_2` FOREIGN KEY (`personal_asignado_id`) REFERENCES `personal` (`personal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `paquete_servicio`;
CREATE TABLE `paquete_servicio` (
  `paquete_id` int(11) NOT NULL,
  `servicio_id` int(11) NOT NULL,
  PRIMARY KEY (`paquete_id`,`servicio_id`),
  KEY `servicio_id` (`servicio_id`),
  CONSTRAINT `paquete_servicio_ibfk_1` FOREIGN KEY (`paquete_id`) REFERENCES `paquetes` (`paquete_id`),
  CONSTRAINT `paquete_servicio_ibfk_2` FOREIGN KEY (`servicio_id`) REFERENCES `servicios` (`servicio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `paquetes`;
CREATE TABLE `paquetes` (
  `paquete_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_paquete` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_paquete` decimal(10,2) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  PRIMARY KEY (`paquete_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `permisos`;
CREATE TABLE `permisos` (
  `permiso_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_permiso` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`permiso_id`),
  UNIQUE KEY `nombre_permiso` (`nombre_permiso`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `personal`;
CREATE TABLE `personal` (
  `personal_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `fecha_contratacion` date NOT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `departamento_id` int(11) NOT NULL,
  `cargo_id` int(11) NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `direccion` text DEFAULT NULL,
  PRIMARY KEY (`personal_id`),
  UNIQUE KEY `email` (`email`),
  KEY `departamento_id` (`departamento_id`),
  KEY `cargo_id` (`cargo_id`),
  CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`departamento_id`),
  CONSTRAINT `personal_ibfk_2` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`cargo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `promociones`;
CREATE TABLE `promociones` (
  `promocion_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_promocion` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `tipo_descuento` varchar(50) NOT NULL,
  `valor_descuento` decimal(10,2) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL,
  `codigo_promocion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`promocion_id`),
  UNIQUE KEY `codigo_promocion` (`codigo_promocion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `resenas_habitacion`;
CREATE TABLE `resenas_habitacion` (
  `resena_id` int(11) NOT NULL AUTO_INCREMENT,
  `habitacion_id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL COMMENT 'Usuario registrado (opcional)',
  `nombre_huesped` varchar(100) DEFAULT NULL COMMENT 'Nombre del huésped (opcional si no está registrado)',
  `calificacion` decimal(2,1) NOT NULL COMMENT 'Calificación de 1.0 a 5.0 (estrellas)',
  `comentario` text DEFAULT NULL COMMENT 'Comentario hasta 500 caracteres',
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  `ip_origen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`resena_id`),
  KEY `idx_habitacion_id` (`habitacion_id`),
  KEY `idx_usuario_id` (`usuario_id`),
  KEY `idx_calificacion` (`calificacion`),
  KEY `idx_fecha_creacion` (`fecha_creacion`),
  CONSTRAINT `fk_resenas_habitacion` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_resenas_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `reserva_promocion`;
CREATE TABLE `reserva_promocion` (
  `reserva_id` int(11) NOT NULL,
  `promocion_id` int(11) NOT NULL,
  PRIMARY KEY (`reserva_id`,`promocion_id`),
  KEY `promocion_id` (`promocion_id`),
  CONSTRAINT `reserva_promocion_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`reserva_id`),
  CONSTRAINT `reserva_promocion_ibfk_2` FOREIGN KEY (`promocion_id`) REFERENCES `promociones` (`promocion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE `reservas` (
  `reserva_id` int(11) NOT NULL AUTO_INCREMENT,
  `huesped_id` int(11) NOT NULL,
  `fecha_entrada` date NOT NULL,
  `fecha_salida` date NOT NULL,
  `estado_reserva` varchar(50) NOT NULL DEFAULT 'Pendiente',
  `fecha_creacion` datetime DEFAULT current_timestamp(),
  `total_precio` decimal(10,2) DEFAULT NULL,
  `notas` text DEFAULT NULL,
  PRIMARY KEY (`reserva_id`),
  KEY `huesped_id` (`huesped_id`),
  CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`huesped_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `rol_permiso`;
CREATE TABLE `rol_permiso` (
  `rol_id` int(11) NOT NULL,
  `permiso_id` int(11) NOT NULL,
  PRIMARY KEY (`rol_id`,`permiso_id`),
  KEY `permiso_id` (`permiso_id`),
  CONSTRAINT `rol_permiso_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`rol_id`),
  CONSTRAINT `rol_permiso_ibfk_2` FOREIGN KEY (`permiso_id`) REFERENCES `permisos` (`permiso_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_rol` varchar(100) NOT NULL,
  PRIMARY KEY (`rol_id`),
  UNIQUE KEY `nombre_rol` (`nombre_rol`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `servicios`;
CREATE TABLE `servicios` (
  `servicio_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_servicio` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `requiere_inventario` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`servicio_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `servicios_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias_servicio` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `tarifas`;
CREATE TABLE `tarifas` (
  `tarifa_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tarifa` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_base` decimal(10,2) NOT NULL,
  `tipo_tarifa` varchar(50) NOT NULL,
  `fecha_inicio_validez` date DEFAULT NULL,
  `fecha_fin_validez` date DEFAULT NULL,
  PRIMARY KEY (`tarifa_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `tipo_habitacion_camas`;
CREATE TABLE `tipo_habitacion_camas` (
  `tipo_habitacion_id` int(11) NOT NULL,
  `tipo_cama_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL DEFAULT 1,
  `es_principal` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`tipo_habitacion_id`,`tipo_cama_id`),
  KEY `tipo_cama_id` (`tipo_cama_id`),
  CONSTRAINT `tipo_habitacion_camas_ibfk_1` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitacion` (`tipo_habitacion_id`) ON DELETE CASCADE,
  CONSTRAINT `tipo_habitacion_camas_ibfk_2` FOREIGN KEY (`tipo_cama_id`) REFERENCES `tipos_cama` (`tipo_cama_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `tipos_cama`;
CREATE TABLE `tipos_cama` (
  `tipo_cama_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo_cama` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `capacidad_personas` int(11) NOT NULL DEFAULT 1,
  `dimensiones` varchar(50) DEFAULT NULL,
  `estado` enum('Activo','Inactivo') DEFAULT 'Activo',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`tipo_cama_id`),
  UNIQUE KEY `nombre_tipo_cama` (`nombre_tipo_cama`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `tipos_evento`;
CREATE TABLE `tipos_evento` (
  `tipo_evento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`tipo_evento_id`),
  UNIQUE KEY `nombre_tipo` (`nombre_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `tipos_habitacion`;
CREATE TABLE `tipos_habitacion` (
  `tipo_habitacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `capacidad_maxima` int(11) NOT NULL,
  `precio_base_noche` decimal(10,2) NOT NULL,
  PRIMARY KEY (`tipo_habitacion_id`),
  UNIQUE KEY `nombre_tipo` (`nombre_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE `turnos` (
  `turno_id` int(11) NOT NULL AUTO_INCREMENT,
  `personal_id` int(11) NOT NULL,
  `fecha_turno` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_fin` time NOT NULL,
  `tipo_turno` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`turno_id`),
  KEY `personal_id` (`personal_id`),
  CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`personal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `usuario_rol`;
CREATE TABLE `usuario_rol` (
  `usuario_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  PRIMARY KEY (`usuario_id`,`rol_id`),
  KEY `rol_id` (`rol_id`),
  CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `usuario_rol_ibfk_2` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password_hash` text NOT NULL,
  `personal_id` int(11) DEFAULT NULL,
  `huesped_id` int(11) DEFAULT NULL,
  `fecha_registro` datetime DEFAULT current_timestamp(),
  `ultimo_acceso` datetime DEFAULT NULL,
  `estado_cuenta` varchar(50) NOT NULL DEFAULT 'Activo',
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `personal_id` (`personal_id`),
  UNIQUE KEY `huesped_id` (`huesped_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`personal_id`) REFERENCES `personal` (`personal_id`),
  CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`huesped_id`) REFERENCES `huespedes` (`huesped_id`),
  CONSTRAINT `chk_usuario_tipo` CHECK (`personal_id` is not null and `huesped_id` is null or `personal_id` is null and `huesped_id` is not null or `personal_id` is null and `huesped_id` is null)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `vistas_habitacion`;
CREATE TABLE `vistas_habitacion` (
  `vista_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_vista` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_adicional` decimal(10,2) DEFAULT 0.00,
  `estado` enum('Activo','Inactivo') DEFAULT 'Activo',
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`vista_id`),
  UNIQUE KEY `nombre_vista` (`nombre_vista`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `asistencia` (`asistencia_id`, `personal_id`, `fecha`, `hora_entrada`, `hora_salida`, `estado_asistencia`) VALUES
(4, 2, '2023-11-01', '08:00:00', '16:00:00', 'Presente'),
(5, 2, '2025-07-28', '08:55:00', '17:05:00', 'Presente');
INSERT INTO `cargos` (`cargo_id`, `nombre_cargo`, `descripcion`) VALUES
(1, 'Recepcionista Senior', 'Encargado de la atención al cliente en la recepción y supervisión de personal junior.');
INSERT INTO `categorias_servicio` (`categoria_id`, `nombre_categoria`, `descripcion`) VALUES
(1, 'Alimentos y Bebidas Premium', 'Servicios exclusivos de comida y bebida, incluyendo opciones gourmet y catas.');
INSERT INTO `catering` (`catering_id`, `nombre_menu`, `descripcion`, `precio_por_persona`) VALUES
(1, 'Menú Premium Eventos', 'Incluye entrada gourmet, dos opciones de plato principal, postre y bebidas selectas.', '45.00');
INSERT INTO `comodidades_habitacion` (`comodidad_id`, `nombre_comodidad`, `descripcion`, `categoria_comodidad`, `id_icon`, `estado`, `fecha_creacion`) VALUES
(1, 'WiFi Gratuito', 'Conexión a internet de alta velocidad gratuita', 'Tecnología', 1, 'Activo', '2025-08-26 19:33:06'),
(2, 'TV LED 42\"', 'Televisor LED de 42 pulgadas con canales por cable', 'Tecnología', 2, 'Activo', '2025-08-26 19:33:06'),
(3, 'TV LED 55\"', 'Televisor LED de 55 pulgadas Smart TV', 'Tecnología', 2, 'Activo', '2025-08-26 19:33:06'),
(4, 'Teléfono', 'Línea telefónica directa en habitación', 'Tecnología', 3, 'Activo', '2025-08-26 19:33:06'),
(5, 'Bluetooth Audio', 'Sistema de audio con conectividad Bluetooth', 'Tecnología', 4, 'Activo', '2025-08-26 19:33:06'),
(6, 'Puertos USB', 'Múltiples puertos USB para carga de dispositivos', 'Tecnología', 5, 'Activo', '2025-08-26 19:33:06'),
(7, 'Radio Despertador', 'Radio con función de despertador', 'Tecnología', 7, 'Activo', '2025-08-26 19:33:06'),
(8, 'Cafetera Nespresso', 'Máquina de café Nespresso con cápsulas incluidas', 'Servicios', 11, 'Activo', '2025-08-26 19:33:06'),
(9, 'Minibar', 'Refrigerador con bebidas y snacks premium', 'Servicios', 15, 'Activo', '2025-08-26 19:33:06'),
(10, 'Microondas', 'Horno microondas para calentar alimentos', 'Servicios', 16, 'Activo', '2025-08-26 19:33:06'),
(11, 'Agua Purificada', 'Botellas de agua purificada de cortesía', 'Servicios', 17, 'Activo', '2025-08-26 19:33:06'),
(12, 'Servicio de Vinos', 'Selección de vinos premium disponibles', 'Servicios', 13, 'Activo', '2025-08-26 19:33:06'),
(13, 'Room Service', 'Servicio a la habitación 24 horas', 'Servicios', 33, 'Activo', '2025-08-26 19:33:06'),
(14, 'Bañera de Lujo', 'Bañera independiente de mármol', 'Lujo', 21, 'Activo', '2025-08-26 19:33:06'),
(15, 'Ducha de Lluvia', 'Ducha tipo lluvia con presión regulable', 'Baño', 22, 'Activo', '2025-08-26 19:33:06'),
(16, 'Jacuzzi Privado', 'Jacuzzi/hidromasaje en habitación', 'Lujo', 23, 'Activo', '2025-08-26 19:33:06'),
(17, 'Amenities Spa', 'Kit completo de amenities de spa', 'Baño', 24, 'Activo', '2025-08-26 19:33:06'),
(18, 'Secador de Cabello', 'Secador profesional de cabello', 'Baño', 26, 'Activo', '2025-08-26 19:33:06'),
(19, 'Aire Acondicionado', 'Sistema de climatización individual', 'Climatización', 27, 'Activo', '2025-08-26 19:33:06'),
(20, 'Control de Temperatura', 'Termostato digital individual', 'Climatización', 28, 'Activo', '2025-08-26 19:33:06'),
(21, 'Ventilador de Techo', 'Ventilador silencioso de techo', 'Climatización', 29, 'Activo', '2025-08-26 19:33:06'),
(22, 'Calefacción', 'Sistema de calefacción por suelo radiante', 'Climatización', 30, 'Activo', '2025-08-26 19:33:06'),
(23, 'Ventilación Natural', 'Sistema de ventilación cruzada', 'Climatización', 31, 'Activo', '2025-08-26 19:33:06'),
(24, 'Servicio de Conserje', 'Conserje disponible las 24 horas', 'Servicios', 34, 'Activo', '2025-08-26 19:33:06'),
(25, 'Transfer Aeropuerto', 'Servicio de traslado al aeropuerto', 'Servicios', 36, 'Activo', '2025-08-26 19:33:06'),
(26, 'Servicio de Despertador', 'Llamada de despertador personalizada', 'Servicios', 38, 'Activo', '2025-08-26 19:33:06'),
(27, 'Atención Personalizada', 'Servicio personalizado para huéspedes VIP', 'Servicios', 39, 'Activo', '2025-08-26 19:33:06'),
(28, 'Servicio de Equipaje', 'Manejo y custodia de equipaje', 'Servicios', 41, 'Activo', '2025-08-26 19:33:06'),
(29, 'Caja Fuerte Digital', 'Caja de seguridad con código digital', 'Seguridad', 42, 'Activo', '2025-08-26 19:33:06'),
(30, 'Acceso con Tarjeta', 'Sistema de acceso con tarjeta magnética', 'Seguridad', 44, 'Activo', '2025-08-26 19:33:06'),
(31, 'Videovigilancia', 'Sistema de cámaras de seguridad', 'Seguridad', 45, 'Activo', '2025-08-26 19:33:06'),
(32, 'Seguridad 24h', 'Vigilancia las 24 horas del día', 'Seguridad', 47, 'Activo', '2025-08-26 19:33:06'),
(33, 'Sistema de Sonido', 'Equipo de audio de alta calidad', 'Entretenimiento', 49, 'Activo', '2025-08-26 19:33:06'),
(34, 'Consola de Videojuegos', 'PlayStation 5 con juegos incluidos', 'Entretenimiento', 50, 'Activo', '2025-08-26 19:33:06'),
(35, 'Biblioteca', 'Acceso a biblioteca de libros', 'Entretenimiento', 51, 'Activo', '2025-08-26 19:33:06'),
(36, 'Servicio de Películas', 'Netflix y servicios de streaming', 'Entretenimiento', 53, 'Activo', '2025-08-26 19:33:06'),
(37, 'YouTube Premium', 'Acceso a YouTube Premium', 'Entretenimiento', 54, 'Activo', '2025-08-26 19:33:06'),
(38, 'Balcón Privado', 'Balcón con vista panorámica y mobiliario', 'Espacios', 32, 'Activo', '2025-08-26 19:33:06'),
(39, 'Terraza Privada', 'Terraza exclusiva con mobiliario de exterior', 'Espacios', 62, 'Activo', '2025-08-26 19:33:06'),
(40, 'Vista al Mar', 'Habitación con vista directa al océano', 'Espacios', 75, 'Activo', '2025-08-26 19:33:06'),
(41, 'Vista a la Montaña', 'Habitación con vista a las montañas', 'Espacios', 73, 'Activo', '2025-08-26 19:33:06'),
(42, 'Vista al Jardín', 'Habitación con vista a jardines paisajísticos', 'Espacios', 77, 'Activo', '2025-08-26 19:33:06'),
(43, 'Acceso al Gimnasio', 'Gimnasio completamente equipado', 'Bienestar', 57, 'Activo', '2025-08-26 19:33:06'),
(44, 'Servicio de Bicicletas', 'Bicicletas gratuitas para huéspedes', 'Bienestar', 58, 'Activo', '2025-08-26 19:33:06'),
(45, 'Yoga y Meditación', 'Clases de yoga y meditación', 'Bienestar', 61, 'Activo', '2025-08-26 19:33:06'),
(46, 'Programas de Bienestar', 'Programas personalizados de bienestar', 'Bienestar', 62, 'Activo', '2025-08-26 19:33:06'),
(47, 'Centro de Negocios', 'Acceso al centro de negocios', 'Negocios', 66, 'Activo', '2025-08-26 19:33:06'),
(48, 'Servicio de Impresión', 'Impresora y servicios de oficina', 'Negocios', 67, 'Activo', '2025-08-26 19:33:06'),
(49, 'Internet Alta Velocidad', 'Internet de fibra óptica', 'Negocios', 69, 'Activo', '2025-08-26 19:33:06'),
(50, 'Escritorio Ejecutivo', 'Escritorio amplio para trabajo', 'Negocios', 73, 'Activo', '2025-08-26 19:33:06'),
(51, 'Estacionamiento Gratuito', 'Plaza de estacionamiento incluida', 'Transporte', 74, 'Activo', '2025-08-26 19:33:06'),
(52, 'Servicio de Taxi', 'Servicio de taxi disponible', 'Transporte', 35, 'Activo', '2025-08-26 19:33:06'),
(53, 'Mapas y Guías', 'Mapas turísticos y guías de la ciudad', 'Transporte', 79, 'Activo', '2025-08-26 19:33:06'),
(54, 'Servicio de Lavandería', 'Lavandería y tintorería', 'Servicios', 80, 'Activo', '2025-08-26 19:33:06'),
(55, 'Plancha y Tabla', 'Set completo de planchado', 'Servicios', 80, 'Activo', '2025-08-26 19:33:06'),
(56, 'Tienda de Regalos', 'Acceso a tienda de souvenirs', 'Servicios', 82, 'Activo', '2025-08-26 19:33:06'),
(57, 'Múltiples Formas de Pago', 'Aceptamos todas las tarjetas', 'Servicios', 84, 'Activo', '2025-08-26 19:33:06'),
(58, 'Servicio Premium', 'Atención VIP exclusiva', 'Premium', 87, 'Activo', '2025-08-26 19:33:06'),
(59, 'Calidad 5 Estrellas', 'Certificación de calidad cinco estrellas', 'Premium', 88, 'Activo', '2025-08-26 19:33:06'),
(60, 'Servicio de Lujo', 'Experiencia de lujo completa', 'Premium', 89, 'Activo', '2025-08-26 19:33:06'),
(61, 'Servicio Exclusivo', 'Servicios exclusivos para huéspedes premium', 'Premium', 92, 'Activo', '2025-08-26 19:33:06'),
(62, 'Pet Friendly', 'Acepta mascotas con servicios especiales', 'Familia', 63, 'Activo', '2025-08-26 19:33:06'),
(63, 'Servicios para Bebés', 'Cuna, trona y amenities para bebés', 'Familia', 64, 'Activo', '2025-08-26 19:33:06'),
(64, 'Área de Juegos', 'Zona de juegos para niños', 'Familia', 65, 'Activo', '2025-08-26 19:33:06'),
(65, 'Servicio Médico', 'Médico disponible las 24 horas', 'Salud', 95, 'Activo', '2025-08-26 19:33:06'),
(66, 'Kit Primeros Auxilios', 'Botiquín completo de primeros auxilios', 'Salud', 98, 'Activo', '2025-08-26 19:33:06'),
(67, 'Salón de Eventos', 'Salón para celebraciones privadas', 'Eventos', 113, 'Activo', '2025-08-26 19:33:06'),
(68, 'Servicio de Celebraciones', 'Organización de eventos especiales', 'Eventos', 114, 'Activo', '2025-08-26 19:33:06'),
(69, 'Música en Vivo', 'Presentaciones musicales en vivo', 'Eventos', 115, 'Activo', '2025-08-26 19:33:06'),
(70, 'Instalaciones Accesibles', 'Habitaciones adaptadas para discapacitados', 'Accesibilidad', 111, 'Activo', '2025-08-26 19:33:06'),
(71, 'Asistencia Personalizada', 'Asistencia especializada disponible', 'Accesibilidad', 112, 'Activo', '2025-08-26 19:33:06');
INSERT INTO `consumos_servicio` (`consumo_id`, `reserva_id`, `huesped_id`, `habitacion_id`, `servicio_id`, `fecha_consumo`, `cantidad`, `precio_unitario`, `total_consumo`, `estado_pago`) VALUES
(17, 5, 1, 1, 1, '2025-07-29 00:44:46', '2.00', '1090.00', '30.00', 'Pendiente');
INSERT INTO `departamentos` (`departamento_id`, `nombre_departamento`) VALUES
(2, 'Limpieza'),
(1, 'Servicio de Habitaciones');
INSERT INTO `detalle_reserva_habitacion` (`detalle_id`, `reserva_id`, `habitacion_id`, `fecha_detalle`, `tarifa_noche`) VALUES
(4, 5, 4, '2025-08-02', '150.00');
INSERT INTO `equipamiento_evento` (`equipamiento_id`, `nombre_equipamiento`, `descripcion`, `precio_alquiler`) VALUES
(1, 'Proyector 4K', 'Proyector de ultra alta definición (4K) para eventos de gran escala.', '120.00');
INSERT INTO `espacios_evento` (`espacio_id`, `nombre_espacio`, `capacidad_maxima`, `descripcion`, `precio_hora`) VALUES
(1, 'Salón de Conferencias A', 250, 'Salón renovado con tecnología de punta para conferencias y seminarios.', '180.00'),
(2, 'Salón Principal', 200, 'Amplio salón ideal para bodas y conferencias grandes.', '150.00');
INSERT INTO `evaluaciones_desempenio` (`evaluacion_id`, `personal_id`, `fecha_evaluacion`, `evaluador_id`, `puntuacion`, `comentarios`) VALUES
(4, 2, '2023-06-30', 2, 90, 'Excelente desempeño en atención al cliente'),
(12, 2, '2025-07-20', 2, 90, 'Excelente desempeño en atención al cliente y proactividad.');
INSERT INTO `evento_catering` (`evento_id`, `catering_id`, `cantidad_personas`) VALUES
(6, 1, 100);
INSERT INTO `evento_equipamiento` (`evento_id`, `equipamiento_id`, `cantidad`) VALUES
(6, 1, 2);
INSERT INTO `evento_espacio` (`evento_id`, `espacio_id`, `fecha_uso`, `hora_inicio`, `hora_fin`) VALUES
(6, 1, '2025-09-15', '10:00:00', '14:00:00');
INSERT INTO `eventos` (`evento_id`, `nombre_evento`, `tipo_evento_id`, `fecha_inicio`, `fecha_fin`, `huesped_id`, `contacto_externo_nombre`, `contacto_externo_email`, `presupuesto_estimado`, `presupuesto_final`, `estado_evento`) VALUES
(6, 'Boda de Ana y Luis', 1, '2023-12-15 16:00:00', '2023-12-15 23:00:00', 2, 'Luis González', 'luis.gonzalez@email.com', '50000.00', '52000.00', 'Confirmado'),
(7, 'Conferencia Anual XYZ 2023', 2, '2023-11-20 09:00:00', '2023-11-22 18:00:00', 3, 'Roberto Fernández', 'r.fernandez@xyzcorp.com', '120000.00', NULL, 'Planificado'),
(8, '25° Aniversario Empresa ABC', 3, '2024-02-10 19:00:00', '2024-02-10 23:30:00', NULL, 'María Sánchez', 'm.sanchez@abccorp.com', '35000.00', NULL, 'Cotización'),
(9, 'Fiesta de 50 años Carlos', 4, '2023-10-28 20:00:00', '2023-10-29 02:00:00', 1, NULL, NULL, '15000.00', '14500.00', 'Completado'),
(10, 'TechCon 2023', 5, '2023-09-15 08:00:00', '2023-09-17 20:00:00', NULL, 'David Tech', 'info@techcon.com', '200000.00', '195000.00', 'Completado'),
(11, 'Conferencia Anual de Tecnología', 5, '2025-10-20 09:00:00', '2025-10-22 18:00:00', 4, 'Juan Pérez', 'juan.perez@example.com', '15000.00', NULL, 'Planificado');
INSERT INTO `habitacion_comodidad` (`habitacion_id`, `comodidad_id`, `fecha_instalacion`, `notas`) VALUES
(1, 1, '2024-01-15', 'WiFi de alta velocidad instalado'),
(1, 2, '2024-01-15', 'TV LED 42\" en sala principal'),
(1, 3, '2024-01-15', 'TV LED 55\" en dormitorio principal'),
(1, 4, '2024-01-15', 'Teléfono con línea directa'),
(1, 5, '2024-01-15', 'Sistema de audio Bluetooth premium'),
(1, 6, '2024-01-15', 'Múltiples puertos USB en toda la suite'),
(1, 8, '2024-01-15', 'Cafetera Nespresso con cápsulas premium'),
(1, 9, '2024-01-15', 'Minibar completamente surtido'),
(1, 11, '2024-01-15', 'Agua purificada renovada diariamente'),
(1, 12, '2024-01-15', 'Selección de vinos premium'),
(1, 13, '2024-01-15', 'Room service 24/7 disponible'),
(1, 14, '2024-01-15', 'Bañera de mármol italiano'),
(1, 15, '2024-01-15', 'Ducha de lluvia con cromoterapia'),
(1, 16, '2024-01-15', 'Jacuzzi privado con vista panorámica'),
(1, 17, '2024-01-15', 'Amenities de spa de lujo'),
(1, 19, '2024-01-15', 'Sistema de climatización inteligente'),
(1, 22, '2024-01-15', 'Conserje personal asignado'),
(1, 23, '2024-01-15', 'Transfer privado incluido'),
(1, 26, '2024-01-15', 'Caja fuerte de gran capacidad'),
(1, 29, '2024-01-15', 'Sistema de sonido integrado'),
(1, 33, '2024-01-15', 'Balcón con mobiliario de lujo'),
(1, 34, '2024-01-15', 'Terraza privada de 50m²'),
(1, 48, '2024-01-15', 'Servicio premium VIP'),
(1, 49, '2024-01-15', 'Certificación 5 estrellas'),
(1, 50, '2024-01-15', 'Experiencia de lujo completa'),
(2, 1, '2024-01-16', 'WiFi estándar'),
(2, 2, '2024-01-16', 'TV LED 42\"'),
(2, 4, '2024-01-16', 'Teléfono estándar'),
(2, 6, '2024-01-16', 'Puertos USB básicos'),
(2, 8, '2024-01-16', 'Cafetera estándar'),
(2, 9, '2024-01-16', 'Minibar básico'),
(2, 11, '2024-01-16', 'Agua purificada diaria'),
(2, 15, '2024-01-16', 'Ducha estándar'),
(2, 18, '2024-01-16', 'Secador de cabello'),
(2, 19, '2024-01-16', 'Aire acondicionado individual'),
(2, 26, '2024-01-16', 'Caja fuerte estándar'),
(2, 33, '2024-01-16', 'Balcón con vista parcial'),
(2, 36, '2024-01-16', 'Vista al jardín'),
(2, 44, '2024-01-16', 'Estacionamiento incluido'),
(3, 1, '2024-01-17', 'WiFi gratuito'),
(3, 2, '2024-01-17', 'TV LED 42\"'),
(3, 4, '2024-01-17', 'Teléfono'),
(3, 6, '2024-01-17', 'Puertos USB'),
(3, 8, '2024-01-17', 'Cafetera'),
(3, 9, '2024-01-17', 'Minibar'),
(3, 11, '2024-01-17', 'Agua purificada'),
(3, 15, '2024-01-17', 'Ducha'),
(3, 18, '2024-01-17', 'Secador'),
(3, 19, '2024-01-17', 'Aire acondicionado'),
(3, 26, '2024-01-17', 'Caja fuerte'),
(3, 35, '2024-01-17', 'Vista a la montaña'),
(3, 44, '2024-01-17', 'Estacionamiento'),
(4, 1, '2024-01-18', 'WiFi básico'),
(4, 2, '2024-01-18', 'TV LED 42\"'),
(4, 4, '2024-01-18', 'Teléfono'),
(4, 6, '2024-01-18', 'Puerto USB'),
(4, 11, '2024-01-18', 'Agua purificada'),
(4, 15, '2024-01-18', 'Ducha estándar'),
(4, 18, '2024-01-18', 'Secador básico'),
(4, 19, '2024-01-18', 'Aire acondicionado'),
(4, 26, '2024-01-18', 'Caja fuerte pequeña'),
(5, 1, '2024-01-19', 'WiFi familiar'),
(5, 2, '2024-01-19', 'TV principal'),
(5, 3, '2024-01-19', 'TV secundaria en dormitorio'),
(5, 4, '2024-01-19', 'Teléfono'),
(5, 6, '2024-01-19', 'Múltiples puertos USB'),
(5, 8, '2024-01-19', 'Cafetera familiar'),
(5, 9, '2024-01-19', 'Minibar amplio'),
(5, 10, '2024-01-19', 'Microondas para familia'),
(5, 11, '2024-01-19', 'Agua para toda la familia'),
(5, 15, '2024-01-19', 'Ducha amplia'),
(5, 18, '2024-01-19', 'Secador profesional'),
(5, 19, '2024-01-19', 'Climatización por zonas'),
(5, 26, '2024-01-19', 'Caja fuerte familiar'),
(5, 31, '2024-01-19', 'Consola para niños'),
(5, 52, '2024-01-19', 'Pet friendly'),
(5, 53, '2024-01-19', 'Servicios para bebés'),
(5, 54, '2024-01-19', 'Área de juegos'),
(6, 1, '2024-01-20', 'WiFi ejecutivo'),
(6, 2, '2024-01-20', 'TV LED 42\"'),
(6, 4, '2024-01-20', 'Teléfono ejecutivo'),
(6, 6, '2024-01-20', 'Puertos USB múltiples'),
(6, 8, '2024-01-20', 'Cafetera premium'),
(6, 9, '2024-01-20', 'Minibar ejecutivo'),
(6, 11, '2024-01-20', 'Agua premium'),
(6, 15, '2024-01-20', 'Ducha ejecutiva'),
(6, 19, '2024-01-20', 'Climatización premium'),
(6, 26, '2024-01-20', 'Caja fuerte ejecutiva'),
(6, 40, '2024-01-20', 'Centro de negocios'),
(6, 41, '2024-01-20', 'Servicio de impresión'),
(6, 42, '2024-01-20', 'Internet alta velocidad'),
(6, 43, '2024-01-20', 'Escritorio ejecutivo'),
(7, 1, '2024-01-21', 'WiFi básico'),
(7, 2, '2024-01-21', 'TV estándar'),
(7, 4, '2024-01-21', 'Teléfono básico'),
(7, 11, '2024-01-21', 'Agua estándar'),
(7, 15, '2024-01-21', 'Ducha básica'),
(7, 18, '2024-01-21', 'Secador básico'),
(7, 19, '2024-01-21', 'Aire acondicionado'),
(8, 1, '2024-01-22', 'WiFi premium'),
(8, 2, '2024-01-22', 'TV LED 42\"'),
(8, 4, '2024-01-22', 'Teléfono'),
(8, 6, '2024-01-22', 'Puertos USB'),
(8, 8, '2024-01-22', 'Cafetera Nespresso'),
(8, 9, '2024-01-22', 'Minibar premium'),
(8, 11, '2024-01-22', 'Agua premium'),
(8, 14, '2024-01-22', 'Bañera de lujo'),
(8, 15, '2024-01-22', 'Ducha de lluvia'),
(8, 16, '2024-01-22', 'Jacuzzi principal'),
(8, 17, '2024-01-22', 'Amenities spa'),
(8, 19, '2024-01-22', 'Climatización premium'),
(8, 26, '2024-01-22', 'Caja fuerte'),
(8, 33, '2024-01-22', 'Balcón romántico'),
(9, 1, '2024-01-23', 'WiFi con vista'),
(9, 2, '2024-01-23', 'TV LED 42\"'),
(9, 4, '2024-01-23', 'Teléfono'),
(9, 6, '2024-01-23', 'Puertos USB'),
(9, 8, '2024-01-23', 'Cafetera'),
(9, 9, '2024-01-23', 'Minibar'),
(9, 11, '2024-01-23', 'Agua purificada'),
(9, 15, '2024-01-23', 'Ducha'),
(9, 19, '2024-01-23', 'Aire acondicionado'),
(9, 26, '2024-01-23', 'Caja fuerte'),
(9, 33, '2024-01-23', 'Balcón con vista al mar'),
(9, 34, '2024-01-23', 'Vista al mar espectacular'),
(10, 1, '2024-01-24', 'WiFi accesible'),
(10, 2, '2024-01-24', 'TV con audio descriptivo'),
(10, 4, '2024-01-24', 'Teléfono adaptado'),
(10, 6, '2024-01-24', 'Puertos USB accesibles'),
(10, 11, '2024-01-24', 'Agua fácil acceso'),
(10, 15, '2024-01-24', 'Ducha adaptada'),
(10, 18, '2024-01-24', 'Secador accesible'),
(10, 19, '2024-01-24', 'Control de clima accesible'),
(10, 26, '2024-01-24', 'Caja fuerte baja altura'),
(10, 58, '2024-01-24', 'Instalaciones completamente accesibles'),
(10, 59, '2024-01-24', 'Asistencia personalizada disponible');
INSERT INTO `habitaciones` (`habitacion_id`, `numero_habitacion`, `tipo_habitacion_id`, `estado`, `piso`, `vista_id`, `calificacion_promedio`, `total_resenas`, `fecha_ultima_resena`) VALUES
(1, '101', 1, 'Disponible', 1, 1, '4.50', 3, '2025-08-27 01:51:47'),
(2, '102', 1, 'Disponible', 1, 1, '3.50', 1, '2025-08-27 01:51:47'),
(3, '103', 1, 'Mantenimiento', 1, 1, '0.00', 0, NULL),
(4, '201', 2, 'Disponible', 2, 2, '0.00', 0, NULL),
(5, '202', 2, 'Ocupada', 2, 2, '0.00', 0, NULL),
(6, '203', 2, 'Disponible', 2, 2, '0.00', 0, NULL),
(7, '301', 3, 'Disponible', 3, 2, '0.00', 0, NULL),
(8, '302', 3, 'Reservada', 3, 2, '0.00', 0, NULL),
(9, '401', 4, 'Disponible', 4, 3, '0.00', 0, NULL),
(10, '402', 4, 'Disponible', 4, 3, '0.00', 0, NULL),
(11, '501', 5, 'Disponible', 5, 3, '0.00', 0, NULL),
(12, '601', 6, 'Disponible', 6, 4, '0.00', 0, NULL),
(13, '602', 6, 'Disponible', 6, 5, '0.00', 0, NULL),
(14, '701', 7, 'Disponible', 7, 6, '0.00', 0, NULL),
(15, '801', 8, 'Reservada', 8, 6, '0.00', 0, NULL),
(16, '101A', 1, 'Disponible', 1, 6, '0.00', 0, NULL);
INSERT INTO `historial_estado_habitacion` (`historial_id`, `habitacion_id`, `fecha_cambio`, `estado_anterior`, `estado_nuevo`, `personal_id`) VALUES
(3, 1, '2025-07-29 02:07:56', 'Disponible', 'Ocupada', 2);
INSERT INTO `huespedes` (`huesped_id`, `nombre`, `apellido`, `email`, `telefono`, `direccion`, `fecha_nacimiento`, `nacionalidad`, `preferencias`, `fecha_registro`, `ultima_actualizacion`) VALUES
(1, 'Juan', 'Pérez', 'juan.perez@email.com', '555-1234567', 'Calle Principal 123', '1985-05-15', 'Mexicana', NULL, '2025-07-29 00:41:30', '2025-07-29 00:41:30'),
(2, 'María', 'González', 'maria.gonzalez@email.com', '555-7654321', 'Avenida Central 456', '1990-08-22', 'Española', NULL, '2025-07-29 00:41:30', '2025-07-29 00:41:30'),
(3, 'Carlos', 'Martínez', 'carlos.martinez@email.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(4, 'Ana', 'Rodríguez', 'ana.rodriguez@email.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(5, 'Empresa XYZ', 'Corporación', 'eventos@xyzcorp.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(6, 'Ana', 'García', 'ana.garcia@example.com', '+34600123456', 'Calle Falsa 123, Ciudad, País', '1990-05-15', 'Española', '{\"tipo_habitacion\": \"suite\", \"alergias\": [\"gluten\"]}', '2025-07-29 02:12:02', '2025-07-29 02:12:02');
INSERT INTO `iconos_comodidades` (`id_icon`, `icon`, `text`, `descripcion`, `estado`, `fecha_creacion`) VALUES
(1, 'Wifi', 'WiFi', 'Conexión inalámbrica a internet', 'Activo', '2025-08-26 19:30:08'),
(2, 'Tv', 'Televisión', 'Televisor con canales por cable', 'Activo', '2025-08-26 19:30:08'),
(3, 'Phone', 'Teléfono', 'Línea telefónica en habitación', 'Activo', '2025-08-26 19:30:08'),
(4, 'Bluetooth', 'Bluetooth', 'Conectividad Bluetooth', 'Activo', '2025-08-26 19:30:08'),
(5, 'Usb', 'Puerto USB', 'Puertos USB para carga de dispositivos', 'Activo', '2025-08-26 19:30:08'),
(6, 'Laptop', 'Laptop', 'Computadora portátil disponible', 'Activo', '2025-08-26 19:30:08'),
(7, 'Radio', 'Radio', 'Radio con múltiples estaciones', 'Activo', '2025-08-26 19:30:08'),
(8, 'Smartphone', 'Smartphone', 'Teléfono inteligente disponible', 'Activo', '2025-08-26 19:30:08'),
(9, 'Monitor', 'Monitor', 'Monitor adicional para trabajo', 'Activo', '2025-08-26 19:30:08'),
(10, 'Headphones', 'Auriculares', 'Auriculares de alta calidad', 'Activo', '2025-08-26 19:30:08'),
(11, 'Coffee', 'Cafetera', 'Máquina de café', 'Activo', '2025-08-26 19:30:08'),
(12, 'Utensils', 'Utensilios', 'Cubiertos y utensilios de cocina', 'Activo', '2025-08-26 19:30:08'),
(13, 'Wine', 'Vino', 'Selección de vinos premium', 'Activo', '2025-08-26 19:30:08'),
(14, 'ChefHat', 'Servicio Chef', 'Chef personal disponible', 'Activo', '2025-08-26 19:30:08'),
(15, 'Refrigerator', 'Refrigerador', 'Refrigerador/Minibar', 'Activo', '2025-08-26 19:30:08'),
(16, 'Microwave', 'Microondas', 'Horno microondas', 'Activo', '2025-08-26 19:30:08'),
(17, 'GlassWater', 'Agua', 'Agua purificada gratuita', 'Activo', '2025-08-26 19:30:08'),
(18, 'IceCream', 'Helado', 'Servicio de helados', 'Activo', '2025-08-26 19:30:08'),
(19, 'Cookie', 'Galletas', 'Galletas de cortesía', 'Activo', '2025-08-26 19:30:08'),
(20, 'Soup', 'Sopa', 'Servicio de sopas calientes', 'Activo', '2025-08-26 19:30:08'),
(21, 'Bath', 'Bañera', 'Bañera de lujo', 'Activo', '2025-08-26 19:30:08'),
(22, 'Droplets', 'Ducha', 'Ducha con presión regulable', 'Activo', '2025-08-26 19:30:08'),
(23, 'Waves', 'Jacuzzi', 'Jacuzzi/Hidromasaje', 'Activo', '2025-08-26 19:30:08'),
(24, 'Sparkles', 'Spa', 'Servicios de spa', 'Activo', '2025-08-26 19:30:08'),
(25, 'Scissors', 'Peluquería', 'Servicio de peluquería', 'Activo', '2025-08-26 19:30:08'),
(26, 'Zap', 'Secador', 'Secador de cabello profesional', 'Activo', '2025-08-26 19:30:08'),
(27, 'Snowflake', 'Aire Acondicionado', 'Sistema de aire acondicionado', 'Activo', '2025-08-26 19:30:08'),
(28, 'Thermometer', 'Control Temperatura', 'Control de temperatura individual', 'Activo', '2025-08-26 19:30:08'),
(29, 'Fan', 'Ventilador', 'Ventilador de techo', 'Activo', '2025-08-26 19:30:08'),
(30, 'Flame', 'Calefacción', 'Sistema de calefacción', 'Activo', '2025-08-26 19:30:08'),
(31, 'Wind', 'Ventilación', 'Sistema de ventilación', 'Activo', '2025-08-26 19:30:08'),
(32, 'Sun', 'Luz Natural', 'Abundante luz natural', 'Activo', '2025-08-26 19:30:08'),
(33, 'CloudRain', 'Protección Lluvia', 'Protección contra lluvia', 'Activo', '2025-08-26 19:30:08'),
(34, 'ConciergeBell', 'Conserje', 'Servicio de conserje 24h', 'Activo', '2025-08-26 19:30:08'),
(35, 'Car', 'Servicio Auto', 'Servicio de transporte', 'Activo', '2025-08-26 19:30:08'),
(36, 'Plane', 'Transfer Aeropuerto', 'Traslado al aeropuerto', 'Activo', '2025-08-26 19:30:08'),
(37, 'MapPin', 'Ubicación', 'Ubicación privilegiada', 'Activo', '2025-08-26 19:30:08'),
(38, 'Calendar', 'Reservas', 'Sistema de reservas', 'Activo', '2025-08-26 19:30:08'),
(39, 'Clock', 'Servicio 24h', 'Servicio las 24 horas', 'Activo', '2025-08-26 19:30:08'),
(40, 'Users', 'Servicio Huéspedes', 'Atención personalizada', 'Activo', '2025-08-26 19:30:08'),
(41, 'Bell', 'Llamada Servicio', 'Botón de llamada a servicio', 'Activo', '2025-08-26 19:30:08'),
(42, 'Luggage', 'Servicio Equipaje', 'Manejo de equipaje', 'Activo', '2025-08-26 19:30:08'),
(43, 'Lock', 'Caja Fuerte', 'Caja de seguridad digital', 'Activo', '2025-08-26 19:30:08'),
(44, 'Shield', 'Seguridad', 'Sistema de seguridad avanzado', 'Activo', '2025-08-26 19:30:08'),
(45, 'Key', 'Acceso Tarjeta', 'Acceso con tarjeta magnética', 'Activo', '2025-08-26 19:30:08'),
(46, 'Camera', 'Cámaras', 'Sistema de videovigilancia', 'Activo', '2025-08-26 19:30:08'),
(47, 'AlertTriangle', 'Alarma', 'Sistema de alarmas', 'Activo', '2025-08-26 19:30:08'),
(48, 'Eye', 'Vigilancia', 'Vigilancia 24 horas', 'Activo', '2025-08-26 19:30:08'),
(49, 'ShieldCheck', 'Seguridad Verificada', 'Seguridad certificada', 'Activo', '2025-08-26 19:30:08'),
(50, 'Music', 'Música', 'Sistema de música ambiental', 'Activo', '2025-08-26 19:30:08'),
(51, 'Gamepad2', 'Videojuegos', 'Consola de videojuegos', 'Activo', '2025-08-26 19:30:08'),
(52, 'Book', 'Biblioteca', 'Biblioteca de libros', 'Activo', '2025-08-26 19:30:08'),
(53, 'Newspaper', 'Periódicos', 'Periódicos diarios', 'Activo', '2025-08-26 19:30:08'),
(54, 'Film', 'Películas', 'Servicio de películas', 'Activo', '2025-08-26 19:30:08'),
(55, 'Youtube', 'YouTube', 'Acceso a YouTube Premium', 'Activo', '2025-08-26 19:30:08'),
(56, 'PlayCircle', 'Entretenimiento', 'Centro de entretenimiento', 'Activo', '2025-08-26 19:30:08'),
(57, 'Disc', 'Música Digital', 'Colección de música digital', 'Activo', '2025-08-26 19:30:08'),
(58, 'Dumbbell', 'Gimnasio', 'Acceso al gimnasio', 'Activo', '2025-08-26 19:30:08'),
(59, 'Bike', 'Bicicletas', 'Servicio de bicicletas', 'Activo', '2025-08-26 19:30:08'),
(60, 'TreePine', 'Naturaleza', 'Entorno natural', 'Activo', '2025-08-26 19:30:08'),
(61, 'Sunrise', 'Vista Amanecer', 'Vista al amanecer', 'Activo', '2025-08-26 19:30:08'),
(62, 'Moon', 'Vista Nocturna', 'Vista nocturna espectacular', 'Activo', '2025-08-26 19:30:08'),
(63, 'Activity', 'Actividades', 'Actividades recreativas', 'Activo', '2025-08-26 19:30:08'),
(64, 'Heart', 'Bienestar', 'Programas de bienestar', 'Activo', '2025-08-26 19:30:08'),
(65, 'Footprints', 'Senderismo', 'Rutas de senderismo', 'Activo', '2025-08-26 19:30:08'),
(66, 'Dog', 'Pet Friendly', 'Acepta mascotas', 'Activo', '2025-08-26 19:30:08'),
(67, 'Baby', 'Niños', 'Servicios para bebés', 'Activo', '2025-08-26 19:30:08'),
(68, 'Gamepad', 'Juegos Niños', 'Área de juegos infantiles', 'Activo', '2025-08-26 19:30:08'),
(69, 'Users2', 'Familiar', 'Ambiente familiar', 'Activo', '2025-08-26 19:30:08'),
(70, 'Smile', 'Diversión', 'Entretenimiento familiar', 'Activo', '2025-08-26 19:30:08'),
(71, 'Briefcase', 'Negocios', 'Centro de negocios', 'Activo', '2025-08-26 19:30:08'),
(72, 'Printer', 'Impresora', 'Servicio de impresión', 'Activo', '2025-08-26 19:30:08'),
(73, 'Mail', 'Correo', 'Servicio de correspondencia', 'Activo', '2025-08-26 19:30:08'),
(74, 'Globe', 'Internet', 'Internet de alta velocidad', 'Activo', '2025-08-26 19:30:08'),
(75, 'Presentation', 'Presentaciones', 'Sala de presentaciones', 'Activo', '2025-08-26 19:30:08'),
(76, 'FileText', 'Documentos', 'Servicio de documentos', 'Activo', '2025-08-26 19:30:08'),
(77, 'Calculator', 'Calculadora', 'Herramientas de oficina', 'Activo', '2025-08-26 19:30:08'),
(78, 'PenTool', 'Escritorio', 'Escritorio ejecutivo', 'Activo', '2025-08-26 19:30:08'),
(79, 'ParkingCircle', 'Estacionamiento', 'Estacionamiento gratuito', 'Activo', '2025-08-26 19:30:08'),
(80, 'Train', 'Tren', 'Acceso a estación de tren', 'Activo', '2025-08-26 19:30:08'),
(81, 'Navigation', 'GPS', 'Sistema de navegación', 'Activo', '2025-08-26 19:30:08'),
(82, 'Bus', 'Transporte Público', 'Acceso a transporte público', 'Activo', '2025-08-26 19:30:08'),
(83, 'Fuel', 'Gasolinera', 'Gasolinera cercana', 'Activo', '2025-08-26 19:30:08'),
(84, 'Map', 'Mapas', 'Mapas y guías turísticas', 'Activo', '2025-08-26 19:30:08'),
(85, 'Shirt', 'Lavandería', 'Servicio de lavandería', 'Activo', '2025-08-26 19:30:08'),
(86, 'ShoppingBag', 'Shopping', 'Centros comerciales cercanos', 'Activo', '2025-08-26 19:30:08'),
(87, 'Gift', 'Regalos', 'Tienda de regalos', 'Activo', '2025-08-26 19:30:08'),
(88, 'Banknote', 'Cajero', 'Cajero automático', 'Activo', '2025-08-26 19:30:08'),
(89, 'CreditCard', 'Pagos', 'Múltiples formas de pago', 'Activo', '2025-08-26 19:30:08'),
(90, 'Package', 'Paquetería', 'Servicio de paquetería', 'Activo', '2025-08-26 19:30:08'),
(91, 'Truck', 'Delivery', 'Servicio de delivery', 'Activo', '2025-08-26 19:30:08'),
(92, 'Store', 'Tienda', 'Tienda en el hotel', 'Activo', '2025-08-26 19:30:08'),
(93, 'Mountain', 'Vista Montaña', 'Vista a las montañas', 'Activo', '2025-08-26 19:30:08'),
(94, 'Trees', 'Bosque', 'Vista al bosque', 'Activo', '2025-08-26 19:30:08'),
(95, 'Building', 'Vista Ciudad', 'Vista a la ciudad', 'Activo', '2025-08-26 19:30:08'),
(96, 'Palmtree', 'Playa', 'Cerca de la playa', 'Activo', '2025-08-26 19:30:08'),
(97, 'Flower', 'Jardín', 'Jardines hermosos', 'Activo', '2025-08-26 19:30:08'),
(98, 'Leaf', 'Eco Friendly', 'Ecológicamente responsable', 'Activo', '2025-08-26 19:30:08'),
(99, 'Rainbow', 'Vista Panorámica', 'Vista panorámica', 'Activo', '2025-08-26 19:30:08'),
(100, 'Crown', 'Premium', 'Servicio premium', 'Activo', '2025-08-26 19:30:08'),
(101, 'Star', 'Calidad', 'Calidad cinco estrellas', 'Activo', '2025-08-26 19:30:08'),
(102, 'Diamond', 'Lujo', 'Servicio de lujo', 'Activo', '2025-08-26 19:30:08'),
(103, 'Award', 'Premiado', 'Hotel premiado', 'Activo', '2025-08-26 19:30:08'),
(104, 'Trophy', 'Excelencia', 'Excelencia en servicio', 'Activo', '2025-08-26 19:30:08'),
(105, 'Gem', 'Exclusivo', 'Servicio exclusivo', 'Activo', '2025-08-26 19:30:08'),
(106, 'Sparkle', 'Especial', 'Toque especial', 'Activo', '2025-08-26 19:30:08'),
(107, 'Cross', 'Médico', 'Servicio médico', 'Activo', '2025-08-26 19:30:08'),
(108, 'Pill', 'Farmacia', 'Farmacia cercana', 'Activo', '2025-08-26 19:30:08'),
(109, 'Stethoscope', 'Doctor', 'Doctor disponible', 'Activo', '2025-08-26 19:30:08'),
(110, 'Bandage', 'Primeros Auxilios', 'Kit de primeros auxilios', 'Activo', '2025-08-26 19:30:08'),
(111, 'MessageCircle', 'Chat', 'Servicio de chat', 'Activo', '2025-08-26 19:30:08'),
(112, 'Video', 'Videollamadas', 'Facilidades para videollamadas', 'Activo', '2025-08-26 19:30:08'),
(113, 'Send', 'Mensajería', 'Servicio de mensajería', 'Activo', '2025-08-26 19:30:08'),
(114, 'AtSign', 'Email', 'Servicio de email', 'Activo', '2025-08-26 19:30:08'),
(115, 'Rss', 'Noticias', 'Acceso a noticias', 'Activo', '2025-08-26 19:30:08'),
(116, 'CloudSun', 'Clima Agradable', 'Clima agradable todo el año', 'Activo', '2025-08-26 19:30:08'),
(117, 'Umbrella', 'Paraguas', 'Paraguas disponibles', 'Activo', '2025-08-26 19:30:08'),
(118, 'Accessibility', 'Accesibilidad', 'Instalaciones accesibles', 'Activo', '2025-08-26 19:30:08'),
(119, 'Volume2', 'Audio', 'Sistema de audio', 'Activo', '2025-08-26 19:30:08'),
(120, 'Hand', 'Asistencia', 'Asistencia personalizada', 'Activo', '2025-08-26 19:30:08'),
(121, 'PartyPopper', 'Eventos', 'Salón de eventos', 'Activo', '2025-08-26 19:30:08'),
(122, 'Cake', 'Celebraciones', 'Servicio para celebraciones', 'Activo', '2025-08-26 19:30:08'),
(123, 'Music2', 'Música en Vivo', 'Música en vivo', 'Activo', '2025-08-26 19:30:08'),
(124, 'Mic', 'Karaoke', 'Karaoke disponible', 'Activo', '2025-08-26 19:30:08');
INSERT INTO `imagenes_habitacion` (`imagen_id`, `habitacion_id`, `nombre_archivo`, `ruta_archivo`, `es_principal`, `orden_visualizacion`, `fecha_subida`) VALUES
(129, 1, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(130, 1, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(131, 1, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(132, 1, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(133, 2, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(134, 2, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(135, 2, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(136, 2, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(137, 3, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(138, 3, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(139, 3, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(140, 3, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(141, 4, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(142, 4, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(143, 4, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(144, 4, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(145, 5, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(146, 5, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(147, 5, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(148, 5, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(149, 6, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(150, 6, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(151, 6, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(152, 6, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(153, 7, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(154, 7, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(155, 7, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(156, 7, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(157, 8, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(158, 8, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(159, 8, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(160, 8, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(161, 9, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(162, 9, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(163, 9, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(164, 9, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(165, 10, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(166, 10, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(167, 10, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(168, 10, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(169, 11, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(170, 11, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(171, 11, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(172, 11, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(173, 12, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(174, 12, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(175, 12, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(176, 12, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(177, 13, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(178, 13, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(179, 13, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(180, 13, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(181, 14, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(182, 14, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(183, 14, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(184, 14, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(185, 15, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(186, 15, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(187, 15, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(188, 15, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51'),
(189, 16, 'habitacion_ejecutiva-1756269335204.webp', '/uploads/images/habitaciones/habitacion_ejecutiva-1756269335204.webp', 0, 2, '2025-08-27 00:45:51'),
(190, 16, 'habitacion_estandart-1756269335214.webp', '/uploads/images/habitaciones/habitacion_estandart-1756269335214.webp', 0, 3, '2025-08-27 00:45:51'),
(191, 16, 'habitaones_hero_2-1756269335220.webp', '/uploads/images/habitaciones/habitaones_hero_2-1756269335220.webp', 0, 4, '2025-08-27 00:45:51'),
(192, 16, 'habitaones_hero_3-1756269335225.webp', '/uploads/images/habitaciones/habitaones_hero_3-1756269335225.webp', 0, 5, '2025-08-27 00:45:51');
INSERT INTO `inventario_servicio` (`item_inventario_id`, `servicio_id`, `nombre_item`, `cantidad_disponible`, `unidad_medida`, `fecha_ultima_actualizacion`) VALUES
(1, 1, 'Toallas de baño grandes', '150.00', 'unidades', '2025-07-29 02:21:56'),
(2, 1, 'Toallas de baño grandes', '150.00', 'unidades', '2025-07-29 02:21:58'),
(3, 1, 'Toallas de baño grandes', '150.00', 'unidades', '2025-07-29 02:21:59'),
(4, 1, 'Toallas de baño grandes', '150.00', 'unidades', '2025-07-29 02:22:00'),
(5, 1, 'Toallas de baño grandes', '150.00', 'unidades', '2025-07-29 02:22:00');

INSERT INTO `mantenimiento_habitacion` (`mantenimiento_id`, `habitacion_id`, `descripcion_problema`, `fecha_reporte`, `fecha_resolucion`, `estado_mantenimiento`, `personal_asignado_id`) VALUES
(1, 2, 'Fuga de agua en el baño principal.', '2025-07-29 02:34:55', NULL, 'Pendiente', NULL),
(3, 2, 'Fuga de agua en el baño principal. Reparación en curso.', '2025-07-29 02:35:12', NULL, 'En Proceso', 2);
INSERT INTO `paquete_servicio` (`paquete_id`, `servicio_id`) VALUES
(1, 1);
INSERT INTO `paquetes` (`paquete_id`, `nombre_paquete`, `descripcion`, `precio_paquete`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 'Escapada Romántica', 'Incluye 1 noche en suite, cena gourmet para dos, botella de vino y desayuno en cama', '4500.00', '2023-11-01', '2024-03-31'),
(2, 'Vacaciones Familiares', '2 noches en habitación familiar, acceso a zona de juegos infantiles, desayuno buffet para toda la familia', '6800.00', '2023-11-15', '2024-01-15'),
(3, 'Ejecutivo Productivo', 'Habitación ejecutiva por 3 noches, acceso a salas de reunión, desayuno ejecutivo y late check-out', '9200.00', '2023-11-01', NULL),
(4, 'Spa & Bienestar', '2 noches en habitación premium, 2 masajes de 60 minutos, acceso ilimitado al spa y cena saludable', '7500.00', '2023-12-01', '2024-02-28'),
(5, 'Paquete Aventurero', '3 noches en habitación estándar, tour de senderismo guiado, equipo de excursionismo y box lunch', '6200.00', '2024-01-10', '2024-04-30'),
(6, 'Celebración Especial', 'Noche en suite presidencial, decoración especial, botella de champagne y cena privada', '12500.00', NULL, NULL),
(7, 'Oferta de Temporada', '2 noches en habitación doble con 30% de descuento, desayuno incluido', '3900.00', '2024-05-01', '2024-06-15'),
(8, 'Paquete Luna de Miel', 'Incluye cena romántica, desayuno en la habitación y masaje para parejas.', '500.00', '2025-08-01', '2025-12-31');
INSERT INTO `permisos` (`permiso_id`, `nombre_permiso`, `descripcion`) VALUES
(1, 'gestionar_usuarios', 'Crear, modificar y eliminar usuarios del sistema'),
(2, 'gestionar_reservas', 'Crear, modificar y cancelar reservas'),
(3, 'gestionar_habitaciones', 'Administrar estado y configuración de habitaciones'),
(4, 'gestionar_facturacion', 'Crear y modificar facturas y pagos'),
(5, 'gestionar_inventario', 'Administrar inventario de servicios y suministros'),
(6, 'gestionar_personal', 'Administrar información del personal y horarios'),
(7, 'gestionar_eventos', 'Planificar y administrar eventos del hotel'),
(8, 'ver_reportes_financieros', 'Acceder a reportes financieros y estadísticas'),
(9, 'gestionar_mantenimiento', 'Reportar y gestionar tareas de mantenimiento'),
(10, 'check_in_out', 'Realizar check-in y check-out de huéspedes'),
(11, 'gestionar_servicios', 'Administrar servicios adicionales del hotel'),
(12, 'ver_historial_huesped', 'Consultar historial de huéspedes'),
(13, 'gestionar_promociones', 'Crear y modificar promociones y descuentos'),
(14, 'acceso_seguridad', 'Monitorear sistemas de seguridad del hotel'),
(15, 'ver_perfil_propio', 'Ver y editar su propio perfil'),
(16, 'solicitar_servicios', 'Solicitar servicios de habitación y hotel');
INSERT INTO `personal` (`personal_id`, `nombre`, `apellido`, `email`, `telefono`, `fecha_contratacion`, `salario`, `departamento_id`, `cargo_id`, `fecha_nacimiento`, `direccion`) VALUES
(2, 'Juan', 'Pérez', 'juan.perez@hotel.com', '555-1234', '2023-01-15', '25000.00', 1, 1, NULL, NULL),
(4, 'Juan', 'Perez', 'juan.perez@hotels.com', '123-456-7890', '2023-01-15', '35000.00', 1, 1, '1990-05-20', 'Calle Falsa 123, Ciudad');
INSERT INTO `promociones` (`promocion_id`, `nombre_promocion`, `descripcion`, `tipo_descuento`, `valor_descuento`, `fecha_inicio`, `fecha_fin`, `codigo_promocion`) VALUES
(1, 'Descuento Verano 2025', '15% de descuento en todas las reservas para el verano.', 'Porcentaje', '15.00', '2025-06-01', '2025-08-31', 'VERANO25');
INSERT INTO `resenas_habitacion` (`resena_id`, `habitacion_id`, `usuario_id`, `nombre_huesped`, `calificacion`, `comentario`, `fecha_creacion`, `ip_origen`) VALUES
(5, 1, 2, NULL, '4.5', 'Excelente habitación, muy limpia y cómoda. El servicio fue impecable.', '2025-08-27 01:51:47', NULL),
(6, 1, NULL, 'María González', '5.0', 'Perfecta para mis vacaciones, definitivamente regresaría.', '2025-08-27 01:51:47', NULL),
(7, 1, 2, 'Carlos VIP', '4.0', 'Buena habitación, aunque podría mejorar el aire acondicionado.', '2025-08-27 01:51:47', NULL),
(8, 2, NULL, NULL, '3.5', 'La habitación está bien pero el baño necesita renovación.', '2025-08-27 01:51:47', NULL);
INSERT INTO `reserva_promocion` (`reserva_id`, `promocion_id`) VALUES
(5, 1);
INSERT INTO `reservas` (`reserva_id`, `huesped_id`, `fecha_entrada`, `fecha_salida`, `estado_reserva`, `fecha_creacion`, `total_precio`, `notas`) VALUES
(5, 1, '2023-11-15', '2023-11-20', 'Confirmada', '2025-07-29 00:41:34', '7500.00', 'Habitación con vista al mar, cama king size'),
(6, 2, '2023-12-01', '2023-12-10', 'Pendiente', '2025-07-29 00:41:34', '12000.00', 'Solicitó habitación en piso alto, sin ruido'),
(7, 1, '2024-01-05', '2024-01-15', 'Confirmada', '2025-07-29 00:41:34', '15000.00', 'Aniversario de bodas, flores y vino incluidos'),
(8, 2, '2023-11-25', '2023-11-27', 'Cancelada', '2025-07-29 00:41:34', '3000.00', 'Cancelación por motivos personales'),
(9, 1, '2025-09-10', '2025-09-15', 'Confirmada', '2025-07-29 03:12:20', '750.00', 'Preferencia: habitación con vista al mar.');
INSERT INTO `rol_permiso` (`rol_id`, `permiso_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(2, 2),
(2, 3),
(2, 4),
(2, 6),
(2, 7),
(2, 8),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 15),
(3, 2),
(3, 3),
(3, 10),
(3, 11),
(3, 12),
(3, 15),
(3, 16),
(4, 3),
(4, 5),
(4, 9),
(4, 15),
(5, 11),
(5, 12),
(5, 15),
(5, 16),
(6, 4),
(6, 8),
(6, 15),
(7, 3),
(7, 9),
(7, 15),
(8, 14),
(8, 15),
(9, 15),
(9, 16),
(10, 15),
(10, 16);
INSERT INTO `roles` (`rol_id`, `nombre_rol`) VALUES
(1, 'Administrador'),
(5, 'Conserje'),
(6, 'Contador'),
(2, 'Gerente General'),
(4, 'Housekeeping'),
(10, 'Huesped Regular'),
(9, 'Huesped VIP'),
(7, 'Mantenimiento'),
(3, 'Recepcionista'),
(8, 'Seguridad');
INSERT INTO `servicios` (`servicio_id`, `nombre_servicio`, `descripcion`, `precio`, `categoria_id`, `requiere_inventario`) VALUES
(1, 'Prueba Servicio', 'Prueba ', '10.00', 1, 100);
INSERT INTO `tarifas` (`tarifa_id`, `nombre_tarifa`, `descripcion`, `precio_base`, `tipo_tarifa`, `fecha_inicio_validez`, `fecha_fin_validez`) VALUES
(1, 'Tarifa Estándar', 'Tarifa base para habitaciones individuales', '100.00', 'Noche', '2024-01-01', '2024-12-31');
INSERT INTO `tipo_habitacion_camas` (`tipo_habitacion_id`, `tipo_cama_id`, `cantidad`, `es_principal`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),
(4, 1, 2, 0),
(4, 2, 1, 1),
(5, 4, 1, 1),
(5, 6, 1, 0),
(6, 3, 1, 1),
(6, 6, 1, 0),
(7, 2, 1, 1),
(8, 4, 1, 1),
(10, 4, 2, 1),
(10, 6, 2, 0),
(10, 7, 1, 0);
INSERT INTO `tipos_cama` (`tipo_cama_id`, `nombre_tipo_cama`, `descripcion`, `capacidad_personas`, `dimensiones`, `estado`, `created_at`, `updated_at`) VALUES
(1, 'Cama Individual', 'Cama para una persona', 1, '90x200 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(2, 'Cama Doble', 'Cama matrimonial para dos personas', 2, '150x200 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(3, 'Cama Queen', 'Cama Queen size', 2, '160x200 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(4, 'Cama King', 'Cama King size', 2, '180x200 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(5, 'Cama Litera', 'Cama de dos niveles', 2, '90x200 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(6, 'Sofá Cama', 'Sofá convertible en cama', 1, '140x190 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01'),
(7, 'Cama Supletoria', 'Cama adicional plegable', 1, '80x190 cm', 'Activo', '2025-08-27 01:13:01', '2025-08-27 01:13:01');
INSERT INTO `tipos_evento` (`tipo_evento_id`, `nombre_tipo`, `descripcion`) VALUES
(1, 'Boda', 'Celebración de matrimonio y recepción'),
(2, 'Seminario', 'Eventos educativos de menor escala y más interactivos'),
(3, 'Banquete', 'Cena formal para ocasiones especiales'),
(4, 'Reunión Social', 'Eventos informales como fiestas o reuniones'),
(5, 'Convención', 'Evento de varios días con múltiples actividades');
INSERT INTO `tipos_habitacion` (`tipo_habitacion_id`, `nombre_tipo`, `descripcion`, `capacidad_maxima`, `precio_base_noche`) VALUES
(1, 'Individual Estándar', 'Habitación cómoda con cama individual, ideal para viajeros solos', 1, '1200.00'),
(2, 'Doble Estándar', 'Habitación con dos camas individuales o una cama matrimonial', 2, '1800.00'),
(3, 'Suite Ejecutiva', 'Amplia suite con área de trabajo y sala de estar pequeña', 2, '3500.00'),
(4, 'Familiar', 'Espaciosa habitación con dos camas matrimoniales, ideal para familias', 4, '2800.00'),
(5, 'Suite Presidencial', 'Lujosa suite con living room, comedor y amenities premium', 2, '8000.00'),
(6, 'Junior Suite', 'Suite pequeña con área de estar integrada', 2, '4200.00'),
(7, 'Habitación Accesible', 'Habitación adaptada para personas con movilidad reducida', 2, '1600.00'),
(8, 'Suite Nupcial', 'Suite especial para luna de miel con jacuzzi privado', 2, '6500.00'),
(10, 'Suite Presidencial Deluxe', 'Habitación de lujo mejorada con vistas panorámicas y jacuzzi.', 5, '650.00');
INSERT INTO `turnos` (`turno_id`, `personal_id`, `fecha_turno`, `hora_inicio`, `hora_fin`, `tipo_turno`) VALUES
(3, 2, '2025-07-30', '08:00:00', '16:00:00', 'Mañana');
INSERT INTO `usuario_rol` (`usuario_id`, `rol_id`) VALUES
(3, 10),
(5, 10);
INSERT INTO `usuarios` (`usuario_id`, `email`, `password_hash`, `personal_id`, `huesped_id`, `fecha_registro`, `ultimo_acceso`, `estado_cuenta`) VALUES
(2, 'nuevo.usuario.actualizado@example.com', 'newhashedpassword456', NULL, 1, '2025-07-29 04:02:44', NULL, 'Inactivo'),
(3, 'richarsonmartinez@gmail.com', '$2b$10$ry5bD7Yx0l.gkTAXfoWKBOo1JTiuxrOzkotn7vUAvp/KrhtFyzzmm', NULL, NULL, '2025-08-26 03:09:41', NULL, 'Activo'),
(5, 'Richarsonmartinez400@gmail.com', '$2b$10$Lmnk5foJBpsYJSdH10orI.F1l6JG.kzjKyglYqduQQbXwL8c2dP0C', NULL, NULL, '2025-08-26 04:36:11', NULL, 'Activo');
INSERT INTO `vistas_habitacion` (`vista_id`, `nombre_vista`, `descripcion`, `precio_adicional`, `estado`, `fecha_creacion`, `fecha_actualizacion`) VALUES
(1, 'Vista al Mar', 'Habitación con vista panorámica al océano', '50.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15'),
(2, 'Vista a la Montaña', 'Habitación con vista a las montañas', '30.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15'),
(3, 'Vista a la Ciudad', 'Habitación con vista al centro de la ciudad', '25.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15'),
(4, 'Vista al Jardín', 'Habitación con vista a los jardines del hotel', '15.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15'),
(5, 'Vista Interior', 'Habitación con vista al patio interior', '0.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15'),
(6, 'Vista a la Piscina', 'Habitación con vista a la zona de piscinas', '20.00', 'Activo', '2025-08-27 00:56:15', '2025-08-27 00:56:15');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;