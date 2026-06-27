import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Cabecera reutilizable de las secciones: etiqueta superior (eyebrow),
// título y subtítulo. Evita repetir el mismo bloque en cada sección.
function SeccionCabecera({ eyebrow, titulo, subtitulo }) {
  return (
    <Row className="justify-content-center text-center mb-5">
      <Col lg={8} className="reveal">
        <p className="seccion-eyebrow mb-3">{eyebrow}</p>
        <h2 className="seccion-titulo">{titulo}</h2>
        {subtitulo && <p className="texto-muted mt-3 mb-0">{subtitulo}</p>}
      </Col>
    </Row>
  );
}

export default SeccionCabecera;
