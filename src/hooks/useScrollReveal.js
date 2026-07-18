// ============================================================
// useScrollReveal · Anima los elementos al entrar en pantalla
// ------------------------------------------------------------
// Busca todos los elementos con la clase `.reveal` y, cuando entran
// en el viewport, les añade `.is-visible` (que dispara la transición
// definida en animaciones.css). Usa IntersectionObserver, el estándar
// moderno para detectar visibilidad sin escuchar el evento scroll.
// ============================================================
import { useEffect } from 'react';

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal');

    // Si el navegador no soporta IntersectionObserver, mostramos todo
    // directamente para no dejar contenido invisible.
    if (!('IntersectionObserver' in window) || elementos.length === 0) {
      elementos.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            // Una vez revelado, dejamos de observarlo (la animación es única).
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elementos.forEach((el) => observador.observe(el));

    // Limpieza al desmontar el componente.
    return () => observador.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
