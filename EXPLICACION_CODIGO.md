# Explicación del código — TechSolve JSX

Este documento explica **línea por línea** (o concepto por concepto) cada módulo JSX del proyecto.
No da por supuesto ningún conocimiento previo.

---

## Índice

1. [main.jsx](#1-mainjsx)
2. [App.jsx](#2-appjsx)
3. [NavbarCorporativo.jsx](#3-navbarcorporativojsx)
4. [HeroSection.jsx](#4-herosectionjsx)
5. [ServiciosAccordion.jsx](#5-serviciosaccordionjsx)
6. [CasosEstudioModal.jsx](#6-casosestudiomodaljsx)
7. [TimelineProyectos.jsx](#7-timelineproyectosjsx)
8. [ContactoCTA.jsx](#8-contactoctajsx)
9. [Footer.jsx](#9-footerjsx)

---

## Conceptos previos que se repiten en todo el proyecto

### ¿Qué es JSX?
JSX es una extensión de JavaScript que permite escribir **HTML dentro de código JS**.
El navegador no entiende JSX directamente; Vite lo convierte a JavaScript puro.

```jsx
// Esto es JSX
const elemento = <h1>Hola</h1>;

// Vite lo convierte a esto internamente
const elemento = React.createElement('h1', null, 'Hola');
```

### ¿Qué es un componente funcional?
Una función de JavaScript que devuelve JSX. Su nombre siempre empieza en mayúscula.

```jsx
function MiComponente() {
  return <p>Soy un componente</p>;
}
```

### ¿Qué es export default?
Indica qué "exporta" el archivo para que otros archivos puedan importarlo.

```jsx
export default MiComponente; // Otros archivos podrán hacer: import MiComponente from './MiComponente'
```

### ¿Qué es un hook?
Una función especial de React (su nombre siempre empieza con `use`) que da a los componentes
capacidades extra, como guardar estado (`useState`) o ejecutar efectos (`useEffect`).

---

## 1. main.jsx

**Propósito:** es el punto de entrada de la aplicación. Solo se ejecuta una vez.

```jsx
import { StrictMode } from 'react'
```
Importa `StrictMode` de React. Es un "modo estricto" que activa advertencias extra durante el
desarrollo (no afecta al código en producción). Se usa como envoltorio para detectar problemas
comunes antes de que lleguen a los usuarios.

```jsx
import { createRoot } from 'react-dom/client'
```
`createRoot` es la función de React que conecta la aplicación con el HTML de la página.
`react-dom/client` es el paquete encargado de trabajar con el DOM (la estructura del navegador).

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```
Importa el CSS de Bootstrap sin darle un nombre. Esto es suficiente para que sus clases
(`col`, `btn`, `container`, etc.) estén disponibles en toda la aplicación.

```jsx
import './styles/global.css'
import './styles/animaciones.css'
```
Igual que el anterior: importa las hojas de estilo propias del proyecto sin asignarlas a ninguna variable.

```jsx
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```
Importa el JavaScript de Bootstrap (necesario para que funcionen los componentes interactivos
como el Navbar hamburguesa y los Modales).

```jsx
import App from './App.jsx'
```
Importa el componente raíz de la aplicación.

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
- `document.getElementById('root')` busca en el HTML el `<div id="root">`. Está en `index.html`.
- `.render(...)` le dice a React qué debe dibujar dentro de ese `<div>`.
- `<App />` es la aplicación entera.
- `<StrictMode>` la envuelve para activar las advertencias extra.

---

## 2. App.jsx

**Propósito:** componer (unir) todos los componentes en la estructura final de la página.

```jsx
import NavbarCorporativo from './components/NavbarCorporativo.jsx';
import HeroSection from './components/HeroSection.jsx';
// ... (resto de imports)
```
Cada línea importa un componente desde su archivo. Al importarlos aquí, los podemos usar en el JSX.

```jsx
function App() {
  return (
    <>
      <NavbarCorporativo />
      <main>
        <HeroSection />
        <ServiciosAccordion />
        <CasosEstudioModal />
        <TimelineProyectos />
        <ContactoCTA />
      </main>
      <Footer />
    </>
  );
}
```
- `<> ... </>` es un **Fragment**: un contenedor invisible. React exige que todo lo que devuelve
  un componente esté dentro de un único elemento padre. El Fragment cumple esa regla sin añadir
  un `<div>` extra al HTML.
- `<main>` es semántico: le dice al navegador y a los lectores de pantalla que aquí está el
  contenido principal de la página.
- Cada `<Componente />` es como llamar a esa función y pegar su resultado aquí.

```jsx
export default App;
```
Exporta `App` para que `main.jsx` pueda importarlo.

---

## 3. NavbarCorporativo.jsx

**Propósito:** barra de navegación fija en la parte superior, con hamburguesa en móvil.

```jsx
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
```
Importa solo los componentes de `react-bootstrap` que necesita (en vez de importar toda la
librería), lo que reduce el tamaño del bundle final.

```jsx
const enlaces = [
  { href: '#inicio', texto: 'Inicio' },
  { href: '#servicios', texto: 'Servicios' },
  // ...
];
```
Un **array de objetos** definido fuera del componente. Al estar fuera, no se recrea en cada
renderizado. Cada objeto tiene `href` (el destino del enlace) y `texto` (lo que ve el usuario).

```jsx
function NavbarCorporativo() {
```
Inicio del componente funcional.

```jsx
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="ts-navbar py-3"
      collapseOnSelect
    >
```
- `expand="lg"` → el menú se expande horizontalmente en pantallas grandes (`lg` = ≥992px).
  En pantallas más pequeñas, se muestra el botón hamburguesa.
- `fixed="top"` → el navbar se queda fijo en la parte superior aunque el usuario haga scroll.
  Internamente añade `position: fixed; top: 0`.
- `className="ts-navbar py-3"` → aplica clases CSS. `py-3` es de Bootstrap (padding vertical).
- `collapseOnSelect` → cuando el usuario elige un enlace en móvil, el menú se cierra solo.

```jsx
      <Container>
```
Limita el ancho del contenido y lo centra, igual que `<div class="container">` en Bootstrap puro.

```jsx
        <Navbar.Brand href="#inicio" className="fw-bold fs-4">
          <span className="texto-gradiente">Tech</span>Solve
        </Navbar.Brand>
```
- `Navbar.Brand` es el logo/nombre de la marca. En HTML sería un `<a>`.
- `fw-bold` = fuente negrita (Bootstrap). `fs-4` = tamaño de fuente 4 (Bootstrap).
- Solo "Tech" tiene la clase `texto-gradiente` (definida en `global.css`) para que solo esa
  parte tenga el efecto de degradado.

```jsx
        <Navbar.Toggle aria-controls="menu-corporativo" aria-label="Abrir menú" />
```
El botón hamburguesa (☰) que aparece en móvil.
- `aria-controls` le dice a las tecnologías de asistencia qué elemento controla este botón.
- `aria-label` da un texto descriptivo para lectores de pantalla (el botón no tiene texto visible).

```jsx
        <Navbar.Collapse id="menu-corporativo">
          <Nav className="ms-auto align-items-lg-center">
```
- `Navbar.Collapse` es el contenedor del menú que se muestra/oculta. Su `id` coincide con
  el `aria-controls` del Toggle.
- `ms-auto` (Bootstrap) = `margin-left: auto`, empuja el menú hacia la derecha.
- `align-items-lg-center` = alinea los items al centro verticalmente en pantallas grandes.

```jsx
            {enlaces.slice(0, -1).map((enlace) => (
              <Nav.Link key={enlace.href} href={enlace.href} className="px-3">
                {enlace.texto}
              </Nav.Link>
            ))}
```
- `.slice(0, -1)` toma todos los elementos del array excepto el último ("Contacto"), porque
  ese se renderiza aparte como botón.
- `.map()` recorre el array y por cada objeto devuelve un `<Nav.Link>`.
- `key={enlace.href}` es obligatorio en React cuando se renderiza una lista: identifica
  de forma única cada elemento para que React sepa cuál actualizar si algo cambia.
- `href={enlace.href}` es el `href` del enlace (p. ej. `#servicios`).

```jsx
            <Nav.Link
              href="#contacto"
              className="btn btn-ts-primary text-white ms-lg-3 mt-2 mt-lg-0 px-4"
            >
              Contactar
            </Nav.Link>
```
El último enlace se estiliza como botón con `btn btn-ts-primary`. Las clases `mt-2 mt-lg-0`
añaden margen superior solo en móvil (cuando los links van en columna) y lo quitan en pantallas
grandes.

```jsx
export default NavbarCorporativo;
```

---

## 4. HeroSection.jsx

**Propósito:** sección de bienvenida que el usuario ve al abrir la web.

```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
```
El **Grid System** de Bootstrap. `Container` limita el ancho; `Row` es una fila; `Col` es una
columna dentro de esa fila.

```jsx
<section id="inicio" className="seccion pt-5">
```
- `<section>` es semántico: una sección temática de la página.
- `id="inicio"` permite navegar aquí con `href="#inicio"`.
- `pt-5` = padding top (Bootstrap). `seccion` añade `scroll-margin-top` en CSS para compensar
  el navbar fijo al hacer scroll.

```jsx
  <Container className="pt-5">
    <Row className="align-items-center g-5">
```
- `align-items-center` alinea verticalmente al centro las columnas de la fila.
- `g-5` = `gap` de tamaño 5 entre columnas (Bootstrap).

```jsx
      <Col lg={7}>
```
En pantallas grandes (`lg`), esta columna ocupa 7 de 12 unidades de la grid.
En móvil, sin especificar, ocupa las 12 (ancho completo).

```jsx
        <p className="seccion-eyebrow anim-hero-titulo mb-3">
          Consultoría de TI para empresas
        </p>
```
El "eyebrow" es un texto pequeño en mayúsculas que aparece encima del título principal.
`anim-hero-titulo` es la clase de animación definida en `animaciones.css`.

```jsx
        <h1 className="anim-hero-titulo mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}>
```
- `style={{ ... }}` aplica estilos en línea. En JSX, `style` recibe un **objeto** (por eso
  las dobles llaves: la exterior es "aquí va JavaScript", la interior es el objeto).
- `clamp(2.4rem, 6vw, 4rem)` es CSS moderno: el tamaño será el valor del medio (`6vw`)
  pero nunca menor que `2.4rem` ni mayor que `4rem`. Hace que el texto se adapte al viewport.

```jsx
          <span className="texto-gradiente">tecnología que impulsa resultados</span>
```
Solo esta parte del texto tiene el efecto de degradado azul-cyan.

```jsx
        <div className="anim-hero-cta d-flex flex-wrap gap-3">
          <a href="#contacto" className="btn btn-ts-primary anim-pulse">
            Solicitar consultoría
          </a>
          <a href="#servicios" className="btn btn-ts-outline">
            Ver servicios
          </a>
        </div>
```
- `d-flex flex-wrap gap-3` = flexbox con wrapping y separación entre botones (Bootstrap).
- `anim-pulse` añade la animación de latido sutil al botón principal.
- `<a>` con clases de botón: semánticamente es un enlace (navega), pero visualmente parece botón.

```jsx
        <Row className="g-4 mt-4">
          <Col xs={4}>
            <div className="h3 mb-0 fw-bold texto-gradiente">+120</div>
            <small className="texto-muted">Proyectos entregados</small>
          </Col>
          // ...
        </Row>
```
Tres mini-estadísticas en una fila de 3 columnas (`xs={4}` × 3 = 12). `xs` aplica en todos
los tamaños (desde el más pequeño), así que siempre van en fila.

```jsx
      <Col lg={5} className="d-none d-lg-block">
```
`d-none` oculta el elemento. `d-lg-block` lo muestra solo en pantallas grandes.
Esta columna es decorativa (solo en desktop).

```jsx
        <div className="anim-hero-art ts-card p-4 text-start">
```
La tarjeta decorativa que flota a la derecha del hero. `anim-hero-art` tiene la animación de
entrada + flotado continuo (`ts-float` en `animaciones.css`).

---

## 5. ServiciosAccordion.jsx

**Propósito:** muestra los 4 servicios en un acordeón expandible.

```jsx
import { servicios } from '../data/servicios.js';
```
Importa el array `servicios` que está en `src/data/servicios.js`. Las llaves `{}` son porque
no es una exportación `default`, sino una exportación **nombrada** (tiene `export const`).

```jsx
<Accordion defaultActiveKey="0" className="ts-accordion anim-aparece">
```
- `defaultActiveKey="0"` → el primer acordeón (`eventKey="0"`) empieza abierto.
- Sin esta prop, todos empezarían cerrados.

```jsx
  {servicios.map((servicio, indice) => (
    <Accordion.Item eventKey={String(indice)} key={servicio.id}>
```
- `.map((servicio, indice) => ...)` recorre el array. `servicio` es el objeto actual;
  `indice` es su posición (0, 1, 2, 3).
- `eventKey={String(indice)}` identifica cada item. `String(0)` convierte el número `0`
  en el string `"0"` (Bootstrap Accordion requiere string).
- `key={servicio.id}` identificador único para React (como en el Navbar).

```jsx
      <Accordion.Header>
        <span className="me-2" aria-hidden="true">
          {servicio.icono}
        </span>
        {servicio.titulo}
      </Accordion.Header>
```
- `aria-hidden="true"` oculta el emoji para lectores de pantalla (es decorativo).
- `{servicio.icono}` y `{servicio.titulo}` son expresiones JavaScript dentro de JSX.
  Las llaves `{}` permiten insertar cualquier valor JS en el HTML.

```jsx
      <Accordion.Body>
        <p className="texto-muted">{servicio.descripcion}</p>
        <strong className="d-block mb-1">Beneficios principales</strong>
        <ul className="ts-beneficios">
          {servicio.beneficios.map((beneficio) => (
            <li key={beneficio}>{beneficio}</li>
          ))}
        </ul>
      </Accordion.Body>
```
- `servicio.beneficios` es un array de strings. Se mapea para generar un `<li>` por cada uno.
- `key={beneficio}` usa el propio texto como key porque los strings son únicos dentro del array.

---

## 6. CasosEstudioModal.jsx

**Propósito:** tarjetas de casos de éxito + modal con detalle al hacer clic.
Este es el componente más complejo porque tiene **estado** (hook `useState`).

```jsx
import { useState } from 'react';
```
`useState` es el hook más básico de React. Permite guardar un valor que, cuando cambia,
hace que el componente se vuelva a renderizar con el nuevo valor.

```jsx
const [casoActivo, setCasoActivo] = useState(null);
```
Esto declara un estado. Es una convención de React que siempre devuelve un array de 2 elementos:

| Elemento | Qué es | En este caso |
|---|---|---|
| `casoActivo` | El valor actual del estado | El objeto del caso seleccionado, o `null` si ninguno |
| `setCasoActivo` | La función para cambiar el valor | Se llama con el nuevo valor |
| `useState(null)` | El valor inicial | `null` significa "ningún caso seleccionado" |

**Por qué `null` para cerrar el modal:**
En vez de tener un estado `mostrarModal` (true/false) y otro `casoSeleccionado`, usamos uno solo:
si `casoActivo` es `null`, el modal está cerrado; si tiene un objeto, está abierto y muestra ese caso.

```jsx
const cerrar = () => setCasoActivo(null);
```
Una función flecha que cierra el modal poniendo `casoActivo` de vuelta a `null`.

```jsx
<Card className={`ts-card anim-aparece anim-delay-${indice + 1} p-2`}>
```
- Template literal (`` ` `` en vez de `"`) permite insertar JS dentro de la string con `${}`.
- `anim-delay-${indice + 1}` genera `anim-delay-1`, `anim-delay-2`, `anim-delay-3` para
  que las tarjetas aparezcan de forma escalonada.

```jsx
<Card.Body className="d-flex flex-column">
```
`flex-column` pone los hijos en columna vertical. Junto con `flex-grow-1` en la descripción,
hace que el botón siempre quede al fondo de la tarjeta aunque las descripciones tengan distinto largo.

```jsx
<Badge bg="" className="ts-icono mb-3" style={{ width: 'auto', fontSize: '0.75rem' }}>
  {caso.sector}
</Badge>
```
`Badge` es la etiqueta pequeña (píldora) del sector. `bg=""` vacía el color de fondo por defecto
para que tome el color de nuestra clase `ts-icono`.

```jsx
<button
  type="button"
  className="btn btn-ts-outline align-self-start mt-2"
  onClick={() => setCasoActivo(caso)}
>
  Ver Caso
</button>
```
- `onClick={() => setCasoActivo(caso)}` → cuando el usuario hace clic, llama a `setCasoActivo`
  con el objeto `caso` actual del `.map()`. Esto cambia el estado y React re-renderiza el
  componente. Ahora `casoActivo !== null`, por lo que el modal se abre.
- `align-self-start` evita que el botón se estire al ancho completo (por el flexbox de `Card.Body`).

```jsx
<Modal
  show={casoActivo !== null}
  onHide={cerrar}
  centered
  size="lg"
  className="ts-modal"
  aria-labelledby="titulo-caso"
>
```
- `show={casoActivo !== null}` → expresión booleana. Si `casoActivo` tiene un valor (no es null),
  la expresión es `true` y el modal se muestra. Si es `null`, es `false` y se oculta.
- `onHide={cerrar}` → qué hacer cuando el usuario cierra el modal (clic en ×, clic fuera, Escape).
- `centered` → centra el modal verticalmente en pantalla.
- `aria-labelledby="titulo-caso"` → accesibilidad: el modal se describe a sí mismo usando el
  texto del elemento con ese id.

```jsx
{casoActivo && (
  <>
    <Modal.Header closeButton>
```
- `casoActivo && (...)` → renderizado condicional. Si `casoActivo` es `null` (falsy), no renderiza
  nada. Si tiene un objeto, renderiza el interior del modal.
- Sin esta guarda, cuando el modal está cerrado (`casoActivo = null`), intentaría acceder a
  `casoActivo.cliente` y daría un error.

```jsx
                {casoActivo.resultados.map((resultado) => (
                  <li key={resultado}>{resultado}</li>
                ))}
```
Igual que en el acordeón: genera un `<li>` por cada resultado del caso activo.

---

## 7. TimelineProyectos.jsx

**Propósito:** línea temporal que muestra el proceso de 5 etapas de trabajo.

```jsx
import { timeline } from '../data/timeline.js';
```
Importa el array de etapas (importación nombrada).

```jsx
<ol className="ts-timeline list-unstyled">
```
- `<ol>` lista ordenada: semánticamente correcto porque las etapas tienen orden.
- `list-unstyled` (Bootstrap) quita los bullets/números por defecto del `<ol>`.
- El efecto visual de línea temporal se logra con CSS (`::before` en `global.css`).

```jsx
  {timeline.map((etapa, indice) => (
    <li
      key={etapa.id}
      className={`ts-timeline-item anim-aparece anim-delay-${indice + 1}`}
    >
      <span className="ts-timeline-dot" aria-hidden="true">
        {etapa.icono}
      </span>
      <span className="ts-timeline-paso">Etapa {indice + 1}</span>
      <h3 className="h5 mt-1 mb-2">{etapa.titulo}</h3>
      <p className="texto-muted mb-0">{etapa.descripcion}</p>
    </li>
  ))}
```
- Cada `<li>` es una etapa del proceso.
- `ts-timeline-dot` es el círculo en la línea temporal. Su posición relativa/absoluta se define en CSS.
- `h3 className="h5"` → elemento semánticamente un `<h3>` (jerarquía correcta de encabezados),
  pero con el tamaño visual de un `h5` (clase Bootstrap).

---

## 8. ContactoCTA.jsx

**Propósito:** sección de contacto con texto motivador y formulario validado.
Es el componente con el hook `useState` más desarrollado.

```jsx
const valoresIniciales = { nombre: '', email: '', mensaje: '' };
```
Un objeto con los valores vacíos del formulario. Se define fuera del componente para poder
reutilizarlo al limpiar el formulario tras el envío sin recrear el objeto en cada render.

```jsx
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```
Una **expresión regular** para validar el formato del email.
- `/` ... `/` delimita la regex.
- `^` = inicio del string.
- `[^\s@]+` = uno o más caracteres que NO sean espacio ni `@`.
- `@` = el símbolo arroba literal.
- `[^\s@]+` = uno o más caracteres (el dominio).
- `\.` = un punto literal (el `.` sin escapar en regex significa "cualquier carácter").
- `[^\s@]+` = la extensión del dominio (com, es, org…).
- `$` = fin del string.

```jsx
function validar(valores) {
  const errores = {};
  if (!valores.nombre.trim()) {
    errores.nombre = 'Por favor, indícanos tu nombre.';
  }
  // ...
  return errores;
}
```
Función pura (no usa hooks, no modifica estado) que recibe los valores del formulario y
devuelve un objeto con los mensajes de error. Si no hay errores, devuelve `{}` (objeto vacío).
- `.trim()` quita espacios al principio y al final para que " " (espacio) no cuente como nombre.
- `!valores.nombre.trim()` → si el resultado es un string vacío `""`, `!""` es `true` → hay error.

```jsx
const [valores, setValores] = useState(valoresIniciales);
```
Estado que guarda los valores actuales del formulario. Empieza con todos los campos vacíos.

```jsx
const [errores, setErrores] = useState({});
```
Estado para los mensajes de error. Empieza vacío (sin errores). Cuando la validación falla,
aquí se guardan los mensajes como `{ nombre: 'Por favor...', email: 'Necesitamos...' }`.

```jsx
const [enviado, setEnviado] = useState(false);
```
Estado booleano: `false` = el formulario aún no se ha enviado correctamente; `true` = se envió.
Cuando es `true`, se muestra el mensaje de confirmación.

```jsx
const manejarCambio = (evento) => {
  const { name, value } = evento.target;
  setValores((previo) => ({ ...previo, [name]: value }));
  if (errores[name]) {
    setErrores((previo) => ({ ...previo, [name]: undefined }));
  }
};
```
- `evento` es el evento del navegador (el usuario escribió en un input).
- `evento.target` es el input concreto que disparó el evento.
- `{ name, value }` = **destructuring**: extrae las propiedades `name` y `value` del input.
  `name` es el atributo `name="nombre"` del `<Form.Control>`.
- `setValores((previo) => ({ ...previo, [name]: value }))`:
  - Recibe `previo` (el estado anterior) para garantizar que usa el valor más actual.
  - `{ ...previo }` copia todas las propiedades del estado anterior (**spread operator**).
  - `[name]: value` sobrescribe solo la propiedad cuyo nombre coincide con `name`.
  - Si el usuario escribe en el campo `email`, esto actualiza `valores.email` sin tocar los otros campos.
- `if (errores[name])` → si ese campo tenía un error, lo borra al empezar a escribir.
  Así el error desaparece en tiempo real mientras el usuario corrige.

```jsx
const manejarEnvio = (evento) => {
  evento.preventDefault();
```
`evento.preventDefault()` cancela el comportamiento por defecto del formulario HTML (que
recargaria la página). Queremos manejar el envío con JavaScript, no con el navegador.

```jsx
  const nuevosErrores = validar(valores);
  setErrores(nuevosErrores);
  if (Object.keys(nuevosErrores).length === 0) {
    setEnviado(true);
    setValores(valoresIniciales);
  }
};
```
- `validar(valores)` corre la validación y devuelve el objeto de errores.
- `setErrores(nuevosErrores)` actualiza el estado de errores (esto hace que los mensajes
  rojos aparezcan en pantalla).
- `Object.keys(nuevosErrores)` devuelve un array con los nombres de las propiedades del objeto.
  Si está vacío (`.length === 0`), no hay errores → el formulario es válido.
- `setEnviado(true)` muestra el mensaje de confirmación.
- `setValores(valoresIniciales)` limpia el formulario.

```jsx
<Form noValidate onSubmit={manejarEnvio} className="ts-form">
```
- `noValidate` desactiva la validación HTML nativa del navegador (para usar la nuestra).
- `onSubmit={manejarEnvio}` llama a nuestra función cuando el usuario hace clic en "Enviar".

```jsx
<Form.Control
  type="text"
  name="nombre"
  value={valores.nombre}
  onChange={manejarCambio}
  placeholder="Tu nombre"
  isInvalid={!!errores.nombre}
/>
```
- `value={valores.nombre}` → **input controlado**: el valor del input es el del estado de React.
  Esto le da a React control total sobre lo que muestra el input.
- `onChange={manejarCambio}` → cada vez que el usuario escribe, llama a `manejarCambio`.
- `isInvalid={!!errores.nombre}` → si `errores.nombre` tiene un mensaje, `!!` lo convierte a
  `true` (booleano). Esto añade la clase y el borde rojo de Bootstrap.
  - `!errores.nombre` → si hay un string, `!string_no_vacío = false`.
  - `!!errores.nombre` → doble negación: devuelve `true` si hay un mensaje, `false` si no.

```jsx
<Form.Control.Feedback type="invalid">
  {errores.nombre}
</Form.Control.Feedback>
```
Muestra el mensaje de error bajo el input solo cuando `isInvalid` es `true`. React solo
renderiza el texto si `errores.nombre` tiene un valor.

```jsx
{enviado && (
  <Alert variant="success" dismissible onClose={() => setEnviado(false)}>
    ¡Gracias por escribirnos! ...
  </Alert>
)}
```
- `enviado && (...)` → renderizado condicional: solo muestra el Alert cuando `enviado` es `true`.
- `dismissible` añade el botón ×.
- `onClose={() => setEnviado(false)}` → vuelve a poner `enviado` en `false` cuando el usuario
  cierra el Alert.

---

## 9. Footer.jsx

**Propósito:** pie de página con marca, navegación y copyright.

```jsx
const anio = new Date().getFullYear();
```
`new Date()` crea un objeto de fecha con la fecha y hora actuales.
`.getFullYear()` extrae solo el año (p. ej. `2026`). Se pone dentro del componente para que
se calcule en el momento del render (aunque en la práctica no cambia entre renders).

```jsx
<footer className="ts-footer">
```
`<footer>` es semántico: indica el pie de página del documento.

```jsx
<nav aria-label="Enlaces del pie de página">
  <ul className="list-inline mb-0 text-md-end">
    {enlaces.map((enlace) => (
      <li className="list-inline-item ms-md-3 my-1" key={enlace.href}>
        <a href={enlace.href}>{enlace.texto}</a>
      </li>
    ))}
  </ul>
</nav>
```
- `aria-label` nombra la navegación para distinguirla del navbar principal (accesibilidad).
- `list-inline` (Bootstrap) pone los `<li>` en línea horizontal.
- `text-md-end` alinea el texto a la derecha solo en pantallas medianas o mayores.
- `ms-md-3` añade margen izquierdo entre los enlaces en pantallas medianas o mayores.

```jsx
<hr style={{ borderColor: 'var(--ts-border)' }} />
```
Línea horizontal divisoria. `var(--ts-border)` usa la variable CSS definida en `global.css`
(el color de los bordes del tema). Así si se cambia la variable, el `<hr>` se actualiza solo.

```jsx
<p className="text-center mb-0 small">
  © {anio} TechSolve · Consultoría de TI. Todos los derechos reservados.
</p>
```
`©` es la entidad HTML para el símbolo de copyright. `{anio}` inserta el año calculado arriba.

---

## Patrones clave que se repiten en todo el proyecto

### 1. Datos separados de la vista
```
src/data/servicios.js   → solo datos (arrays de objetos)
src/components/ServiciosAccordion.jsx → solo vista (JSX)
```
Si hay que cambiar el texto de un servicio, solo toca `servicios.js`.
El componente no sabe nada del contenido concreto.

### 2. Renderizado condicional con `&&`
```jsx
{condicion && <Elemento />}
// Si condicion es true → renderiza <Elemento />
// Si condicion es false → no renderiza nada
```

### 3. Estado para UI interactiva (`useState`)
```jsx
// Modal: qué caso mostrar
const [casoActivo, setCasoActivo] = useState(null);

// Formulario: valores actuales
const [valores, setValores] = useState({ nombre: '', email: '' });

// Formulario: errores de validación
const [errores, setErrores] = useState({});
```

### 4. Spread operator para actualizar estado de objetos
```jsx
// Actualiza solo "email", mantiene el resto
setValores((previo) => ({ ...previo, email: nuevoValor }));
```

### 5. Clases de Bootstrap + clases propias combinadas
```jsx
<Col lg={8} className="anim-aparece">
//      ↑ Bootstrap grid   ↑ animación propia
```

---

*Documento generado para el proyecto TechSolve. Todos los ejemplos hacen referencia
al código real en `src/`.*
