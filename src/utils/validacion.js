// Validaciones compartidas entre el formulario de contacto de la landing
// y el formulario de solicitudes del panel CRUD. Tener la regex en un solo
// lugar evita que ambos formularios se desincronicen con el tiempo.
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function esEmailValido(email) {
  return EMAIL_REGEX.test(email);
}
