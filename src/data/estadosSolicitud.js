// Estados posibles de una solicitud de cotización, según el modelo de datos
// entregado por el docente (campo "estado" del documento "Solicitud").
// Centralizado aquí para que el formulario, las tarjetas y los badges
// usen siempre la misma fuente de verdad (evita strings mágicos repetidos).
export const ESTADOS_SOLICITUD = [
  { valor: 'en_evaluacion', etiqueta: 'En evaluación', color: 'warning' },
  { valor: 'aprobada', etiqueta: 'Aprobada', color: 'success' },
  { valor: 'en_desarrollo', etiqueta: 'En desarrollo', color: 'info' },
  { valor: 'finalizada', etiqueta: 'Finalizada', color: 'success' },
  { valor: 'rechazada', etiqueta: 'Rechazada', color: 'danger' },
];

export function infoEstado(valor) {
  return (
    ESTADOS_SOLICITUD.find((e) => e.valor === valor) ?? {
      valor,
      etiqueta: valor || 'Sin estado',
      color: 'secondary',
    }
  );
}
