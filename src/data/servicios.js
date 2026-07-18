// Servicios que ofrece TechSolve. Se renderizan en el acordeón de la sección "Servicios"
// y también alimentan el selector "servicioId" del formulario de Solicitudes (CRUD).
export const servicios = [
  {
    id: 'desarrollo-web',
    icono: 'code',
    titulo: 'Desarrollo Web Empresarial',
    descripcion:
      'Diseñamos y construimos aplicaciones y portales web a medida para empresas, con foco en rendimiento, escalabilidad y una experiencia de usuario impecable. Trabajamos con arquitecturas modernas que crecen junto a tu negocio.',
    beneficios: [
      'Aplicaciones rápidas y optimizadas para SEO',
      'Diseño responsive y accesible en todos los dispositivos',
      'Integración con tus sistemas y APIs internas',
      'Mantenimiento y soporte continuo',
    ],
  },
  {
    id: 'ciberseguridad',
    icono: 'shield',
    titulo: 'Ciberseguridad',
    descripcion:
      'Protegemos tu infraestructura y tus datos frente a amenazas digitales. Realizamos auditorías, pruebas de penetración y planes de respuesta para que tu empresa opere con tranquilidad y cumpla la normativa vigente.',
    beneficios: [
      'Auditorías de seguridad y análisis de vulnerabilidades',
      'Pruebas de penetración (pentesting) controladas',
      'Planes de respuesta ante incidentes',
      'Cumplimiento normativo (ISO 27001, GDPR)',
    ],
  },
  {
    id: 'cloud',
    icono: 'cloud',
    titulo: 'Infraestructura Cloud',
    descripcion:
      'Migramos, desplegamos y optimizamos tu infraestructura en la nube con prácticas de DevOps. Reducimos costes, mejoramos la disponibilidad y automatizamos despliegues para que tu equipo entregue más rápido.',
    beneficios: [
      'Migración a AWS, Azure o Google Cloud',
      'Automatización con CI/CD e infraestructura como código',
      'Alta disponibilidad y recuperación ante desastres',
      'Optimización de costes y monitoreo continuo',
    ],
  },
  {
    id: 'datos',
    icono: 'bar-chart',
    titulo: 'Consultoría de Datos',
    descripcion:
      'Transformamos tus datos en decisiones. Diseñamos pipelines, paneles de Business Intelligence y modelos analíticos que revelan oportunidades de negocio y mejoran la eficiencia operativa.',
    beneficios: [
      'Paneles de Business Intelligence en tiempo real',
      'Integración y limpieza de fuentes de datos',
      'Modelos predictivos y analítica avanzada',
      'Gobierno y calidad del dato',
    ],
  },
];
