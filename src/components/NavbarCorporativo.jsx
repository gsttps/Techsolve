import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Enlaces del menú según la rúbrica. El scroll suave se resuelve por CSS
// (scroll-behavior + scroll-margin-top en cada sección).
const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#casos', texto: 'Casos de Éxito' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#contacto', texto: 'Contacto' },
];

function NavbarCorporativo() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="ts-navbar py-3"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#inicio" className="fw-bold fs-4">
          <span className="texto-gradiente">Tech</span>Solve
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-corporativo" aria-label="Abrir menú" />

        <Navbar.Collapse id="menu-corporativo">
          <Nav className="ms-auto align-items-lg-center">
            {enlaces.slice(0, -1).map((enlace) => (
              <Nav.Link key={enlace.href} href={enlace.href} className="px-3">
                {enlace.texto}
              </Nav.Link>
            ))}
            <Nav.Link
              href="#contacto"
              className="btn btn-ts-primary text-white ms-lg-3 mt-2 mt-lg-0 px-4"
            >
              Contactar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCorporativo;
