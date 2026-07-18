import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Icon from './Icon.jsx';
import SeccionCabecera from './SeccionCabecera.jsx';
import { casosEstudio } from '../data/casosEstudio.js';

function CasosEstudioModal() {
  // Caso seleccionado para mostrar en el modal (null = modal cerrado).
  const [casoActivo, setCasoActivo] = useState(null);
  const cerrar = () => setCasoActivo(null);

  return (
    <section id="casos" className="seccion">
      <Container>
        <SeccionCabecera
          eyebrow="Casos de éxito"
          titulo="Resultados reales para clientes reales"
          subtitulo="Algunos proyectos donde la tecnología marcó la diferencia."
        />
        <Row className="g-4">
          {casosEstudio.map((caso, indice) => (
            <Col md={6} lg={4} key={caso.id}>
              <Card className={`ts-card caso-card reveal rd-${indice + 1}`}>
                <Card.Body className="d-flex flex-column p-4">
                  <span className="ts-chip mb-3">{caso.sector}</span>
                  <Card.Title className="h5">{caso.cliente}</Card.Title>
                  <Card.Text className="texto-muted flex-grow-1">{caso.resumen}</Card.Text>
                  <button
                    type="button"
                    className="btn btn-ts-ghost align-self-start mt-2"
                    onClick={() => setCasoActivo(caso)}
                  >
                    Ver Caso
                    <Icon name="arrow-right" size={18} className="ms-1" />
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={casoActivo !== null}
        onHide={cerrar}
        centered
        size="lg"
        className="ts-modal"
        aria-labelledby="titulo-caso"
        restoreFocus={false}
      >
        {casoActivo && (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="titulo-caso">
                {casoActivo.cliente}{' '}
                <small className="texto-muted fs-6">· {casoActivo.sector}</small>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="ts-bloque-modal mb-4">
                <h6>Problema del cliente</h6>
                <p className="texto-muted mb-0">{casoActivo.problema}</p>
              </div>
              <div className="ts-bloque-modal mb-4">
                <h6>Solución implementada</h6>
                <p className="texto-muted mb-0">{casoActivo.solucion}</p>
              </div>
              <div className="ts-bloque-modal">
                <h6>Resultados obtenidos</h6>
                <ul className="ts-beneficios">
                  {casoActivo.resultados.map((resultado) => (
                    <li key={resultado}>{resultado}</li>
                  ))}
                </ul>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-ts-outline" onClick={cerrar}>
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-ts-primary"
                onClick={() => {
                  cerrar();
                  setTimeout(() => {
                    const contacto = document.getElementById('contacto');
                    if (contacto) {
                      contacto.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 150);
                }}
              >
                Quiero algo así
                <Icon name="arrow-right" size={18} className="ms-1" />
              </button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
}

export default CasosEstudioModal;
