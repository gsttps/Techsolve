import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { servicios } from '../data/servicios.js';

function ServiciosAccordion() {
  return (
    <section id="servicios" className="seccion seccion-alt">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8} className="anim-aparece">
            <p className="seccion-eyebrow mb-2">Lo que hacemos</p>
            <h2 className="seccion-titulo">Servicios a la medida de tu empresa</h2>
            <p className="texto-muted mt-3">
              Cubrimos el ciclo completo de tu transformación digital con equipos
              especializados en cada disciplina.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={9}>
            <Accordion defaultActiveKey="0" className="ts-accordion anim-aparece">
              {servicios.map((servicio, indice) => (
                <Accordion.Item eventKey={String(indice)} key={servicio.id}>
                  <Accordion.Header>
                    <span className="me-2" aria-hidden="true">
                      {servicio.icono}
                    </span>
                    {servicio.titulo}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="texto-muted">{servicio.descripcion}</p>
                    <strong className="d-block mb-1">Beneficios principales</strong>
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
