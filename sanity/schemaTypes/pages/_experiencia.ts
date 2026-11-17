// Campos que se repiten en las páginas de Experiencia (encabezado, barra lateral).
// Solo los usan los esquemas sanity/schemaTypes/pages/experiencia*.ts.
import { enlace, lista, parrafo, texto } from './_helpers'

/** Pestañas comunes de una página interna de Experiencia. */
export const gruposExperiencia = (...secciones: { name: string; title: string }[]) => [
  { name: 'encabezado', title: 'Encabezado', default: true },
  ...secciones,
  { name: 'lateral', title: 'Barra lateral' },
]

/** Encabezado azul: breadcrumb, antetítulo, título en dos partes e introducción. */
export const encabezadoExperiencia = () => [
  texto('crumb', 'Nombre en el breadcrumb', {
    group: 'encabezado',
    description: 'Último paso de la ruta de navegación (Inicio › Experiencia › …).',
  }),
  texto('heroEyebrow', 'Antetítulo', {
    group: 'encabezado',
    description: 'Texto pequeño en verde sobre el título, p. ej. "Experiencia Aerus".',
  }),
  texto('heroTitlePre', 'Título (parte normal)', {
    group: 'encabezado',
    description: 'Incluye el espacio final si lo lleva, p. ej. "Seguro de ".',
  }),
  texto('heroTitleAccent', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
  parrafo('heroIntro', 'Introducción', { group: 'encabezado' }),
]

/** Lista de enlaces a otras páginas (tarjeta de la barra lateral). */
export const listaRelacionados = (name: string, title: string, group = 'lateral') =>
  lista(name, title, 'enlaceRelacionado', [
    texto('label', 'Texto del enlace'),
    enlace('href', 'Enlace'),
  ], {
    group,
    itemTitle: 'label',
    description: 'Enlaces que aparecen en la tarjeta. Puedes agregar, quitar o reordenar.',
  })

/** Tarjeta verde de la barra lateral con un botón. */
export const ctaLateral = (nombre = 'Tarjeta verde') => [
  texto('ctaTitle', `${nombre} · título`, { group: 'lateral' }),
  parrafo('ctaDesc', `${nombre} · texto`, { group: 'lateral' }),
  texto('ctaButton', `${nombre} · texto del botón`, { group: 'lateral' }),
  enlace('ctaHref', `${nombre} · enlace del botón`, { group: 'lateral' }),
]
