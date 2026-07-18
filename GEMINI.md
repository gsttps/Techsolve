# GEMINI.md

## Proyecto

Desarrollar un sitio web corporativo B2B llamado **TechSolve - Consultoría de TI** utilizando las tecnologías más recientes disponibles.

El proyecto debe estar desarrollado con:

- React (última versión estable)
- Vite (última versión estable)
- HTML5 semántico
- CSS3 puro
- JavaScript moderno (ESModules)
- Bootstrap 5 (última versión estable, vía `react-bootstrap`)

No utilizar TypeScript.

---

## Objetivo

Crear una landing page corporativa moderna y profesional para una empresa ficticia de consultoría tecnológica orientada a clientes empresariales.

El diseño debe transmitir:

- Profesionalismo
- Confianza
- Modernidad
- Tecnología empresarial

La aplicación debe cumplir todos los criterios de evaluación definidos en la rúbrica.

---

## Requisitos funcionales obligatorios

### 1. Navbar corporativo

Crear un navbar responsive utilizando Bootstrap.

Debe incluir:

- Logo "TechSolve" (ícono hexagonal + texto con degradado en "Tech" y blanco en "Solve")
- Inicio
- Servicios
- Casos de Éxito
- Proyectos
- Contacto

Características:

- Navbar fija en la parte superior.
- Transparente sobre el Hero; gana fondo con desenfoque (`backdrop-filter`) al hacer scroll (clase `.is-scrolled` gestionada por el hook `useEffect`).
- Menú hamburguesa en dispositivos móviles.
- Scroll suave hacia las secciones (CSS `scroll-behavior: smooth`).

---

### 2. Acordeones de servicios

Crear una sección "Servicios" utilizando el componente Accordion de Bootstrap.

Debe contener al menos:

1. Desarrollo Web Empresarial
2. Ciberseguridad
3. Infraestructura Cloud
4. Consultoría de Datos

Cada acordeón debe incluir:

- Título
- Descripción detallada
- Beneficios principales

---

### 3. Casos de estudio en modal

Crear una sección "Casos de Éxito".

Mostrar tarjetas (`ts-card caso-card`) con proyectos realizados.

Cada tarjeta debe tener:

- Etiqueta de sector (`ts-chip`, estilo píldora cian)
- Nombre del cliente ficticio
- Breve descripción
- Botón "Ver Caso" estilo ghost (`btn-ts-ghost`) con ícono `arrow-right`

Al presionar el botón debe abrirse un Modal de Bootstrap mostrando:

- Problema del cliente
- Solución implementada
- Resultados obtenidos

El modal incluye dos acciones en el footer:
- **Cerrar**: cierra el modal.
- **Quiero algo así**: cierra el modal y hace scroll programático a la sección `#contacto` con un `setTimeout` de 150 ms para que la animación de cierre termine antes del desplazamiento. El modal tiene `restoreFocus={false}` para que el foco no vuelva al botón que lo abrió bloqueando el scroll.

Crear al menos 3 casos de estudio.

---

### 4. Timeline de proyectos

Crear una línea temporal visual que represente el proceso de trabajo de la empresa.

Etapas mínimas:

1. Análisis
2. Planificación
3. Desarrollo
4. Implementación
5. Soporte

Debe ser visualmente atractiva y responsive.

Cada etapa usa un punto circular (`.ts-timeline-dot`) con ícono SVG inline y una tarjeta de contenido (`.ts-timeline-contenido`) que se desplaza 4 px hacia la derecha en hover.

---

### 5. Animaciones CSS

Incorporar animaciones CSS propias.

Agregar animaciones en:

- Aparición del Hero.
- Hover de tarjetas.
- Botones (elevación + brillo).
- Timeline (desplazamiento de tarjeta).
- Secciones al cargar (clase `reveal`).
- Iconos de flechas en botones (micro-animación `translateX(3px)` en hover).

