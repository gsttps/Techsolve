import Icon from './Icon.jsx';
import EstadoBadge from './EstadoBadge.jsx';
import { servicios } from '../data/servicios.js';

const formatoCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

function nombreServicio(servicioId) {
  return servicios.find((s) => s.id === servicioId)?.titulo ?? servicioId ?? 'Sin especificar';
}

function SolicitudCard({ solicitud, onEditar, onEliminar }) {
  const { cliente = {}, servicioId, descripcionProyecto, presupuestoEstimado, estado, fecha, _id } = solicitud;

  return (
    <div className="ts-card ts-solicitud-card h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <span className="ts-chip">{nombreServicio(servicioId)}</span>
        <EstadoBadge estado={estado} />
      </div>

      <h3 className="h5 mb-1">{cliente.empresa || 'Empresa sin nombre'}</h3>
      <p className="texto-muted small mb-3">
        <Icon name="mail" size={14} className="me-1" />
        {cliente.contacto} · {cliente.email}
      </p>

      {descripcionProyecto && (
        <p className="texto-muted flex-grow-1">{descripcionProyecto}</p>
      )}

      <div className="ts-solicitud-meta">
        <div>
          <small className="texto-muted d-block">Presupuesto estimado</small>
          <strong className="texto-gradiente">
            {typeof presupuestoEstimado === 'number' ? formatoCLP.format(presupuestoEstimado) : '—'}
          </strong>
        </div>
        <div className="text-end">
          <small className="texto-muted d-block">Fecha</small>
          <strong>{fecha || '—'}</strong>
        </div>
      </div>

      <div className="d-flex gap-2 mt-3">
        <button type="button" className="btn btn-ts-outline btn-sm flex-fill" onClick={onEditar}>
          <Icon name="pencil" size={16} className="me-1" />
          Editar
        </button>
        <button type="button" className="btn btn-ts-danger btn-sm flex-fill" onClick={onEliminar}>
          <Icon name="trash" size={16} className="me-1" />
          Eliminar
        </button>
      </div>

      {_id && <p className="ts-solicitud-id mt-2 mb-0">ID: {_id}</p>}
    </div>
  );
}

export default SolicitudCard;
