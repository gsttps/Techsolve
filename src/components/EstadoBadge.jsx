import { infoEstado } from '../data/estadosSolicitud.js';

// Pequeño badge de color para mostrar el estado de una solicitud
// de forma consistente en tarjetas, listas y formularios.
function EstadoBadge({ estado }) {
  const { etiqueta, color } = infoEstado(estado);
  return <span className={`badge rounded-pill ts-badge-${color}`}>{etiqueta}</span>;
}

export default EstadoBadge;
