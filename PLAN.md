# PLAN.md — TechSolve · Landing corporativa B2B

Plan de implementación del sitio web corporativo **TechSolve - Consultoría de TI**.

## Stack

- React 19 (componentes funcionales + hooks)
- Vite 8
- Bootstrap 5.3 vía `react-bootstrap`
- CSS3 puro (sin TypeScript)

## Decisiones de diseño

- **Tema único oscuro** corporativo: azul sobre un fondo en degradado.
- Componentes de Bootstrap mediante `react-bootstrap` (`Navbar`, `Accordion`, `Modal`, `Card`, `Form`).
- Formulario de contacto con validación controlada (estado local, sin backend).
- Las secciones de datos (servicios, casos, timeline) se renderizan con `.map()` sobre arrays en `src/data/` para evitar duplicación.

## Arquitectura

```
src/
  main.jsx                  Punto de entrada; importa Bootstrap + estilos globales
  App.jsx                   Composición: Navbar + <main> con secciones + Footer
  components/
    NavbarCorporativo.jsx   Navbar fijo, hamburguesa, scroll suave
    HeroSection.jsx         Hero #inicio con animación de entrada
    ServiciosAccordion.jsx  Acordeón de 4 servicios (#servicios)
    CasosEstudioModal.jsx   Cards + Modal de casos de éxito (#casos)
    TimelineProyectos.jsx   Línea temporal de 5 etapas (#proyectos)
    ContactoCTA.jsx         CTA + formulario validado (#contacto)
    Footer.jsx              Pie de página
  data/
    servicios.js            4 servicios { id, titulo, descripcion, beneficios[] }
    casosEstudio.js         3+ casos { id, cliente, resumen, problema, solucion, resultados[] }
    timeline.js             5 etapas { id, titulo, descripcion, icono }
  styles/
    global.css              Paleta, fondo degradado, overrides Bootstrap, layout
    animaciones.css         Keyframes y clases de animación reutilizables
```

## Orden de implementación

1. Estilos base (`global.css`, `animaciones.css`).
2. Corrección de `main.jsx`.
3. Datos en `src/data/`.
4. Componentes: Navbar → Hero → Servicios → Casos → Timeline → Contacto → Footer.
5. Ensamblado en `App.jsx` e `index.html`.
6. Verificación: `npm run lint` y `npm run build`.
7. README.

## Cumplimiento de la rúbrica

- Navbar responsive fijo con scroll suave y menú hamburguesa.
- Acordeón de servicios (≥4).
- Casos de éxito en Modal (≥3).
- Timeline de 5 etapas, responsive.
- Animaciones CSS propias (hero, hover, botones, timeline, secciones).
- CTA de contacto con datos y formulario.
- Diseño responsive (desktop / tablet / mobile).
- HTML semántico, jerarquía de encabezados, contraste y `aria-*`.
