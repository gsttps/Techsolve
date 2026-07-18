// Casos de éxito mostrados como tarjetas; el detalle se abre en un modal.
export const casosEstudio = [
  {
    id: 'fintech-nova',
    cliente: 'Nova Pagos',
    sector: 'Fintech',
    resumen:
      'Plataforma de pagos que necesitaba escalar para soportar picos de transacciones sin caídas.',
    problema:
      'Su sistema monolítico colapsaba durante los picos de fin de mes, generando errores de pago y pérdida de clientes. Los despliegues eran manuales y tardaban horas.',
    solucion:
      'Rediseñamos la plataforma con una arquitectura de microservicios en la nube, implementamos autoescalado y un pipeline de CI/CD automatizado con pruebas en cada despliegue.',
    resultados: [
      'Disponibilidad del 99,98% durante los picos de demanda',
      'Tiempo de despliegue reducido de 4 horas a 12 minutos',
      'Capacidad para procesar 5× más transacciones por segundo',
    ],
  },
  {
    id: 'retail-aurora',
    cliente: 'Aurora Retail',
    sector: 'Comercio',
    resumen:
      'Cadena de tiendas que buscaba unificar sus datos de ventas para tomar mejores decisiones.',
    problema:
      'La información de ventas estaba dispersa en hojas de cálculo y sistemas aislados por tienda, lo que impedía tener una visión global y oportuna del negocio.',
    solucion:
      'Construimos un data warehouse centralizado y paneles de Business Intelligence en tiempo real, integrando las fuentes de cada tienda con procesos automáticos de limpieza de datos.',
    resultados: [
      'Visibilidad unificada de las ventas de las 42 tiendas',
      'Reducción del 30% en quiebres de stock',
      'Informes que antes tomaban días, ahora en minutos',
    ],
  },
  {
    id: 'salud-vitalis',
    cliente: 'Vitalis Salud',
    sector: 'Salud',
    resumen:
      'Proveedor de salud que requería reforzar la seguridad de los datos de sus pacientes.',
    problema:
      'Tras un intento de intrusión, la organización necesitaba auditar su infraestructura y cumplir con normativas estrictas de protección de datos sensibles.',
    solucion:
      'Realizamos una auditoría completa de seguridad y pruebas de penetración, cerramos vulnerabilidades críticas e implementamos cifrado, control de accesos y un plan de respuesta ante incidentes.',
    resultados: [
      'Cierre del 100% de las vulnerabilidades críticas detectadas',
      'Certificación de cumplimiento ISO 27001',
      'Plan de respuesta ante incidentes operativo y probado',
    ],
  },
];
