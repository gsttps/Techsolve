import Modal from 'react-bootstrap/Modal';
import Icon from './Icon.jsx';

// Diálogo de confirmación con el estilo de la app (reemplaza al confirm()
// nativo del navegador, que desentonaba con el resto del diseño y además
// bloquea el hilo). Reutiliza los estilos ya existentes de ts-modal y de
// los botones btn-ts-outline / btn-ts-danger.
function ConfirmDialog({
  abierto,
  titulo,
  mensaje,
  textoConfirmar = 'Eliminar',
  confirmando = false,
  onConfirmar,
  onCancelar,
}) {
  return (
    <Modal
      show={abierto}
      onHide={onCancelar}
      centered
      className="ts-modal"
      aria-labelledby="titulo-confirmar"
      restoreFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="titulo-confirmar" className="h5 d-flex align-items-center gap-2">
          <Icon name="alert-circle" size={20} />
          {titulo}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="texto-muted mb-0">{mensaje}</p>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="button"
          className="btn btn-ts-outline"
          onClick={onCancelar}
          disabled={confirmando}
        >
          Cancelar
        </button>
        <button
          type="button"
          className="btn btn-ts-danger"
          onClick={onConfirmar}
          disabled={confirmando}
        >
          <Icon name="trash" size={16} className="me-1" />
          {confirmando ? 'Eliminando...' : textoConfirmar}
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDialog;
