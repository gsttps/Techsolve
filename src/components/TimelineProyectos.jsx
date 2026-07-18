import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from './Icon.jsx';
import SeccionCabecera from './SeccionCabecera.jsx';
import { timeline } from '../data/timeline.js';

function TimelineProyectos() {
  return (
    <section id="proyectos" className="seccion seccion-alt">
      <Container>
        <SeccionCabecera
          eyebrow="Cómo trabajamos"
          titulo="Nuestro proceso, paso a paso"
          subtitulo="Un método probado que da claridad y control en cada etapa del proyecto."
        />
        <Row className="justify-content-center">
          <Col lg={8}>
            <ol className="ts-timeline list-unstyled">
              {timeline.map((etapa, indice) => (
                <li
                  key={etapa.id}
                  className={`ts-timeline-item reveal rd-${indice + 1}`}
                >
                  <span className="ts-timeline-dot" aria-hidden="true">
                    <Icon name={etapa.icono} size={18} />
                  </span>
                  <div className="ts-timeline-contenido">
                    <span className="ts-timeline-paso">Etapa {indice + 1}</span>
                    <h3 className="h5 mt-1 mb-2">{etapa.titulo}</h3>
                    <p className="texto-muted mb-0">{etapa.descripcion}</p>
                  </div>
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
