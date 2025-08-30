import pool from "../../../config/db.js";

export const getTiposCama = async (req, res) => {
  try {
    const query = `SELECT * FROM tipos_cama;`;

    const [results] = await pool.execute(query);

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron tipos de cama'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tipos de cama encontrados exitosamente',
      data: results
    });

  } catch (error) {
    console.error('Error al obtener tipos de cama:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};
