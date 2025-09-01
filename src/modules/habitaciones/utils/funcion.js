export const getRelativeTime = (fecha) => {
  const now = new Date();
  const fechaResena = new Date(fecha);
  const diffTime = Math.abs(now - fechaResena);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return 'Hace 1 día';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semana${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
  if (diffDays < 365) return `Hace ${Math.floor(diffDays / 30)} mes${Math.floor(diffDays / 30) > 1 ? 'es' : ''}`;
  return `Hace ${Math.floor(diffDays / 365)} año${Math.floor(diffDays / 365) > 1 ? 's' : ''}`;
}

export const getDistribucionCalificaciones = (resenasRows) => {
  const distribucion = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  resenasRows.forEach(resena => {
    const calificacion = Math.floor(parseFloat(resena.calificacion));
    if (distribucion.hasOwnProperty(calificacion)) {
      distribucion[calificacion]++;
    }
  });

  return distribucion;
}