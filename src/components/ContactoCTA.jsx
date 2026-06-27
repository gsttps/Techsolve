import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const valoresIniciales = { nombre: '', email: '', mensaje: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar(valores) {
  const errores = {};
  if (!valores.nombre.trim()) {
    errores.nombre = 'Por favor, indícanos tu nombre.';
  }
  if (!valores.email.trim()) {
    errores.email = 'Necesitamos un correo para responderte.';
  } else if (!EMAIL_REGEX.test(valores.email)) {
    errores.email = 'El correo no parece válido.';
  }
  if (!valores.mensaje.trim()) {
    errores.mensaje = 'Cuéntanos brevemente qué necesitas.';
  }
  return errores;
}

function ContactoCTA() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setValores((previo) => ({ ...previo, [name]: value }));
    if (errores[name]) {
      setErrores((previo) => ({ ...previo, [name]: undefined }));
    }
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    const nuevosErrores = validar(valores);
    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length === 0) {
      // Sin backend: simulamos el envío y mostramos confirmación.
      setEnviado(true);
      setValores(valoresIniciales);
    }
  };

  return (
    <section id="contacto" className="seccion">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={5} className="anim-aparece">
            <p className="seccion-eyebrow mb-2">Hablemos</p>
            <h2 className="seccion-titulo mb-3">
              ¿Listo para llevar tu empresa al{' '}
              <span className="texto-gradiente">siguiente nivel</span>?
            </h2>
            <p className="texto-muted mb-4">
              Cuéntanos tu desafío y te propondremos un plan claro, sin compromiso.
              Nuestro equipo te responderá en menos de 24 horas.
            </p>
            <div className="d-grid gap-2">
              <p className="ts-contacto-dato mb-1">
                <strong>Correo:</strong>{' '}
                <a href="mailto:contacto@techsolve.com">contacto@techsolve.com</a>
              </p>
              <p className="ts-contacto-dato mb-0">
                <strong>Teléfono:</strong>{' '}
                <a href="tel:+34910000000">+34 910 000 000</a>
              </p>
            </div>
          </Col>

          <Col lg={7} className="anim-aparece anim-delay-2">
            <div className="ts-card p-4 p-md-5">
              {enviado && (
                <Alert
                  variant="success"
                  dismissible
                  onClose={() => setEnviado(false)}
                >
                  ¡Gracias por escribirnos! Hemos recibido tu mensaje y te
                  responderemos muy pronto.
                </Alert>
              )}

              <Form noValidate onSubmit={manejarEnvio} className="ts-form">
                <Form.Group className="mb-3" controlId="campoNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={valores.nombre}
                    onChange={manejarCambio}
                    placeholder="Tu nombre"
                    isInvalid={!!errores.nombre}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="campoEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={valores.email}
                    onChange={manejarCambio}
                    placeholder="tu@empresa.com"
                    isInvalid={!!errores.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="campoMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="mensaje"
                    value={valores.mensaje}
                    onChange={manejarCambio}
                    placeholder="¿En qué podemos ayudarte?"
                    isInvalid={!!errores.mensaje}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errores.mensaje}
                  </Form.Control.Feedback>
                </Form.Group>

                <button type="submit" className="btn btn-ts-primary w-100">
                  Enviar mensaje
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactoCTA;
