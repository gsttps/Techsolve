import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon.jsx';

// Datos del panel del hero (evita texto hardcodeado repetido).
const panelItems = [
  'Diagnóstico tecnológico integral',
  'Hoja de ruta a 12 meses',
  'Seguridad y cumplimiento desde el diseño',
  'Soporte y mejora continua',
];

const estadisticas = [
  { valor: '+120', etiqueta: 'Proyectos entregados' },
  { valor: '98%', etiqueta: 'Clientes satisfechos' },
  { valor: '12', etiqueta: 'Años de experiencia' },
];

function HeroSection() {
  return (
    <section id="inicio" className="seccion hero">
      <Container className="position-relative">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <span className="hero-badge anim-hero-titulo">
              <span className="hero-badge-dot" aria-hidden="true" />
              Consultoría de TI para empresas
            </span>
            <h1 className="hero-titulo anim-hero-titulo">
              Transformamos tu empresa con{' '}
              <span className="texto-gradiente">tecnología que impulsa resultados</span>
            </h1>
            <p className="hero-sub anim-hero-sub texto-muted">
              En TechSolve diseñamos soluciones digitales seguras, escalables y a medida.
              Acompañamos a tu organización desde la estrategia hasta la operación, con un
              equipo experto comprometido con tu éxito.
            </p>
            <div className="anim-hero-cta d-flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-ts-primary">
                Solicitar consultoría
                <Icon name="arrow-right" size={18} className="ms-1" />
              </a>
              <a href="#servicios" className="btn btn-ts-outline">
                Ver servicios
              </a>
            </div>
            <div className="hero-stats anim-hero-cta">
              {estadisticas.map((stat) => (
                <div className="hero-stat" key={stat.etiqueta}>
                  <div className="hero-stat-valor">{stat.valor}</div>
                  <small className="texto-muted">{stat.etiqueta}</small>
                </div>
              ))}
            </div>
          </Col>

          {/* Firma visual: una "consola de diagnóstico" que muestra el mismo
              plan estratégico como salida de terminal — habla el idioma del
              cliente (sistemas / ingeniería). Solo presentación. */}
          <Col lg={5} className="d-none d-lg-block">
            <div className="hero-consola anim-hero-art">
              <div className="hero-consola-barra">
                <span className="hero-consola-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="hero-consola-ruta">techsolve@core: ~/diagnostico</span>
              </div>
              <div className="hero-consola-cuerpo">
                <p className="hero-consola-prompt">
                  <span aria-hidden="true">$</span> run diagnostico --empresa
                </p>
                <ul className="hero-consola-lista">
                  {panelItems.map((item) => (
                    <li key={item}>
                      <span className="hero-consola-ok" aria-hidden="true">
                        OK
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="hero-consola-pie">
                  <span className="hero-consola-cursor" aria-hidden="true" />
                  uptime 99.98% · plan estratégico listo
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
