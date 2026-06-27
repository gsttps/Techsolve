# TechSolve · Consultoría de TI

Landing page corporativa B2B para **TechSolve**, una empresa ficticia de consultoría tecnológica. El sitio presenta los servicios, casos de éxito, proceso de trabajo y un canal de contacto, con un diseño moderno de tema oscuro y acentos azules.

## Stack tecnológico

- **React 19** — componentes funcionales y hooks
- **Vite 8** — entorno de desarrollo y build
- **Bootstrap 5.3** vía **react-bootstrap** — componentes y grid responsive
- **CSS3 puro** — estilos y animaciones propias
- JavaScript moderno (ES Modules). Sin TypeScript.

## Características

- **Navbar corporativo** fijo, responsive, con menú hamburguesa y scroll suave entre secciones.
- **Servicios** en un acordeón con descripción y beneficios de cada área.
- **Casos de éxito** en tarjetas; el detalle (problema, solución y resultados) se abre en un modal.
- **Timeline** del proceso de trabajo en 5 etapas, responsive.
- **CTA de contacto** con datos de la empresa y formulario validado (validación en cliente).
- **Animaciones CSS** suaves en hero, tarjetas, botones, secciones y timeline.
- Tema oscuro corporativo con fondo en degradado y buen contraste.
- HTML semántico y atributos de accesibilidad.

## Estructura del proyecto

```
src/
  main.jsx                  Punto de entrada (Bootstrap + estilos globales)
  App.jsx                   Composición de la página
  components/
    NavbarCorporativo.jsx
    HeroSection.jsx
    ServiciosAccordion.jsx
    CasosEstudioModal.jsx
    TimelineProyectos.jsx
    ContactoCTA.jsx
    Footer.jsx
  data/
    servicios.js            Contenido de los servicios
    casosEstudio.js         Contenido de los casos de éxito
    timeline.js             Etapas del proceso
  styles/
    global.css              Paleta, layout y overrides de Bootstrap
    animaciones.css         Keyframes y clases de animación
```

El contenido de las secciones se define en `src/data/` y se renderiza con `.map()`, evitando duplicación y facilitando su edición.

## Puesta en marcha

Requiere Node.js 18+.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción (genera /dist)
npm run build

# Previsualizar el build
npm run preview

# Análisis estático (ESLint)
npm run lint
```

## Personalización

- **Textos y contenido:** editar los archivos de `src/data/`.
- **Colores y tema:** ajustar las variables `--ts-*` al inicio de `src/styles/global.css`.
- **Animaciones:** modificar o añadir clases en `src/styles/animaciones.css`.
