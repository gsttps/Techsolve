import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Icon from './Icon.jsx';
import SeccionCabecera from './SeccionCabecera.jsx';
import { servicios } from '../data/servicios.js';

function ServiciosAccordion() {
  return (
    <section id="servicios" className="seccion seccion-alt">
      <Container>
        <SeccionCabecera
          eyebrow="Lo que hacemos"
          titulo="Servicios a la medida de tu empresa"
          subtitulo="Cubrimos el ciclo completo de tu transformación digital con equipos especializados en cada disciplina."
        />
        <Row className="justify-content-center">
          <Col lg={9} className="reveal">
            <Accordion defaultActiveKey="0" className="ts-accordion">
              {servicios.map((servicio, indice) => (
                <Accordion.Item eventKey={String(indice)} key={servicio.id}>
                  <Accordion.Header>
                    <span className="ts-icono ts-icono-sm me-3" aria-hidden="true">
                      <Icon name={servicio.icono} size={20} />
                    </span>
                    {servicio.titulo}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="texto-muted">{servicio.descripcion}</p>
                    <strong className="d-block mb-2">Beneficios principales</strong>
                    <ul className="ts-beneficios">
                      {servicio.beneficios.map((beneficio) => (
                        <li key={beneficio}>{beneficio}</li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiciosAccordion;
