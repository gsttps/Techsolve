# TechSolve — Consultoría de TI (landing + panel CRUD de Solicitudes)

Proyecto de evaluación de Front End. Combina:

1. **Landing corporativa B2B** (una sola página, tema oscuro "premium tech") — React 19 + Vite + React-Bootstrap.
2. **Panel de Solicitudes de Cotización** (`/solicitudes`) — CRUD completo (Crear, Leer, Actualizar, Eliminar) contra la API entregada por el docente, siguiendo el modelo de datos único obligatorio.

## 1. Instalar y correr

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:5173`. La landing vive en `/` y el panel CRUD en `/solicitudes`.

## 2. ⚠️ Antes de exponer: revisa el endpoint

Todo el proyecto usa **una sola URL base**, definida arriba de `src/services/solicitudesApi.js`:

```js
const BASE_URL = 'https://apiclases.inacode.cl/consultoria';
```

El correo del docente indica que primero deben revisar `https://apiclases.inacode.cl/api/info` para confirmar el
nombre exacto del recurso asignado a su grupo/sección (puede no ser `/consultoria`). Si es distinto:

1. Prueben el endpoint en ThunderClient (ver punto 3).
2. Cambien **solo esa línea** de `solicitudesApi.js`. El resto del código (formularios, tarjetas, páginas) no
   necesita ningún otro cambio porque toda la comunicación con la API pasa por ese archivo.

## 3. Modelo de datos (obligatorio, no modificar su forma)

```json
{
  "cliente": {
    "empresa": "Retail Sur SpA",
    "contacto": "Marcela Díaz",
    "email": "marcela@retailsur.cl"
  },
  "servicioId": "desarrollo-web",
  "descripcionProyecto": "Auditoría de infraestructura y plan de migración a la nube",
  "presupuestoEstimado": 800000,
  "estado": "en_evaluacion",
  "fecha": "2026-07-08"
}
```

`servicioId` se completa automáticamente en el formulario a partir de `src/data/servicios.js` (los mismos 4
servicios que se muestran en el acordeón de la landing), así que en la práctica el usuario elige un servicio por
nombre y el formulario guarda su `id`.

## 4. Probar los 5 endpoints con ThunderClient

Con el proyecto corriendo (o directamente contra la API), prueben en este orden:

| Método | URL | Body | Qué hace |
|---|---|---|---|
| `GET` | `{BASE_URL}` | — | Lista todas las solicitudes |
| `GET` | `{BASE_URL}/:id` | — | Obtiene una solicitud puntual |
| `POST` | `{BASE_URL}` | JSON del modelo de datos (arriba) | Crea una solicitud |
| `PUT` | `{BASE_URL}/:id` | JSON del modelo de datos | Actualiza una solicitud |
| `DELETE` | `{BASE_URL}/:id` | — | Elimina una solicitud |

Estas mismas 5 operaciones son las que dispara la interfaz:

- **Ver Solicitudes** (`/solicitudes`) → `GET`
- **Agregar Solicitud** (`/solicitudes/nueva`) → `POST`
- **Editar Solicitud** (`/solicitudes/editar/:id`) → `GET` (precarga) + `PUT` (guardar)
- **Eliminar Solicitud** (`/solicitudes/eliminar`, y también el botón "Eliminar" de cada tarjeta) → `DELETE`

## 5. Estructura del proyecto

```
src/
├── main.jsx                  # Punto de entrada
├── App.jsx                   # Enrutador (react-router-dom): "/" y "/solicitudes/*"
├── pages/
│   ├── Home.jsx               # Ensambla la landing (Navbar + secciones + Footer)
│   ├── SolicitudesLayout.jsx  # Cabecera + sub-navegación del panel CRUD
│   ├── VerSolicitudes.jsx     # GET  — listado, búsqueda, acceso a editar/eliminar
│   ├── AgregarSolicitud.jsx   # POST — formulario de creación
│   ├── EditarSolicitud.jsx    # PUT  — carga la solicitud por :id y la edita
│   └── EliminarSolicitud.jsx  # DELETE — listado compacto con confirmación
├── components/                # Piezas visuales reutilizables
│   ├── NavbarCorporativo.jsx, HeroSection.jsx, ServiciosAccordion.jsx,
│   │   CasosEstudioModal.jsx, TimelineProyectos.jsx, ContactoCTA.jsx, Footer.jsx
│   ├── Icon.jsx, SeccionCabecera.jsx
│   ├── SolicitudCard.jsx, SolicitudForm.jsx, Buscador.jsx,
│   │   EstadoBadge.jsx, EstadoCarga.jsx   ← del panel CRUD
│   └── ConfirmDialog.jsx      # Confirmación con estilo propio (sin confirm() nativo)
├── services/
│   └── solicitudesApi.js      # Única capa que habla con la API (fetch)
├── data/
│   ├── servicios.js, casosEstudio.js, timeline.js
│   └── estadosSolicitud.js    # Fuente única de verdad para los estados
├── hooks/
│   ├── useScrollReveal.js
│   └── useSolicitudes.js      # Estado compartido de los listados (carga, búsqueda, borrado)
├── utils/
│   └── validacion.js          # Validación de email compartida (landing + panel)
└── styles/
    ├── global.css              # Tema oscuro glassmorfismo + estilos del panel (sección 19)
    └── animaciones.css
```

## 6. Decisiones de optimización

- **Una sola capa de red** (`solicitudesApi.js`): todos los `fetch` viven ahí, con un manejador de errores común
  (`manejarRespuesta`), así ninguna página repite lógica de `try/catch` ni de parseo de JSON.
- **Un solo hook para los listados** (`hooks/useSolicitudes.js`): "Ver Solicitudes" y "Eliminar Solicitud"
  comparten la carga desde la API, la búsqueda y el borrado con feedback; las páginas solo pintan la interfaz.
- **Diálogos con el estilo de la app** (`ConfirmDialog.jsx`): las confirmaciones de borrado y los errores de la
  API usan componentes propios (modal + alerta inline descartable) en lugar de `confirm()`/`alert()` nativos,
  que bloquean el hilo y el navegador puede llegar a silenciar.
- **Filtrado en memoria**: la búsqueda en "Ver Solicitudes" y "Eliminar Solicitud" no vuelve a llamar a la API en
  cada tecla — filtra el array ya cargado con `useMemo`, evitando peticiones innecesarias.
- **Validación compartida** (`utils/validacion.js`): la regex de email vive en un solo lugar y la usan tanto el
  formulario de contacto de la landing como el formulario del panel.
- **Fuente única de verdad para estados** (`estadosSolicitud.js`): el formulario, las tarjetas y los badges leen
  la misma lista, evitando strings repetidos/inconsistentes.
- **Componentes pequeños y reutilizables** (`Buscador`, `EstadoBadge`, `Cargando`, `ErrorApi`, `SinResultados`):
  se usan en las 3 páginas del CRUD sin duplicar JSX.
- **`useCallback`/`useMemo`** donde corresponde para no recrear funciones ni recalcular listas filtradas en cada
  render.
- **Feedback de estado real** (spinner, error de conexión con botón "Reintentar", estado vacío) en vez de dejar
  la pantalla en blanco mientras se espera la respuesta de la API.
