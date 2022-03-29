export const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

// formatiar fecha
export const formatearFecha = (fecha) => {
  const fechaNuevo = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNuevo.toLocaleDateString("es-ES", opciones);
};