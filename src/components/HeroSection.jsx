import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSection() {
  return (
    <section id="inicio" className="seccion pt-5">
      <Container className="pt-5">
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <p className="seccion-eyebrow anim-hero-titulo mb-3">
              Consultoría de TI para empresas
            </p>
            <h1 className="anim-hero-titulo mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}>
              Transformamos tu empresa con{' '}
              <span className="texto-gradiente">tecnología que impulsa resultados</span>
            </h1>
            <p className="anim-hero-sub texto-muted fs-5 mb-4" style={{ maxWidth: '36rem' }}>
              En TechSolve diseñamos soluciones digitales seguras, escalables y a medida.
              Acompañamos a tu organización desde la estrategia hasta la operación, con un
              equipo experto comprometido con tu éxito.
            </p>
            <div className="anim-hero-cta d-flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-ts-primary anim-pulse">
                Solicitar consultoría
              </a>
              <a href="#servicios" className="btn btn-ts-outline">
                Ver servicios
              </a>
            </div>

            <Row className="g-4 mt-4">
              <Col xs={4}>
                <div className="h3 mb-0 fw-bold texto-gradiente">+120</div>
                <small className="texto-muted">Proyectos entregados</small>
              </Col>
              <Col xs={4}>
                <div className="h3 mb-0 fw-bold texto-gradiente">98%</div>
                <small className="texto-muted">Clientes satisfechos</small>
              </Col>
              <Col xs={4}>
                <div className="h3 mb-0 fw-bold texto-gradiente">12</div>
                <small className="texto-muted">Años de experiencia</small>
              </Col>
            </Row>
          </Col>

          <Col lg={5} className="d-none d-lg-block">
            <div className="anim-hero-art ts-card p-4 text-start">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="ts-icono" style={{ width: 40, height: 40, fontSize: '1.1rem' }}>
                  💡
                </span>
                <strong>Plan estratégico TI</strong>
              </div>
              <ul className="ts-beneficios">
                <li>Diagnóstico tecnológico integral</li>
                <li>Hoja de ruta a 12 meses</li>
                <li>Seguridad y cumplimiento desde el diseño</li>
                <li>Soporte y mejora continua</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
