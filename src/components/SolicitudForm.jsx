import { useState } from 'react';
import { crearSolicitud, actualizarSolicitud } from '../services/solicitudesApi.js';
import { servicios } from '../data/servicios.js';
import { ESTADOS_SOLICITUD } from '../data/estadosSolicitud.js';
import { esEmailValido } from '../utils/validacion.js';
import Icon from './Icon.jsx';

const valoresVacios = {
  empresa: '',
  contacto: '',
  email: '',
  servicioId: servicios[0]?.id ?? '',
  descripcionProyecto: '',
  presupuestoEstimado: '',
  estado: ESTADOS_SOLICITUD[0].valor,
  fecha: new Date().toISOString().split('T')[0],
};

function aFormulario(solicitud) {
  if (!solicitud) return valoresVacios;
  return {
    empresa: solicitud.cliente?.empresa ?? '',
    contacto: solicitud.cliente?.contacto ?? '',
    email: solicitud.cliente?.email ?? '',
    servicioId: solicitud.servicioId ?? servicios[0]?.id ?? '',
    descripcionProyecto: solicitud.descripcionProyecto ?? '',
    presupuestoEstimado: solicitud.presupuestoEstimado ?? '',
    estado: solicitud.estado ?? ESTADOS_SOLICITUD[0].valor,
    fecha: solicitud.fecha ?? new Date().toISOString().split('T')[0],
  };
}

function validar(valores) {
  const errores = {};
  if (!valores.empresa.trim()) errores.empresa = 'Indica el nombre de la empresa cliente.';
  if (!valores.contacto.trim()) errores.contacto = 'Indica el nombre de la persona de contacto.';
  if (!valores.email.trim()) {
    errores.email = 'El correo de contacto es obligatorio.';
  } else if (!esEmailValido(valores.email)) {
    errores.email = 'El correo no parece válido.';
  }
  if (!valores.descripcionProyecto.trim()) {
    errores.descripcionProyecto = 'Describe brevemente el proyecto solicitado.';
  }
  if (valores.presupuestoEstimado === '' || Number(valores.presupuestoEstimado) <= 0) {
    errores.presupuestoEstimado = 'Indica un presupuesto estimado válido.';
  }
  if (!valores.fecha) errores.fecha = 'Selecciona una fecha.';
  return errores;
}

/** Convierte los valores planos del formulario al documento anidado que espera la API. */
function aPayload(valores) {
  return {
    cliente: {
      empresa: valores.empresa.trim(),
      contacto: valores.contacto.trim(),
      email: valores.email.trim(),
    },
    servicioId: valores.servicioId,
    descripcionProyecto: valores.descripcionProyecto.trim(),
    presupuestoEstimado: Number(valores.presupuestoEstimado),
    estado: valores.estado,
    fecha: valores.fecha,
  };
}

