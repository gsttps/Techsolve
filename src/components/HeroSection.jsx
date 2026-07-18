import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon.jsx';

// Datos del panel flotante del hero (evita texto hardcodeado repetido).
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
                  <div className="hero-stat-valor texto-gradiente">{stat.valor}</div>
                  <small className="texto-muted">{stat.etiqueta}</small>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={5} className="d-none d-lg-block">
            <div className="hero-panel anim-hero-art">
              <div className="hero-panel-cabecera">
                <span className="ts-icono ts-icono-sm" aria-hidden="true">
                  <Icon name="target" size={22} />
                </span>
                <strong>Plan estratégico TI</strong>
              </div>
              <ul className="ts-beneficios">
                {panelItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
