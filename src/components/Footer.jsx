import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <span className="fw-bold fs-5">
              <span className="texto-gradiente">Tech</span>Solve
            </span>
            <p className="mb-0 mt-2">
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
              </ul>
            </nav>
          </Col>
        </Row>
        <hr style={{ borderColor: 'var(--ts-border)' }} />
        <p className="text-center mb-0 small">
          © {anio} TechSolve · Consultoría de TI. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
