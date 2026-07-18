import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import SolicitudesLayout from './pages/SolicitudesLayout.jsx';
import VerSolicitudes from './pages/VerSolicitudes.jsx';
import AgregarSolicitud from './pages/AgregarSolicitud.jsx';
import EditarSolicitud from './pages/EditarSolicitud.jsx';
import EliminarSolicitud from './pages/EliminarSolicitud.jsx';

// Estructura de rutas de la app:
// "/"                         -> Landing corporativa (una sola página, navegación por anclas)
// "/solicitudes"               -> Panel CRUD -> lista de solicitudes de cotización
// "/solicitudes/nueva"         -> Crear solicitud (POST)
// "/solicitudes/editar/:id"    -> Editar solicitud (PUT)
// "/solicitudes/eliminar"      -> Eliminar solicitud (DELETE)
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/solicitudes" element={<SolicitudesLayout />}>
          <Route index element={<VerSolicitudes />} />
          <Route path="nueva" element={<AgregarSolicitud />} />
          <Route path="editar/:id" element={<EditarSolicitud />} />
          <Route path="eliminar" element={<EliminarSolicitud />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
