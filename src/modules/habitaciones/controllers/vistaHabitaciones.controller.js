import pool from "../../../config/db.js";

export const getVistasHabitacion = async (req, res) => {
  try {
    const query = `SELECT * FROM vistas_habitacion;`;

    const [results] = await pool.execute(query);

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron vistas de habitación'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Vistas de habitación encontradas exitosamente',
      data: results
    });

  } catch (error) {
    console.error('Error al obtener vistas de habitación:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};