Las animaciones deben ser suaves y profesionales.

No abusar de las animaciones.

---

### 6. CTA de contacto

Crear una sección final de llamada a la acción.

Debe incluir:

- Título atractivo con texto en degradado.
- Texto motivador.
- Lista de datos de contacto (`.ts-contacto-lista`) con chips de ícono SVG (correo y teléfono).
- Formulario simple de contacto validado con estado local React.

---

## Estructura actual del proyecto

```
src/
  main.jsx                  Punto de entrada; importa Bootstrap + estilos globales
  App.jsx                   Composición: Navbar + <main> con secciones + Footer

  components/
    NavbarCorporativo.jsx   Navbar fijo, scroll suave, clase is-scrolled en scroll
    HeroSection.jsx         Hero con badge, titular, CTAs, métricas y panel vidrio
    ServiciosAccordion.jsx  Acordeón de 4 servicios (#servicios)
    CasosEstudioModal.jsx   Cards + Modal de casos de éxito (#casos)
    TimelineProyectos.jsx   Línea temporal de 5 etapas (#proyectos)
    ContactoCTA.jsx         CTA + lista de contacto con íconos + formulario validado
    Footer.jsx              Pie de página
    Icon.jsx                Sistema de íconos SVG inline (estilo Lucide)
    SeccionCabecera.jsx     Componente reutilizable para cabeceras de sección

  data/
    servicios.js            4 servicios { id, titulo, descripcion, beneficios[] }
    casosEstudio.js         3+ casos { id, cliente, sector, resumen, problema, solucion, resultados[] }
    timeline.js             5 etapas { id, titulo, descripcion, icono }

  styles/
    global.css              Sistema completo de diseño (18 secciones documentadas)
    animaciones.css         Keyframes y clases de animación reutilizables
```

---

## Componentes nuevos (añadidos durante desarrollo)

### `Icon.jsx`

Sistema de íconos SVG inline inspirado en Lucide Icons. Evita cargar fuentes externas.

Uso: `<Icon name="arrow-right" size={18} className="ms-1" />`

Íconos disponibles:
- Servicios: `code`, `shield`, `cloud`, `bar-chart`
- Timeline: `search`, `route`, `cpu`, `rocket`, `life-buoy`
- Generales/UI: `target`, `mail`, `phone`, `arrow-right`, `hexagon`

Todos heredan el color del contexto (`currentColor`), son `aria-hidden` y tienen `focusable="false"`.

---

### `SeccionCabecera.jsx`

Componente reutilizable para las cabeceras de sección (eyebrow + título + subtítulo).

Props: `eyebrow`, `titulo`, `subtitulo` (opcional).

Elimina la repetición del mismo bloque HTML en cada sección.

---

## Requisitos técnicos

### React

- Utilizar exclusivamente componentes funcionales.
- Utilizar hooks cuando sea necesario (`useState`, `useEffect`).
- Mantener estado correctamente organizado.
- Evitar código duplicado (usar `SeccionCabecera` para cabeceras, `Icon` para íconos).

### Código

- JSX limpio y legible.
- No dejar código comentado innecesario.
- No generar warnings ni errores en consola.
- Seguir buenas prácticas de React.

### Bootstrap

Utilizar Bootstrap para:

- Navbar
- Grid System
- Cards
- Accordion
- Modal
- Botones (base, sobreescritos con clases `ts-*`)
- Layout responsive

Complementar Bootstrap con CSS personalizado.

---

## Sistema de diseño (`global.css`)

El archivo `global.css` está dividido en 18 secciones documentadas con comentarios:

