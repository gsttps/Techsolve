// ============================================================================
// solicitudesApi · Capa de acceso a la API REST de INACODE
// ------------------------------------------------------------------------
// Endpoint base de la evaluación: https://apiclases.inacode.cl/api/info
// Modelo de datos usado (colección "consultoria" / subcolección
// "consultoria_solicitudes", según el documento entregado por el docente):
//
// {
//   cliente: { empresa, contacto, email },
//   servicioId: string,
//   descripcionProyecto: string,
//   presupuestoEstimado: number,
//   estado: string,           // ver src/data/estadosSolicitud.js
//   fecha: 'YYYY-MM-DD',
// }
//
// ⚠️ IMPORTANTE: BASE_URL es la ÚNICA línea que deberías tocar si tu grupo
// recibió un path distinto (revísalo en ThunderClient contra
// https://apiclases.inacode.cl/api/info antes de exponer el proyecto).
// Todo lo demás (crearSolicitud, actualizarSolicitud, etc.) ya queda listo
// y no necesita cambios: solo apunta al recurso correcto.
// ============================================================================

const BASE_URL = 'https://apiclases.inacode.cl/consultoria';

/**
 * Interpreta la respuesta del fetch: si no es "ok" arma un mensaje de error
 * legible (usando lo que devuelva la API si es posible) y lo lanza como
 * excepción; si es correcta, devuelve el JSON ya parseado.
 * Centralizar esto evita repetir el mismo try/catch en cada función.
 */
async function manejarRespuesta(res, mensajePorDefecto) {
  if (!res.ok) {
    let mensaje = `${mensajePorDefecto} (HTTP ${res.status})`;
    try {
      const cuerpo = await res.json();
      if (cuerpo?.message) mensaje = cuerpo.message;
      else if (cuerpo?.error) mensaje = cuerpo.error;
    } catch {
      // La respuesta de error no traía JSON: nos quedamos con el mensaje por defecto.
    }
    throw new Error(mensaje);
  }
  // DELETE puede responder sin cuerpo en algunas APIs; lo contemplamos.
  const texto = await res.text();
  return texto ? JSON.parse(texto) : null;
}

/** Normaliza la forma de la respuesta: algunas APIs envuelven la lista en { datos: [...] }. */
function extraerLista(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.datos)) return payload.datos;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

/** GET /consultoria — obtiene todas las solicitudes de cotización. */
export async function getSolicitudes() {
  const res = await fetch(BASE_URL);
  const data = await manejarRespuesta(res, 'No se pudieron obtener las solicitudes');
  return extraerLista(data);
}

/** GET /consultoria/:id — obtiene una solicitud puntual. */
export async function getSolicitud(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await manejarRespuesta(res, 'No se encontró la solicitud');
  return data?.datos ?? data;
}

/** POST /consultoria — crea una nueva solicitud de cotización. */
export async function crearSolicitud(solicitud) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(solicitud),
  });
  return manejarRespuesta(res, 'No se pudo crear la solicitud');
}

/** PUT /consultoria/:id — actualiza una solicitud existente. */
export async function actualizarSolicitud(id, cambios) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cambios),
  });
  return manejarRespuesta(res, 'No se pudo actualizar la solicitud');
}

/** DELETE /consultoria/:id — elimina una solicitud. */
export async function eliminarSolicitud(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return manejarRespuesta(res, 'No se pudo eliminar la solicitud');
}

export { BASE_URL };
