import { useNavigate } from 'react-router-dom';
import SolicitudForm from '../components/SolicitudForm.jsx';

function AgregarSolicitud() {
  const navigate = useNavigate();

  return (
    <div className="reveal is-visible">
      <SolicitudForm
        solicitudEditando={null}
        onGuardado={() => navigate('/solicitudes')}
        onCancelar={() => navigate('/solicitudes')}
      />
    </div>
  );
}

export default AgregarSolicitud;