function SolicitudForm({ solicitudEditando = null, onGuardado, onCancelar }) {
  const [valores, setValores] = useState(() => aFormulario(solicitudEditando));
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [errorApi, setErrorApi] = useState('');

  // Si cambia la solicitud a editar sin que el componente se desmonte,
  // reiniciamos el formulario durante el render (patrón que recomienda
  // React para ajustar estado cuando cambia una prop, sin useEffect).
  const [solicitudPrevia, setSolicitudPrevia] = useState(solicitudEditando);
  if (solicitudEditando !== solicitudPrevia) {
    setSolicitudPrevia(solicitudEditando);
    setValores(aFormulario(solicitudEditando));
    setErrores({});
    setErrorApi('');
  }

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setValores((previo) => ({ ...previo, [name]: value }));
    if (errores[name]) setErrores((previo) => ({ ...previo, [name]: undefined }));
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length > 0) return;

    const payload = aPayload(valores);
    setEnviando(true);
    setErrorApi('');
    try {
      if (solicitudEditando) {
        await actualizarSolicitud(solicitudEditando._id, payload);
      } else {
        await crearSolicitud(payload);
      }
      onGuardado();
    } catch (err) {
      setErrorApi(err.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form className="ts-card ts-form p-4 p-md-5" onSubmit={manejarEnvio} noValidate>
      <h3 className="h5 mb-4">
        {solicitudEditando ? `Editando solicitud #${solicitudEditando._id}` : 'Nueva solicitud de cotización'}
      </h3>

      {errorApi && (
        <div className="ts-alerta ts-alerta-danger mb-4">
          <Icon name="alert-circle" size={18} />
          <span>{errorApi}</span>
        </div>
      )}

      <p className="seccion-eyebrow mb-3">Datos del cliente</p>
      <div className="row g-3 mb-2">
        <div className="col-md-4">
          <label className="form-label">Empresa</label>
          <input
            type="text"
            name="empresa"
            className={`form-control ${errores.empresa ? 'is-invalid' : ''}`}
            value={valores.empresa}
            onChange={manejarCambio}
            placeholder="Retail Sur SpA"
          />
          {errores.empresa && <div className="invalid-feedback">{errores.empresa}</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label">Contacto</label>
          <input
            type="text"
            name="contacto"
            className={`form-control ${errores.contacto ? 'is-invalid' : ''}`}
            value={valores.contacto}
            onChange={manejarCambio}
            placeholder="Marcela Díaz"
          />
          {errores.contacto && <div className="invalid-feedback">{errores.contacto}</div>}
        </div>
        <div className="col-md-4">
          <label className="form-label">Correo</label>
          <input
            type="email"
            name="email"
            className={`form-control ${errores.email ? 'is-invalid' : ''}`}
            value={valores.email}
            onChange={manejarCambio}
            placeholder="marcela@retailsur.cl"
          />
          {errores.email && <div className="invalid-feedback">{errores.email}</div>}
        </div>
      </div>

      <hr className="my-4" />
      <p className="seccion-eyebrow mb-3">Detalle del proyecto</p>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Servicio solicitado</label>
          <select
            name="servicioId"
            className="form-select"
            value={valores.servicioId}
            onChange={manejarCambio}
          >
            {servicios.map((s) => (
              <option key={s.id} value={s.id}>{s.titulo}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Presupuesto estimado (CLP)</label>
          <input
            type="number"
            name="presupuestoEstimado"
            min="0"
            step="1000"
            className={`form-control ${errores.presupuestoEstimado ? 'is-invalid' : ''}`}
            value={valores.presupuestoEstimado}
            onChange={manejarCambio}
            placeholder="800000"
          />
          {errores.presupuestoEstimado && (
            <div className="invalid-feedback">{errores.presupuestoEstimado}</div>
          )}
        </div>
        <div className="col-md-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className={`form-control ${errores.fecha ? 'is-invalid' : ''}`}
            value={valores.fecha}
            onChange={manejarCambio}
          />
          {errores.fecha && <div className="invalid-feedback">{errores.fecha}</div>}
        </div>

        <div className="col-12">
          <label className="form-label">Descripción del proyecto</label>
          <textarea
            name="descripcionProyecto"
            rows={4}
            className={`form-control ${errores.descripcionProyecto ? 'is-invalid' : ''}`}
            value={valores.descripcionProyecto}
            onChange={manejarCambio}
            placeholder="Auditoría de infraestructura y plan de migración a la nube"
          />
          {errores.descripcionProyecto && (
            <div className="invalid-feedback">{errores.descripcionProyecto}</div>
          )}
        </div>

        <div className="col-md-6">
          <label className="form-label">Estado</label>
          <select name="estado" className="form-select" value={valores.estado} onChange={manejarCambio}>
            {ESTADOS_SOLICITUD.map((e) => (
              <option key={e.valor} value={e.valor}>{e.etiqueta}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="d-flex gap-2 mt-4">
        <button type="submit" className="btn btn-ts-primary" disabled={enviando}>
          {enviando ? 'Guardando...' : solicitudEditando ? 'Actualizar solicitud' : 'Crear solicitud'}
          {!enviando && <Icon name="arrow-right" size={18} className="ms-1" />}
        </button>
        {onCancelar && (
          <button type="button" className="btn btn-ts-outline" onClick={onCancelar} disabled={enviando}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default SolicitudForm;
