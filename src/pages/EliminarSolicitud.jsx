import { useState } from 'react';
import { useSolicitudes } from '../hooks/useSolicitudes.js';
import Buscador from '../components/Buscador.jsx';
import EstadoBadge from '../components/EstadoBadge.jsx';
import Icon from '../components/Icon.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { Cargando, ErrorApi, SinResultados, AlertaError } from '../components/EstadoCarga.jsx';

// Vista dedicada a dar de baja solicitudes: lista compacta con buscador
// y confirmación antes de cada DELETE contra la API.
function EliminarSolicitud() {
  const {
    filtradas,
    busqueda,
    setBusqueda,
    cargando,
    error,
    reintentar,
    eliminar,
    eliminandoId,
    errorEliminar,
    setErrorEliminar,
  } = useSolicitudes();

  // Solicitud pendiente de confirmar su borrado (null = diálogo cerrado).
  const [aEliminar, setAEliminar] = useState(null);

  const confirmarEliminacion = async () => {
    await eliminar(aEliminar);
    setAEliminar(null);
  };

  if (cargando) return <Cargando texto="Cargando solicitudes..." />;
  if (error) return <ErrorApi mensaje={error} onReintentar={reintentar} />;

  return (
    <div className="reveal is-visible">
      <p className="texto-muted mb-4">
        Selecciona una solicitud para eliminarla de forma permanente (DELETE contra la API).
      </p>

      <AlertaError mensaje={errorEliminar} onCerrar={() => setErrorEliminar('')} />

      <Buscador
        valor={busqueda}
        onChange={setBusqueda}
        placeholder="Buscar por empresa, contacto o estado..."
      />

      {filtradas.length === 0 ? (
        <SinResultados />
      ) : (
        <ul className="ts-lista-eliminar list-unstyled">
          {filtradas.map((s) => (
            <li key={s._id} className="ts-fila-eliminar">
              <div>
                <strong>{s.cliente?.empresa || 'Sin empresa'}</strong>
                <span className="texto-muted"> · {s.cliente?.contacto}</span>
                <div className="mt-1">
                  <EstadoBadge estado={s.estado} />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-ts-danger btn-sm"
                onClick={() => setAEliminar(s)}
                disabled={eliminandoId === s._id}
              >
                <Icon name="trash" size={16} className="me-1" />
                {eliminandoId === s._id ? 'Eliminando...' : 'Eliminar'}
              </button>
            </li>
          ))}
        </ul>
      )}

      <ConfirmDialog
        abierto={aEliminar !== null}
        titulo="Eliminar solicitud"
        mensaje={`Vas a eliminar la solicitud de "${aEliminar?.cliente?.empresa ?? 'esta empresa'}". Esta acción no se puede deshacer.`}
        confirmando={eliminandoId !== null}
        onConfirmar={confirmarEliminacion}
        onCancelar={() => setAEliminar(null)}
      />
    </div>
  );
}

export default EliminarSolicitud;