| N° | Sección | Descripción |
|----|---------|-------------|
| 01 | Tokens de diseño | Variables CSS: colores, radios, sombras, fuentes |
| 02 | Reset y base | Box-sizing, márgenes, renderizado de fuente |
| 03 | Fondo | Malla de halos radiales (`::before`) + rejilla sutil (`::after`) fijas |
| 04 | Tipografía | Encabezados (Sora), cuerpo (Inter), `.texto-muted`, `.texto-gradiente` |
| 05 | Layout de secciones | `.seccion`, `.seccion-alt`, `.seccion-eyebrow` |
| 06 | Botones | `.btn-ts-primary`, `.btn-ts-outline`, `.btn-ts-ghost` + micro-animación de flecha |
| 07 | Navbar | `.ts-navbar`, `.ts-navbar.is-scrolled`, `.ts-brand`, `.ts-brand-mark` |
| 08 | Hero | `.hero`, `.hero-badge`, `.hero-titulo`, `.hero-stats`, `.hero-panel` |
| 09 | Chip de icono | `.ts-icono`, `.ts-icono-sm` |
| 10 | Tarjetas | `.ts-card`, `.caso-card` (línea acento al hover), `.ts-chip` |
| 11 | Acordeón | Variables BS sobrescritas, hover de borde, tipografía display |
| 12 | Lista de beneficios | `.ts-beneficios` con check animado en CSS puro |
| 13 | Modal | `.ts-modal`, `.ts-bloque-modal h6` |
| 14 | Timeline | `.ts-timeline`, `.ts-timeline-dot`, `.ts-timeline-contenido` |
| 15 | Formulario de contacto | `.ts-form`, `.ts-contacto-lista`, `.ts-contacto-item` |
| 16 | Footer | `.ts-footer`, `.ts-footer-sep` |
| 17 | Responsive | Media queries para `992px` y `768px` |
| 18 | Accesibilidad | `prefers-reduced-motion`: desactiva animaciones y transiciones |

### Paleta de variables principales

```css
--ts-bg-1: #05070e          /* fondo más oscuro */
--ts-bg-2: #080c18
--ts-bg-3: #0d1326          /* fondo más claro */
--ts-primary: #3b82f6       /* azul corporativo */
--ts-accent: #22d3ee        /* cian de acento */
--ts-violet: #6366f1        /* violeta para la malla de fondo */
--ts-heading: #ffffff
--ts-text: #e7ecf5
--ts-text-muted: #97a3ba
--ts-font-sans: 'Inter', ...
--ts-font-display: 'Sora', ...
--ts-glow: ...              /* sombra con brillo azul para el panel hero */
```

---

## Responsividad

La aplicación debe funcionar correctamente en:

- Desktop
- Tablet
- Mobile

Todo el contenido debe adaptarse correctamente.

---

## Diseño

Tema único oscuro "premium tech":

- Fondo en degradado tipo malla: halos de color azul/cian/violeta (radiales fijos) + rejilla tenue desvanecida
- Tipografía: Sora (titulares) + Inter (texto corrido)
- Tres variantes de botón: primary (degradado), outline (vidrio), ghost (solo texto + flecha)
- Íconos SVG inline (sin fuentes externas)
- Micro-animación en íconos de flecha: `translateX(3px)` en hover

---

## Accesibilidad

- Utilizar etiquetas HTML semánticas.
- Incluir textos alternativos cuando corresponda.
- `aria-hidden="true"` en íconos decorativos.
- Mantener contraste adecuado.
- Utilizar encabezados jerárquicos.
- `prefers-reduced-motion`: desactiva todas las animaciones y transiciones.

---

## Entregables esperados

El agente debe:

1. Analizar la estructura actual del proyecto.
2. Mantener coherencia con el sistema de diseño existente (`global.css`).
3. Implementar o modificar componentes respetando los patrones establecidos.
4. Reutilizar `Icon.jsx` y `SeccionCabecera.jsx` donde corresponda.
5. Verificar que no existan errores ni warnings en consola.
6. Ejecutar lint antes de finalizar.
7. Mantener este archivo actualizado al agregar nuevas características.

Antes de escribir código, analizar la estructura completa y proponer un plan de implementación.