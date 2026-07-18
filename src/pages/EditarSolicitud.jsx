import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSolicitud, getSolicitudes } from '../services/solicitudesApi.js';
import SolicitudForm from '../components/SolicitudForm.jsx';
import { Cargando, ErrorApi } from '../components/EstadoCarga.jsx';

function EditarSolicitud() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [solicitud, setSolicitud] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelado = false;

    // Intentamos el endpoint de detalle (GET /consultoria/:id); si la API
    // no lo expone, buscamos el registro dentro del listado como respaldo.
    getSolicitud(id)
      .then((data) => {
        if (!cancelado) setSolicitud(data);
      })
      .catch(() =>
        getSolicitudes().then((lista) => {
          if (cancelado) return;
          const encontrada = lista.find((s) => s._id === id);
          if (!encontrada) throw new Error('No se encontró la solicitud solicitada.');
          setSolicitud(encontrada);
        })
      )
      .catch((err) => {
        if (!cancelado) setError(err.message);
      })
      .finally(() => {
        if (!cancelado) setCargando(false);
      });

    return () => {
      cancelado = true;
    };
  }, [id]);

  if (cargando) return <Cargando texto="Cargando la solicitud..." />;
  if (error) return <ErrorApi mensaje={error} onReintentar={() => navigate('/solicitudes')} />;

  return (
    <div className="reveal is-visible">
      <SolicitudForm
        solicitudEditando={solicitud}
        onGuardado={() => navigate('/solicitudes')}
        onCancelar={() => navigate('/solicitudes')}
      />
    </div>
  );
}

export default EditarSolicitud;
