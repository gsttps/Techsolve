import Icon from './Icon.jsx';

// Buscador reutilizable para las vistas de listado del panel de Solicitudes.
// Controlado desde afuera (valor/onChange) para poder filtrar en el padre.
function Buscador({ valor, onChange, placeholder = 'Buscar...' }) {
  return (
    <div className="ts-buscador mb-4">
      <span className="ts-buscador-icono" aria-hidden="true">
        <Icon name="search" size={18} />
      </span>
      <input
        type="text"
        className="form-control ts-buscador-input"
        placeholder={placeholder}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
      />
    </div>
  );
}

export default Buscador;
