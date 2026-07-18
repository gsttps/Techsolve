import { Link, NavLink, Outlet } from 'react-router-dom';
import Icon from '../components/Icon.jsx';

const tabs = [
  { to: '/solicitudes', end: true, icono: 'list', texto: 'Ver Solicitudes' },
  { to: '/solicitudes/nueva', icono: 'plus', texto: 'Agregar Solicitud' },
  { to: '/solicitudes/eliminar', icono: 'trash', texto: 'Eliminar Solicitud' },
];

function SolicitudesLayout() {
  return (
    <div className="ts-panel">
      <header className="ts-panel-header">
        <div className="container">
          <Link to="/" className="ts-panel-volver">
            <Icon name="arrow-left" size={18} className="me-1" />
            Volver al sitio
          </Link>

          <div className="d-flex align-items-center gap-3 mt-3 mb-4 flex-wrap">
            <span className="ts-icono" aria-hidden="true">
              <Icon name="building" size={26} />
            </span>
            <div>
              <p className="seccion-eyebrow mb-1">CRM · Consultoría B2B</p>
              <h1 className="h3 mb-0">Panel de Solicitudes de Cotización</h1>
            </div>
          </div>

          <nav className="ts-panel-tabs" aria-label="Secciones del panel">
            {tabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                end={tab.end}
                className={({ isActive }) => `ts-panel-tab ${isActive ? 'is-active' : ''}`}
              >
                <Icon name={tab.icono} size={16} className="me-1" />
                {tab.texto}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="container ts-panel-contenido">
        <Outlet />
      </main>
    </div>
  );
}

export default SolicitudesLayout;
