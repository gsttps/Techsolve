import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { timeline } from '../data/timeline.js';

function TimelineProyectos() {
  return (
    <section id="proyectos" className="seccion seccion-alt">
      <Container>
        <Row className="justify-content-center text-center mb-2">
          <Col lg={8} className="anim-aparece">
            <p className="seccion-eyebrow mb-2">Cómo trabajamos</p>
            <h2 className="seccion-titulo">Nuestro proceso, paso a paso</h2>
            <p className="texto-muted mt-3">
              Un método probado que da claridad y control en cada etapa del proyecto.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={8}>
            <ol className="ts-timeline list-unstyled">
              {timeline.map((etapa, indice) => (
                <li
                  key={etapa.id}
                  className={`ts-timeline-item anim-aparece anim-delay-${indice + 1}`}
                >
                  <span className="ts-timeline-dot" aria-hidden="true">
                    {etapa.icono}
                  </span>
                  <span className="ts-timeline-paso">Etapa {indice + 1}</span>
                  <h3 className="h5 mt-1 mb-2">{etapa.titulo}</h3>
                  <p className="texto-muted mb-0">{etapa.descripcion}</p>
                </li>
              ))}
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default TimelineProyectos;
