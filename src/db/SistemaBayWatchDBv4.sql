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

DROP TABLE IF EXISTS `caracteristicas_habitacion`;
CREATE TABLE `caracteristicas_habitacion` (
  `caracteristica_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_caracteristica` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`caracteristica_id`),
  UNIQUE KEY `nombre_caracteristica` (`nombre_caracteristica`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

DROP TABLE IF EXISTS `habitacion_caracteristica`;
CREATE TABLE `habitacion_caracteristica` (
  `habitacion_id` int(11) NOT NULL,
  `caracteristica_id` int(11) NOT NULL,
  PRIMARY KEY (`habitacion_id`,`caracteristica_id`),
  KEY `caracteristica_id` (`caracteristica_id`),
  CONSTRAINT `habitacion_caracteristica_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`habitacion_id`),
  CONSTRAINT `habitacion_caracteristica_ibfk_2` FOREIGN KEY (`caracteristica_id`) REFERENCES `caracteristicas_habitacion` (`caracteristica_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `habitaciones`;
CREATE TABLE `habitaciones` (
  `habitacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `numero_habitacion` varchar(10) NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL DEFAULT 'Disponible',
  `piso` int(11) DEFAULT NULL,
  `vista` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`habitacion_id`),
  UNIQUE KEY `numero_habitacion` (`numero_habitacion`),
  KEY `tipo_habitacion_id` (`tipo_habitacion_id`),
  CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitacion` (`tipo_habitacion_id`)
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

INSERT INTO `asistencia` (`asistencia_id`, `personal_id`, `fecha`, `hora_entrada`, `hora_salida`, `estado_asistencia`) VALUES
(4, 2, '2023-11-01', '08:00:00', '16:00:00', 'Presente'),
(5, 2, '2025-07-28', '08:55:00', '17:05:00', 'Presente');
INSERT INTO `caracteristicas_habitacion` (`caracteristica_id`, `nombre_caracteristica`, `descripcion`) VALUES
(1, 'Balcón con vista panorámica', 'Habitación con balcón privado y una vista impresionante de 180 grados al mar.');
INSERT INTO `cargos` (`cargo_id`, `nombre_cargo`, `descripcion`) VALUES
(1, 'Recepcionista Senior', 'Encargado de la atención al cliente en la recepción y supervisión de personal junior.');
INSERT INTO `categorias_servicio` (`categoria_id`, `nombre_categoria`, `descripcion`) VALUES
(1, 'Alimentos y Bebidas Premium', 'Servicios exclusivos de comida y bebida, incluyendo opciones gourmet y catas.');
INSERT INTO `catering` (`catering_id`, `nombre_menu`, `descripcion`, `precio_por_persona`) VALUES
(1, 'Menú Premium Eventos', 'Incluye entrada gourmet, dos opciones de plato principal, postre y bebidas selectas.', '45.00');
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
INSERT INTO `habitacion_caracteristica` (`habitacion_id`, `caracteristica_id`) VALUES
(1, 1);
INSERT INTO `habitaciones` (`habitacion_id`, `numero_habitacion`, `tipo_habitacion_id`, `estado`, `piso`, `vista`) VALUES
(1, '101', 1, 'Disponible', 1, 'Vista al jardín'),
(2, '102', 1, 'Disponible', 1, 'Vista al jardín'),
(3, '103', 1, 'Mantenimiento', 1, 'Vista al estacionamiento'),
(4, '201', 2, 'Disponible', 2, 'Vista a la piscina'),
(5, '202', 2, 'Ocupada', 2, 'Vista a la piscina'),
(6, '203', 2, 'Disponible', 2, 'Vista a la ciudad'),
(7, '301', 3, 'Disponible', 3, 'Vista al mar'),
(8, '302', 3, 'Reservada', 3, 'Vista al mar'),
(9, '401', 4, 'Disponible', 4, 'Vista panorámica'),
(10, '402', 4, 'Disponible', 4, 'Vista panorámica'),
(11, '501', 5, 'Disponible', 5, 'Vista 360°'),
(12, '601', 6, 'Disponible', 6, 'Vista al mar'),
(13, '602', 6, 'Disponible', 6, 'Vista al mar'),
(14, '701', 7, 'Disponible', 7, 'Vista al jardín'),
(15, '801', 8, 'Reservada', 8, 'Vista panorámica'),
(16, '101A', 1, 'Disponible', 1, 'Vista al mar');
INSERT INTO `historial_estado_habitacion` (`historial_id`, `habitacion_id`, `fecha_cambio`, `estado_anterior`, `estado_nuevo`, `personal_id`) VALUES
(3, 1, '2025-07-29 02:07:56', 'Disponible', 'Ocupada', 2);
INSERT INTO `huespedes` (`huesped_id`, `nombre`, `apellido`, `email`, `telefono`, `direccion`, `fecha_nacimiento`, `nacionalidad`, `preferencias`, `fecha_registro`, `ultima_actualizacion`) VALUES
(1, 'Juan', 'Pérez', 'juan.perez@email.com', '555-1234567', 'Calle Principal 123', '1985-05-15', 'Mexicana', NULL, '2025-07-29 00:41:30', '2025-07-29 00:41:30'),
(2, 'María', 'González', 'maria.gonzalez@email.com', '555-7654321', 'Avenida Central 456', '1990-08-22', 'Española', NULL, '2025-07-29 00:41:30', '2025-07-29 00:41:30'),
(3, 'Carlos', 'Martínez', 'carlos.martinez@email.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(4, 'Ana', 'Rodríguez', 'ana.rodriguez@email.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(5, 'Empresa XYZ', 'Corporación', 'eventos@xyzcorp.com', NULL, NULL, NULL, NULL, NULL, '2025-07-29 01:24:39', '2025-07-29 01:24:39'),
(6, 'Ana', 'García', 'ana.garcia@example.com', '+34600123456', 'Calle Falsa 123, Ciudad, País', '1990-05-15', 'Española', '{\"tipo_habitacion\": \"suite\", \"alergias\": [\"gluten\"]}', '2025-07-29 02:12:02', '2025-07-29 02:12:02');
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


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;