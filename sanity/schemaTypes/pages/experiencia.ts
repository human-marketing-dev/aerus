import { dato, definePage, enlace, icono, lista, parrafo, texto } from './_helpers'

export const paginaExperiencia = definePage({
  name: 'paginaExperiencia',
  title: 'Experiencia Aerus',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'servicios', title: 'Servicios' },
    { name: 'procesos', title: 'Sin filas, sin esperas' },
    { name: 'adicionales', title: 'Servicios adicionales' },
  ],
  fields: [
    // Encabezado
    texto('heroEyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde sobre el título.' }),
    texto('heroTitlePre', 'Título · parte antes de la palabra resaltada', {
      group: 'encabezado',
      description: 'Incluye el espacio final, p. ej. "La experiencia ".',
    }),
    texto('heroTitleAccent', 'Título · palabra resaltada en verde', { group: 'encabezado' }),
    texto('heroTitlePost', 'Título · parte después de la palabra resaltada', {
      group: 'encabezado',
      optional: true,
      description: 'Opcional. En inglés: " experience" (con el espacio inicial). En español va vacío.',
    }),
    parrafo('heroIntro', 'Introducción', { group: 'encabezado' }),

    // Tarjetas de servicios
    lista('servicios', 'Tarjetas de servicios', 'servicio', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
      enlace('href', 'Enlace de la tarjeta'),
    ], { group: 'servicios', itemTitle: 'titulo', description: 'Tarjetas debajo del encabezado. Puedes agregar, quitar o reordenar.' }),
    texto('conocerMas', 'Texto del enlace de cada tarjeta', { group: 'servicios', description: 'P. ej. "Conocer más".' }),

    // Sin filas, sin esperas
    texto('procesosEyebrow', 'Antetítulo', { group: 'procesos' }),
    texto('procesosTitle', 'Título · parte normal', { group: 'procesos', description: 'Incluye el espacio final, p. ej. "Del carro a la pista ".' }),
    texto('procesosTitleEm', 'Título · parte en cursiva', { group: 'procesos' }),
    lista('pasos', 'Pasos', 'paso', [
      dato('num', 'Número', { description: 'P. ej. "01".' }),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'procesos', itemTitle: 'titulo' }),
    texto('procesosCta', 'Texto del botón', { group: 'procesos' }),
    enlace('procesosCtaHref', 'Enlace del botón', { group: 'procesos' }),

    // Servicios adicionales
    texto('adicionalesEyebrow', 'Antetítulo', { group: 'adicionales' }),
    texto('adicionalesTitle', 'Título', { group: 'adicionales' }),
    lista('serviciosAdicionales', 'Tarjetas de servicios adicionales', 'servicioAdicional', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
      enlace('href', 'Enlace de la tarjeta'),
    ], { group: 'adicionales', itemTitle: 'titulo' }),
    texto('saberMas', 'Texto del enlace de cada tarjeta', { group: 'adicionales', description: 'P. ej. "Saber más".' }),
  ],
})
