import Icon from './Icon.jsx';

// Estados visuales que comparten todas las páginas del panel de Solicitudes:
// carga, error de API, listado vacío y errores puntuales de una acción.

// Spinner mientras se espera la respuesta de la API.
export function Cargando({ texto = 'Cargando datos desde la API...' }) {
  return (
    <div className="ts-estado-carga">
      <div className="ts-spinner" role="status" aria-label="Cargando" />
      <p className="texto-muted mb-0 mt-3">{texto}</p>
    </div>
  );
}

// Error al conectar con la API (por ejemplo, si BASE_URL en solicitudesApi.js
// no coincide con el endpoint real), con opción de reintentar.
export function ErrorApi({ mensaje, onReintentar }) {
  return (
    <div className="ts-alerta ts-alerta-danger" role="alert">
      <Icon name="alert-circle" size={20} />
      <div>
        <strong className="d-block mb-1">No se pudo conectar con la API</strong>
        <p className="mb-2">{mensaje}</p>
        {onReintentar && (
          <button type="button" className="btn btn-ts-outline btn-sm" onClick={onReintentar}>
            Reintentar
          </button>
        )}
      </div>
    </div>
  );
}

// Estado vacío (sin resultados / sin datos).
export function SinResultados({ texto = 'No se encontraron solicitudes.' }) {
  return (
    <div className="ts-estado-vacio">
      <Icon name="list" size={26} />
      <p className="texto-muted mb-0 mt-2">{texto}</p>
    </div>
  );
}

// Alerta compacta y descartable para errores de una acción puntual
// (por ejemplo, un DELETE que falló). Si no hay mensaje, no pinta nada.
export function AlertaError({ mensaje, onCerrar }) {
  if (!mensaje) return null;
  return (
    <div className="ts-alerta ts-alerta-danger mb-4" role="alert">
      <Icon name="alert-circle" size={18} />
      <span className="flex-grow-1">{mensaje}</span>
      {onCerrar && (
        <button
          type="button"
          className="btn-close btn-close-white"
          aria-label="Cerrar aviso"
          onClick={onCerrar}
        />
      )}
    </div>
  );
}
