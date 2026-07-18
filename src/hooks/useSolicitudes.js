// ============================================================
// useSolicitudes · Estado compartido de los listados del panel
// ------------------------------------------------------------
// "Ver Solicitudes" y "Eliminar Solicitud" necesitan exactamente lo
// mismo: traer las solicitudes de la API, filtrarlas por texto y poder
// eliminar una con feedback de progreso y de error. Antes cada página
// repetía esa lógica; ahora vive aquí y las páginas solo se ocupan de
// pintar la interfaz.
// ============================================================
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getSolicitudes, eliminarSolicitud } from '../services/solicitudesApi.js';

export function useSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // Id de la solicitud que se está borrando (para deshabilitar su botón)
  // y mensaje de error si el DELETE falla (se muestra en una alerta inline).
  const [eliminandoId, setEliminandoId] = useState(null);
  const [errorEliminar, setErrorEliminar] = useState('');

  // "cargando" ya nace en true, así que la carga inicial no necesita
  // volver a activarlo (además, hacerlo dentro del efecto provocaría un
  // render en cascada que el linter de React marca como error).
  const cargar = useCallback(() => {
    getSolicitudes()
      .then((data) => {
        setSolicitudes(data);
        setError('');
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  useEffect(() => {
    cargar();
  }, [cargar]);

  // Para el botón "Reintentar": ahí sí queremos que el spinner vuelva
  // a aparecer antes de repetir la petición.
  const reintentar = useCallback(() => {
    setCargando(true);
    cargar();
  }, [cargar]);

  // Elimina contra la API y, si sale bien, saca el registro de la lista
  // local sin volver a pedir todo. Devuelve true/false por si la página
  // quiere reaccionar (por ejemplo, cerrar el diálogo de confirmación).
  const eliminar = useCallback(async (solicitud) => {
    setEliminandoId(solicitud._id);
    setErrorEliminar('');
    try {
      await eliminarSolicitud(solicitud._id);
      setSolicitudes((prev) => prev.filter((s) => s._id !== solicitud._id));
      return true;
    } catch (err) {
      setErrorEliminar(err.message);
      return false;
    } finally {
      setEliminandoId(null);
    }
  }, []);

  // Búsqueda en memoria: filtra la lista ya cargada en cada tecla,
  // sin disparar peticiones extra a la API.
  const filtradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();
    if (!texto) return solicitudes;
    return solicitudes.filter((s) =>
      [s.cliente?.empresa, s.cliente?.contacto, s.estado].some((campo) =>
        (campo ?? '').toLowerCase().includes(texto)
      )
    );
  }, [solicitudes, busqueda]);

  return {
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
  };
}
