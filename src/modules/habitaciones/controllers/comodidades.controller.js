import pool from "../../../config/db.js";

export const getComodidades = async (req, res) => {
  try {
    const query = `
      SELECT 
        c.comodidad_id,
        c.nombre_comodidad,
        c.descripcion,
        c.categoria_comodidad,
        i.icon,
        i.text,
        h.habitacion_id,
        h.numero_habitacion
      FROM 
        comodidades_habitacion c
        INNER JOIN habitacion_comodidad hc ON c.comodidad_id = hc.comodidad_id
        INNER JOIN habitaciones h ON hc.habitacion_id = h.habitacion_id
        INNER JOIN iconos_comodidades i ON c.id_icon = i.id_icon;
    `;

    const [results] = await pool.execute(query);

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No se encontraron comodidades'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Comodidades encontradas exitosamente',
      data: results
    });

  } catch (error) {
    console.error('Error al obtener comodidades:', error);
    res.status(500).json({
      success: false,
      message: 'Error interno del servidor',
      error: error.message
    });
  }
};