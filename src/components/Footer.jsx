import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon.jsx';

const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#casos', texto: 'Casos de Éxito' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#contacto', texto: 'Contacto' },
];

function Footer() {
  const anio = new Date().getFullYear();
  return (
    <footer className="ts-footer">
      <Container>
        <Row className="gy-4 align-items-center">
          <Col md={5}>
            <span className="ts-brand">
              <span className="ts-brand-mark" aria-hidden="true">
                <Icon name="hexagon" size={24} />
              </span>
              <span className="ts-brand-texto">
                <span className="texto-gradiente">Tech</span>Solve
              </span>
            </span>
            <p className="mb-0 mt-3">
              Consultoría de TI que impulsa el crecimiento de tu empresa.
            </p>
          </Col>
          <Col md={7}>
            <nav aria-label="Enlaces del pie de página">
              <ul className="list-inline mb-0 text-md-end">
                {enlaces.map((enlace) => (
                  <li className="list-inline-item ms-md-3 my-1" key={enlace.href}>
                    <a href={enlace.href}>{enlace.texto}</a>
                  </li>
                ))}
                <li className="list-inline-item ms-md-3 my-1">
                  <Link to="/solicitudes">Panel de Solicitudes</Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        <hr className="ts-footer-sep" />
        <p className="text-center mb-0 small">
          © {anio} TechSolve · Consultoría de TI. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
