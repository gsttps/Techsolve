<div align="center">

# 🚀 TechSolve — Guía para Entender el Proyecto

### Documento de apoyo para la presentación

**Sitio web corporativo B2B · Consultoría de TI**

`React 19` · `Vite 8` · `Bootstrap 5` · `CSS3` · `JavaScript (ESM)`

</div>

---

> 🎯 **Objetivo de este documento:** que entiendas **qué es, qué hace y cómo se conecta**
> cada parte del código, con lenguaje sencillo y ejemplos que enlazan lo que se ve en la web con
> el archivo que lo genera. Pensado para exponerlo con seguridad.

---

## 📑 Índice

1. [🧭 ¿Qué es TechSolve? (resumen)](#-1-qué-es-techsolve)
2. [🛠️ Stack tecnológico](#️-2-stack-tecnológico)
3. [🗺️ Mapa visual: lo que ves ↔ el código](#️-3-mapa-visual-lo-que-ves--el-código)
4. [📁 Estructura de archivos](#-4-estructura-de-archivos)
5. [🔗 Cómo se conecta todo (el flujo)](#-5-cómo-se-conecta-todo-el-flujo)
6. [🧩 Módulo por módulo](#-6-módulo-por-módulo)
7. [🎓 Conceptos de React en fácil](#-7-conceptos-de-react-en-fácil)
8. [✅ Cumplimiento de la rúbrica](#-8-cumplimiento-de-la-rúbrica)

---

## 🧭 1. ¿Qué es TechSolve?

**TechSolve** es la página web (una *landing page*) de una empresa ficticia de **consultoría
tecnológica** dirigida a otras empresas (modelo **B2B** = *Business to Business*).

Es una web de **una sola página** (*one-page*) con **tema oscuro** y estilo profesional. El
usuario baja con el scroll y va pasando por las distintas secciones: presentación, servicios,
casos de éxito, proceso de trabajo y contacto.

> 💡 **Idea clave para exponer:** no es una web con muchas páginas. Es **una sola página** dividida
> en **secciones**, y el menú de arriba solo hace *scroll* hasta cada sección.

---

## 🛠️ 2. Stack tecnológico

Estas son las herramientas que usamos y **para qué sirve cada una** en el proyecto:

| Tecnología | ¿Qué es? | ¿Para qué la usamos aquí? |
|---|---|---|
| ⚛️ **React 19** | Librería para construir interfaces por "piezas" (componentes) | Toda la interfaz está hecha de componentes reutilizables |
| ⚡ **Vite 8** | Herramienta que arranca el proyecto y lo empaqueta | Servidor de desarrollo rápido + `build` para producción |
| 🅱️ **Bootstrap 5** | Kit de estilos y componentes ya hechos | Rejilla responsive, Navbar, Acordeón, Modal, Tarjetas |
| 🧩 **react-bootstrap** | Bootstrap adaptado a React (como componentes) | Usar `<Navbar>`, `<Accordion>`, `<Modal>`… en vez de HTML suelto |
| 🎨 **CSS3 puro** | Hojas de estilo propias | Paleta, fondo en degradado, animaciones personalizadas |
| 📜 **JavaScript (ESM)** | El lenguaje, con módulos `import`/`export` | Lógica de la app. **Sin TypeScript** |

> 📌 **Frase para exponer:** *"Bootstrap me da la base responsive y los componentes; el CSS
> propio le da la identidad visual (el tema oscuro azul); y React organiza todo en piezas."*

---

## 🗺️ 3. Mapa visual: lo que ves ↔ el código

Así se ve la página **de arriba a abajo**, y qué archivo genera cada zona:

```text
┌─────────────────────────────────────────────┐
│  [Logo TechSolve]      Inicio Servicios ...  │ ← NAVBAR  (NavbarCorporativo.jsx)
├─────────────────────────────────────────────┤
│  Título grande + botones + estadísticas      │ ← HERO    (HeroSection.jsx)
│                              [Panel flotante] │
├─────────────────────────────────────────────┤
│  SERVICIOS  ▸ Desarrollo Web                 │ ← ACORDEÓN (ServiciosAccordion.jsx)
│             ▸ Ciberseguridad ...             │
├─────────────────────────────────────────────┤
│  CASOS DE ÉXITO   [tarjeta][tarjeta][tarjeta]│ ← TARJETAS + MODAL (CasosEstudioModal.jsx)
├─────────────────────────────────────────────┤
│  PROCESO   ●─ Análisis ─ Planificación ...   │ ← TIMELINE (TimelineProyectos.jsx)
├─────────────────────────────────────────────┤
│  CONTACTO   Datos + [Formulario]             │ ← CTA + FORM (ContactoCTA.jsx)
├─────────────────────────────────────────────┤
│  Logo · enlaces · © 2026                     │ ← FOOTER  (Footer.jsx)
└─────────────────────────────────────────────┘
```

### Tabla: cada zona explicada en fácil

| 👁️ Lo que ve el usuario | 🧩 Componente | 📝 Qué hace (en simple) |
|---|---|---|
| **Navbar** (barra de arriba fija) | `NavbarCorporativo.jsx` | Menú de navegación. Se queda fijo arriba y al bajar se pone opaco. En móvil se convierte en hamburguesa 🍔 |
| **Hero** (la portada, lo primero que ves) | `HeroSection.jsx` | El "cartel" de bienvenida: título llamativo, botones de acción y métricas (+120 proyectos…) |
| **Servicios** (lista desplegable) | `ServiciosAccordion.jsx` | 4 servicios en un **acordeón**: haces clic y se despliega la descripción |
| **Casos de éxito** (3 tarjetas) | `CasosEstudioModal.jsx` | Tarjetas de clientes; al pulsar "Ver Caso" se abre una **ventana emergente (modal)** con el detalle |
| **Proceso** (línea de tiempo) | `TimelineProyectos.jsx` | Las 5 etapas de trabajo (Análisis → Soporte) en una **línea temporal** vertical |
| **Contacto** (formulario) | `ContactoCTA.jsx` | Datos de contacto + **formulario con validación** (avisa si el email está mal) |
| **Footer** (pie de página) | `Footer.jsx` | Logo, enlaces repetidos y el año del copyright |

> 🧠 **"Hero" y "Navbar" son nombres estándar en diseño web:**
> - **Navbar** = *navigation bar* = la barra de navegación de arriba.
> - **Hero** = la sección grande de portada, lo primero que impacta al entrar (como la portada de una revista).

---

## 📁 4. Estructura de archivos

```text
techsolve/
├── index.html              ← El HTML base. Carga las fuentes y arranca React
├── package.json            ← Lista de dependencias y comandos (dev, build, lint)
│
└── src/                    ← TODO el código de la app vive aquí
    ├── main.jsx            ← 🚪 Puerta de entrada: conecta React con el HTML
    ├── App.jsx             ← 🏗️ El "ensamblador": junta todas las secciones
    │
    ├── components/         ← 🧩 Las piezas visuales (componentes)
    │   ├── NavbarCorporativo.jsx
    │   ├── HeroSection.jsx
    │   ├── ServiciosAccordion.jsx
    │   ├── CasosEstudioModal.jsx
    │   ├── TimelineProyectos.jsx
    │   ├── ContactoCTA.jsx
    │   ├── Footer.jsx
    │   ├── Icon.jsx          ← Iconos SVG reutilizables
    │   └── SeccionCabecera.jsx ← Título de sección reutilizable
    │
    ├── data/              ← 📦 El "contenido" (textos) separado del diseño
    │   ├── servicios.js
    │   ├── casosEstudio.js
    │   └── timeline.js
    │
    ├── hooks/             ← ⚙️ Lógica reutilizable
    │   └── useScrollReveal.js  ← Anima las secciones al hacer scroll
    │
    └── styles/            ← 🎨 Los estilos
        ├── global.css       ← Colores, layout, tema oscuro
        └── animaciones.css  ← Las animaciones
```

> 🗂️ **Idea de organización clave:** el **contenido** (`data/`), el **diseño** (`styles/`) y la
> **estructura** (`components/`) están **separados**. Para cambiar el texto de un servicio solo
> tocas `data/servicios.js`, sin tocar el diseño.

---

## 🔗 5. Cómo se conecta todo (el flujo)

Cuando alguien abre la web, esto ocurre en orden:

```text
  🌐 index.html
       │  (tiene un <div id="root"> vacío y llama a main.jsx)
       ▼
  🚪 main.jsx
       │  (carga Bootstrap + estilos y "monta" React dentro del div root)
       ▼
  🏗️ App.jsx
       │  (dibuja todas las secciones en orden y activa la animación de scroll)
       ▼
  🧩 Componentes  ← Navbar, Hero, Servicios, Casos, Timeline, Contacto, Footer
       ▲   ▲
       │   └──── 🎨 styles/  (global.css + animaciones.css dan el aspecto a TODO)
       │
       └──────── 📦 data/    (servicios.js, casosEstudio.js, timeline.js dan los TEXTOS)
```

**En una frase:** `index.html` arranca `main.jsx`, que monta `App.jsx`, que coloca los
**componentes**; los componentes **leen los textos** de `data/` y **toman el aspecto** de
`styles/`.

### Ejemplo concreto del flujo (servicios) 🔍

```text
data/servicios.js  ──▶  ServiciosAccordion.jsx  ──▶  Acordeón que ves en pantalla
   (los 4 textos)        (recorre la lista y            (con estilo de global.css)
                          dibuja un panel por cada uno)
```

El componente **no tiene los textos escritos dentro**: los **lee** del archivo de datos y los
**repite automáticamente** con `.map()` (ver concepto en la sección 7).

---

## 🧩 6. Módulo por módulo

Para cada archivo: **¿Qué es?** · **¿Qué función cumple?** · **conceptos que usa** · mini-ejemplo.

### 🚪 6.1 · `main.jsx` — La puerta de entrada

- **¿Qué es?** El primer archivo JavaScript que se ejecuta.
- **¿Qué función cumple?** "Enciende" React: carga los estilos globales y dibuja `<App />`
  dentro del `<div id="root">` del HTML.
- **Analogía:** es el **interruptor de la luz** de toda la casa. No decora nada, solo enciende.

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'  // 1º los estilos de Bootstrap
import './styles/global.css'                    // 2º nuestros estilos (pueden ganar a Bootstrap)
import './styles/animaciones.css'               // 3º las animaciones
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)  // ← monta la app
```

---

### 🏗️ 6.2 · `App.jsx` — El ensamblador

- **¿Qué es?** El componente principal que **junta todas las secciones**.
- **¿Qué función cumple?** Define el **orden** en que aparecen las secciones y activa la
  animación de aparición al hacer scroll.
- **Analogía:** es el **plano de la casa**: dice qué habitación va después de cuál.

```jsx
function App() {
  useScrollReveal();          // ← activa las animaciones de scroll
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

> 👀 Aquí se ve clarísimo el **orden de la web**. Es la mejor diapositiva para explicar la
> estructura general.

---

### 📦 6.3 · `data/` — El contenido (textos)

- **¿Qué es?** Tres archivos con **listas de datos** (los textos de la web).
- **¿Qué función cumple?** Guardar el contenido **separado** del diseño, para editarlo fácil.
- **Analogía:** es el **guion** de una obra; los actores (componentes) lo leen y lo interpretan.

```javascript
// data/servicios.js — cada servicio es un objeto dentro de una lista
export const servicios = [
  {
    id: 'ciberseguridad',
    icono: 'shield',                       // ← nombre del icono (lo dibuja Icon.jsx)
    titulo: 'Ciberseguridad',
    descripcion: 'Protegemos tu infraestructura...',
    beneficios: ['Auditorías', 'Pentesting', 'Cumplimiento'],
  },
  // ... más servicios
];
```

Los tres archivos: `servicios.js` (4 servicios), `casosEstudio.js` (3 casos), `timeline.js`
(5 etapas).

---

### 🧭 6.4 · `NavbarCorporativo.jsx` — La barra de navegación

- **¿Qué es?** La barra fija de arriba con el logo y el menú.
- **¿Qué función cumple?**
  - Enlaces que hacen **scroll suave** a cada sección.
  - Menú **hamburguesa** 🍔 en móvil.
  - Se vuelve **opaca con desenfoque** al bajar (efecto `is-scrolled`).
- **Conceptos:** `useState` (¿hay scroll?), `useEffect` (escuchar el scroll), `.map()` (los enlaces).

```jsx
const [desplazado, setDesplazado] = useState(false);   // ¿el usuario bajó?

useEffect(() => {
  const alScroll = () => setDesplazado(window.scrollY > 24);
  window.addEventListener('scroll', alScroll);         // escucha el scroll
  return () => window.removeEventListener('scroll', alScroll);
}, []);
```

> 🗣️ **Para exponer:** *"La navbar cambia de aspecto cuando bajas: eso lo controla un estado
> (`desplazado`) que se activa al detectar scroll."*

---

### ✨ 6.5 · `HeroSection.jsx` — La portada

- **¿Qué es?** La primera sección: título grande, subtítulo, botones y métricas.
- **¿Qué función cumple?** **Captar la atención** en los primeros 3 segundos y animar con
  botones de acción (CTA = *Call To Action*).
- **Conceptos:** animación de entrada al cargar, `.map()` para las métricas.

```jsx
<h1 className="hero-titulo">
  Transformamos tu empresa con{' '}
  <span className="texto-gradiente">tecnología que impulsa resultados</span>
</h1>
```

> 🎨 El `<span className="texto-gradiente">` es lo que pinta una parte del título con el
> **degradado azul→cian**.

---

### 🛎️ 6.6 · `ServiciosAccordion.jsx` — Los servicios

- **¿Qué es?** La sección de servicios en formato **acordeón** (paneles que se despliegan).
- **¿Qué función cumple?** Mostrar 4 servicios sin ocupar mucho espacio: el usuario abre el que
  le interesa.
- **Conceptos:** `.map()` (recorre `data/servicios.js`), componente `<Accordion>` de Bootstrap.

```jsx
{servicios.map((servicio, indice) => (
  <Accordion.Item eventKey={String(indice)} key={servicio.id}>
    <Accordion.Header>{servicio.titulo}</Accordion.Header>
    <Accordion.Body>{servicio.descripcion}</Accordion.Body>
  </Accordion.Item>
))}
```

> 🔑 **Punto fuerte para exponer:** *"No escribí los 4 servicios a mano. Recorro la lista de
> datos con `.map()` y genero un panel por cada uno. Si añado un 5º servicio al archivo de datos,
> aparece solo."*

---

### 💼 6.7 · `CasosEstudioModal.jsx` — Casos de éxito (con ventana emergente)

- **¿Qué es?** 3 tarjetas de clientes; al pulsar "Ver Caso" se abre un **modal** (ventana
  emergente) con el detalle.
- **¿Qué función cumple?** Dar credibilidad mostrando resultados reales, sin saturar la vista
  (el detalle está "escondido" en el modal).
- **Conceptos:** ⭐ `useState` (el corazón de este componente).

```jsx
const [casoActivo, setCasoActivo] = useState(null);   // null = modal cerrado

// Al pulsar una tarjeta guardamos ESE caso → el modal se abre
<button onClick={() => setCasoActivo(caso)}>Ver Caso</button>

// El modal se muestra solo si hay un caso activo
<Modal show={casoActivo !== null} onHide={() => setCasoActivo(null)}>
```

> 🧠 **Truco elegante que puedes destacar:** *"Uso una sola variable de estado. Si vale `null`,
> el modal está cerrado; si guarda un caso, se abre y muestra ese caso. Dos cosas con una."*

---

### 🕒 6.8 · `TimelineProyectos.jsx` — El proceso de trabajo

- **¿Qué es?** Una **línea de tiempo** vertical con las 5 etapas del trabajo.
- **¿Qué función cumple?** Explicar visualmente *cómo trabaja* la empresa: Análisis →
  Planificación → Desarrollo → Implementación → Soporte.
- **Conceptos:** `.map()` sobre `data/timeline.js`, lista ordenada `<ol>` (semántica correcta).

```jsx
{timeline.map((etapa, indice) => (
  <li key={etapa.id}>
    <span className="ts-timeline-dot"><Icon name={etapa.icono} /></span>
    <h3>Etapa {indice + 1}: {etapa.titulo}</h3>
  </li>
))}
```

---

### 📩 6.9 · `ContactoCTA.jsx` — Contacto con formulario validado

- **¿Qué es?** La sección final: texto motivador, datos (correo/teléfono) y un **formulario**.
- **¿Qué función cumple?** Convertir al visitante en cliente. El formulario **valida** los datos:
  avisa si falta el nombre o el email está mal escrito.
- **Conceptos:** ⭐ `useState` (3 estados), validación con expresión regular, *inputs controlados*.

```jsx
const [valores, setValores]  = useState({ nombre:'', email:'', mensaje:'' }); // lo escrito
const [errores, setErrores]  = useState({});     // los mensajes de error
const [enviado, setEnviado]  = useState(false);  // ¿se envió con éxito?

// Al enviar: validamos; si hay errores los mostramos, si no, confirmamos
const manejarEnvio = (e) => {
  e.preventDefault();
  const errs = validar(valores);
  setErrores(errs);
  if (Object.keys(errs).length === 0) setEnviado(true);
};
```

> 🗣️ **Para exponer:** *"El formulario no recarga la página ni envía a un servidor: valida en el
> navegador y muestra un mensaje de éxito. Es una demo funcional del front-end."*

---

### 🦶 6.10 · `Footer.jsx` — El pie de página

- **¿Qué es?** La franja final con logo, enlaces y copyright.
- **¿Qué función cumple?** Cierre profesional y navegación secundaria. El año se calcula solo.
- **Conceptos:** `new Date().getFullYear()` (año actual automático), `.map()` (enlaces).

```jsx
const anio = new Date().getFullYear();   // siempre el año actual
// ...
© {anio} TechSolve · Consultoría de TI.
```

---

### 🧰 6.11 · Componentes reutilizables (Icon y SeccionCabecera)

Estos dos **no son secciones**: son piezas pequeñas que se usan en muchos sitios (evitan repetir).

**`Icon.jsx`** — Un único componente que dibuja **iconos SVG**. Se elige con una prop `name`:

```jsx
<Icon name="shield" size={20} />   // dibuja el escudo 🛡️
<Icon name="rocket" size={18} />   // dibuja el cohete 🚀
```
> 💡 **Dato para presumir:** *"En vez de emojis usé iconos SVG vectoriales (nítidos a cualquier
> tamaño) centralizados en un solo componente. Se recolorean solos con el color del texto."*

**`SeccionCabecera.jsx`** — El título que se repite en Servicios, Casos y Timeline
(etiqueta + título + subtítulo). Se escribe una vez y se reutiliza:

```jsx
<SeccionCabecera eyebrow="Lo que hacemos" titulo="Servicios..." subtitulo="..." />
```

---

### ⚙️ 6.12 · `hooks/useScrollReveal.js` — Animar al hacer scroll

- **¿Qué es?** Un **hook personalizado** (lógica reutilizable). No dibuja nada.
- **¿Qué función cumple?** Hacer que las secciones **aparezcan suavemente** cuando entran en
  pantalla al hacer scroll (efecto profesional).
- **Concepto clave:** `IntersectionObserver`, una herramienta del navegador que **avisa cuando un
  elemento se vuelve visible**.

```javascript
// Cuando un elemento con clase .reveal entra en pantalla, le añade .is-visible
// y el CSS hace la animación de aparición.
if (entrada.isIntersecting) {
  entrada.target.classList.add('is-visible');
}
```

> 🗣️ **Para exponer:** *"Las secciones no aparecen todas de golpe: se animan a medida que bajas.
> Eso lo hace un hook que detecta cuándo cada sección entra en pantalla."*

---

### 🎨 6.13 · `styles/` — Los estilos

**`global.css`** — Define el aspecto de TODO. Está **comentado por secciones** con un índice.
Lo más importante son las **variables de color** (arriba del archivo):

```css
:root {
  --ts-primary: #3b82f6;   /* azul corporativo */
  --ts-accent:  #22d3ee;   /* cian de acento   */
  --ts-bg-1:    #05070e;   /* fondo oscuro     */
}
```
> 🎨 **Dato:** cambiando esas 3 variables cambia el tema de toda la web. También aquí está el
> **fondo en degradado** y una **rejilla sutil** que dan el aire "tecnológico".

**`animaciones.css`** — Las animaciones: aparición del hero, revelado al hacer scroll (`.reveal`),
flotación del panel y el latido de los puntos del timeline.

```css
.reveal { opacity: 0; transform: translateY(30px); transition: .7s; }
.reveal.is-visible { opacity: 1; transform: none; }   /* ← estado final visible */
```

---

## 🎓 7. Conceptos de React en fácil

Un mini-glosario para responder con seguridad. Cada concepto con una **analogía**.

| Concepto | En una frase | Analogía |
|---|---|---|
| **Componente** | Una pieza de interfaz reutilizable que devuelve HTML | Un **ladrillo LEGO** 🧱 |
| **JSX** | Escribir HTML dentro de JavaScript | Un **idioma mixto** entre HTML y JS |
| **Prop** | Un dato que le pasas a un componente | Los **ingredientes** que le das a una receta |
| **Estado (`useState`)** | Un dato que, al cambiar, redibuja la pantalla | La **memoria** del componente 🧠 |
| **Hook** | Función especial de React (empieza por `use`) | Un **superpoder** que enchufas al componente |
| **`.map()`** | Repetir un bloque por cada elemento de una lista | Una **fotocopiadora** 🖨️ |
| **Renderizado condicional (`&&`)** | Mostrar algo solo si se cumple una condición | Un **interruptor** 💡 |

### 🧠 El más importante: el **estado** (`useState`)

```jsx
const [casoActivo, setCasoActivo] = useState(null);
//     ↑ valor actual  ↑ función para cambiarlo   ↑ valor inicial
```

**Regla de oro:** cuando llamas a la función de cambio (`setCasoActivo`), React **vuelve a
dibujar** el componente con el nuevo valor. Así, al pulsar una tarjeta, el modal aparece "solo".

> 🗣️ Si te preguntan *"¿qué es el estado?"* responde: *"Es la memoria de un componente. Cuando
> cambia, la pantalla se actualiza automáticamente para reflejarlo."*

### 🖨️ El más visual: `.map()`

```jsx
servicios.map((servicio) => <Panel titulo={servicio.titulo} />)
//  Lista de datos          →  Un <Panel> por cada dato
```

*"Recorro la lista y por cada elemento genero un trozo de interfaz. Por eso los servicios, casos
y etapas no están escritos a mano: se generan a partir de los datos."*

---

## ✅ 8. Cumplimiento de la rúbrica

| Requisito pedido | ✔️ | Dónde está en el código |
|---|---|---|
| Navbar responsive con hamburguesa y scroll suave | ✅ | `NavbarCorporativo.jsx` + `scroll-behavior` en CSS |
| Acordeón de servicios (mín. 4) | ✅ | `ServiciosAccordion.jsx` + `data/servicios.js` |
| Casos de estudio en **modal** (mín. 3) | ✅ | `CasosEstudioModal.jsx` + `data/casosEstudio.js` |
| Timeline de 5 etapas, responsive | ✅ | `TimelineProyectos.jsx` + `data/timeline.js` |
| Animaciones CSS propias | ✅ | `animaciones.css` + `useScrollReveal.js` |
| CTA de contacto con datos + formulario | ✅ | `ContactoCTA.jsx` (con validación) |
| Diseño responsive (desktop/tablet/móvil) | ✅ | Rejilla de Bootstrap (`Row`/`Col`) |
| HTML semántico y accesibilidad | ✅ | `<main>`, `<section>`, `<nav>`, `<footer>`, `aria-*` |
| Solo componentes funcionales + hooks | ✅ | Todos los componentes; `useState`, `useEffect` |
| Sin TypeScript, sin warnings, lint limpio | ✅ | JSX/ESM; `npm run lint` sin errores |

---

<div align="center">

### 🎤 Resumen en 3 frases para tu presentación

**1.** TechSolve es una *landing* de una página dividida en secciones (Hero, Servicios, Casos,
Proceso, Contacto), cada una hecha con un **componente** de React.

**2.** El **contenido** (`data/`), el **diseño** (`styles/`) y la **estructura** (`components/`)
están separados; los componentes leen los datos y los repiten con `.map()`.

**3.** La **interactividad** (modal de casos, formulario validado, navbar al scroll, animaciones)
se maneja con **estado** (`useState`) y **hooks** (`useEffect`, `useScrollReveal`).

---

*Documento de apoyo · TechSolve · Consultoría de TI*

</div>
