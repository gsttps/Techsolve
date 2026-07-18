import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Icon from './Icon.jsx';

// Enlaces del menú según la rúbrica. El scroll suave se resuelve por CSS
// (scroll-behavior + scroll-margin-top en cada sección).
const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#servicios', texto: 'Servicios' },
  { href: '#casos', texto: 'Casos de Éxito' },
  { href: '#proyectos', texto: 'Proyectos' },
];

function NavbarCorporativo() {
  // Cambia el estilo del navbar cuando el usuario se desplaza hacia abajo
  // (fondo más opaco + borde + sombra) para mejorar la legibilidad.
  const [desplazado, setDesplazado] = useState(false);

  useEffect(() => {
    const alScroll = () => setDesplazado(window.scrollY > 24);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      data-bs-theme="dark"
      className={`ts-navbar py-3 ${desplazado ? 'is-scrolled' : ''}`}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="ts-brand">
          <span className="ts-brand-mark" aria-hidden="true">
            <Icon name="hexagon" size={26} />
          </span>
          <span className="ts-brand-texto">
            <span className="texto-gradiente">Tech</span>Solve
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-corporativo" aria-label="Abrir menú" />
        <Navbar.Collapse id="menu-corporativo">
          <Nav className="ms-auto align-items-lg-center">
            {enlaces.map((enlace) => (
              <Nav.Link key={enlace.href} href={enlace.href} className="px-3">
                {enlace.texto}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to="/solicitudes" className="px-3">
              Panel de Solicitudes
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              className="btn btn-ts-primary text-white ms-lg-3 mt-2 mt-lg-0"
            >
              Contactar
              <Icon name="arrow-right" size={18} className="ms-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCorporativo;
