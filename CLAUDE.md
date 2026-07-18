# CLAUDE.md

## Proyecto

Desarrollar un sitio web corporativo B2B llamado **TechSolve - Consultoría de TI** utilizando las tecnologías más recientes disponibles.

El proyecto debe estar desarrollado con:

- React (última versión estable)
- Vite (última versión estable)
- HTML5 semántico
- CSS3 puro
- JavaScript moderno (ESModules)
- Bootstrap 5 (última versión estable)

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

- Logo "TechSolve"
- Inicio
- Servicios
- Casos de Éxito
- Proyectos
- Contacto

Características:

- Navbar fija en la parte superior.
- Menú hamburguesa en dispositivos móviles.
- Scroll suave hacia las secciones.

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

Mostrar tarjetas (cards) con proyectos realizados.

Cada tarjeta debe tener:

- Nombre del cliente ficticio
- Breve descripción
- Botón "Ver Caso"

Al presionar el botón debe abrirse un Modal de Bootstrap mostrando:

- Problema del cliente
- Solución implementada
- Resultados obtenidos

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

---

### 5. Animaciones CSS

Incorporar animaciones CSS propias.

Agregar animaciones en:

- Aparición del Hero.
- Hover de tarjetas.
- Botones.
- Timeline.
- Secciones al cargar.

Las animaciones deben ser suaves y profesionales.

No abusar de las animaciones.

---

### 6. CTA de contacto

Crear una sección final de llamada a la acción.

Debe incluir:

- Título atractivo.
- Texto motivador.
- Botón de contacto.
- Información de correo y teléfono.

Opcional:

- Formulario simple de contacto.

---

## Estructura esperada

Utilizar componentes funcionales y hooks.

Estructura sugerida:

src/

components/
- Navbar.jsx
- Hero.jsx
- ServicesAccordion.jsx
- CaseStudies.jsx
- Timeline.jsx
- ContactCTA.jsx
- Footer.jsx

data/
- services.js
- caseStudies.js

styles/
- global.css
- animations.css

App.jsx

---

## Requisitos técnicos

### React

- Utilizar exclusivamente componentes funcionales.
- Utilizar hooks cuando sea necesario.
- Mantener estado correctamente organizado.
- Evitar código duplicado.

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
- Botones
- Layout responsive

Complementar Bootstrap con CSS personalizado.

---

## Responsividad

La aplicación debe funcionar correctamente en:

- Desktop
- Tablet
- Mobile

Todo el contenido debe adaptarse correctamente.

---

## Diseño

Paleta sugerida:

- Azul corporativo
- Blanco
- Gris claro
- Acentos tecnológicos

Diseño minimalista y profesional.

No usar estilos exagerados.

---

## Accesibilidad

- Utilizar etiquetas HTML semánticas.
- Incluir textos alternativos cuando corresponda.
- Mantener contraste adecuado.
- Utilizar encabezados jerárquicos.
- Texto humanizado.
---

## Entregables esperados

Claude debe:

1. Analizar la estructura actual del proyecto.
2. Generar la arquitectura necesaria.
3. Implementar cada componente.
4. Crear archivos CSS organizados.
5. Verificar que no existan errores.
6. Ejecutar lint antes de finalizar.
7. Generar un README claro explicando el proyecto.

Antes de escribir código, analizar la estructura completa y proponer un plan de implementación.