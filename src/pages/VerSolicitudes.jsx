import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolicitudes } from '../hooks/useSolicitudes.js';
import SolicitudCard from '../components/SolicitudCard.jsx';
import Buscador from '../components/Buscador.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { Cargando, ErrorApi, SinResultados, AlertaError } from '../components/EstadoCarga.jsx';

// Listado principal del panel: trae las solicitudes desde la API (GET),
// permite buscarlas y, desde cada tarjeta, editarlas o eliminarlas
// (DELETE con confirmación previa).
function VerSolicitudes() {
  const navigate = useNavigate();
  const {
    solicitudes,
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
    // Si falló, el mensaje queda visible en la alerta inline de arriba.
    setAEliminar(null);
  };

  if (cargando) return <Cargando texto="Obteniendo solicitudes desde la API..." />;
  if (error) return <ErrorApi mensaje={error} onReintentar={reintentar} />;

  return (
    <div className="reveal is-visible">
      <AlertaError mensaje={errorEliminar} onCerrar={() => setErrorEliminar('')} />

      <Buscador
        valor={busqueda}
        onChange={setBusqueda}
        placeholder="Buscar por empresa, contacto o estado..."
      />

      {filtradas.length === 0 ? (
        <SinResultados
          texto={
            solicitudes.length === 0
              ? 'Aún no hay solicitudes registradas. Crea la primera desde "Agregar Solicitud".'
              : 'Ningún resultado coincide con tu búsqueda.'
          }
        />
      ) : (
        <div className="row g-4">
          {filtradas.map((solicitud) => (
            <div className="col-12 col-md-6 col-lg-4" key={solicitud._id}>
              <SolicitudCard
                solicitud={solicitud}
                onEditar={() => navigate(`/solicitudes/editar/${solicitud._id}`)}
                onEliminar={() => setAEliminar(solicitud)}
              />
            </div>
          ))}
        </div>
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

export default VerSolicitudes;
