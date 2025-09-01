import pool from "../../../config/db.js";

export const getReservasPorHabitacion = async (req, res) => {
  try {
    // Obtener el ID de la habitación de los parámetros de la solicitud
    const { habitacion_id } = req.params;

    // Validar que el ID de la habitación sea un número válido
    if (!habitacion_id || isNaN(habitacion_id)) {
      return res.status(400).json({
        success: false,
        message: 'El ID de la habitación es inválido.'
      });
    }

    // Consulta SQL para obtener solo los campos específicos de las reservas
    const reservasQuery = `
      SELECT fecha_entrada, fecha_salida, estado_reserva 
      FROM reserva_habitacion 
      WHERE habitacion_id = ?
    `;

    // Ejecutar la consulta
    const [reservasRows] = await pool.execute(reservasQuery, [habitacion_id]);

    // Si no se encontraron reservas, retornar un mensaje apropiado
    if (reservasRows.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No se encontraron reservas para la habitación especificada.',
        data: [],
      });
    }

    // Retornar las reservas encontradas con los campos específicos
    res.status(200).json({
      success: true,
      message: `Se encontraron ${reservasRows.length} reservas para la habitación ${habitacion_id}.`,
      data: reservasRows,
    });

  } catch (error) {
    console.error('Error al obtener reservas:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};

