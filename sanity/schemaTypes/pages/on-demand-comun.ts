// Campos que se repiten en las páginas del grupo On Demand (solo para este grupo).
import { dato, enlace, lista, parrafo, texto } from './_helpers'

/** Grupos de pestañas comunes en las páginas internas de On Demand. */
export const GRUPOS = [
  { name: 'encabezado', title: 'Encabezado', default: true },
  { name: 'contenido', title: 'Contenido' },
  { name: 'lateral', title: 'Columna lateral' },
]

/** Breadcrumb, antetítulo, título en dos partes e introducción. */
export const camposEncabezado = (ejemploTitulo: string) => [
  texto('crumb', 'Nombre en el breadcrumb', {
    group: 'encabezado',
    description: 'Nombre de esta página en la ruta de navegación (arriba del título).',
  }),
  texto('eyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde arriba del título.' }),
  texto('titleA', 'Título (parte normal)', { group: 'encabezado', description: `Ej.: "${ejemploTitulo}". Deja un espacio al final.` }),
  texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
  parrafo('intro', 'Introducción', { group: 'encabezado' }),
]

/** Tarjeta de enlaces relacionados de la columna lateral. */
export const camposRelacionados = () => [
  texto('relacionadosTitulo', 'Enlaces relacionados · título', { group: 'lateral' }),
  lista('relacionados', 'Enlaces relacionados', 'enlaceRelacionado', [
    texto('label', 'Texto del enlace'),
    enlace('href', 'Enlace'),
  ], { group: 'lateral', itemTitle: 'label' }),
]

/** Correo de contacto. */
export const campoEmail = (o: { description?: string } = {}) =>
  dato('email', 'Correo de contacto', {
    group: 'lateral',
    description: o.description ?? 'Se muestra en la página y abre el correo del visitante al hacer clic.',
  })

/** Teléfono de contacto (el enlace para marcar se arma solo). */
export const campoTelefono = () =>
  dato('telefono', 'Teléfono de contacto', {
    group: 'lateral',
    description: 'Tal como se muestra, p. ej. +52 812 682 3501. El enlace para marcar se genera solo.',
  })

/** Horario de atención. */
export const campoHorario = () => texto('horario', 'Horario de atención', { group: 'lateral' })

/** Asunto del correo que se abre al hacer clic en el botón de correo. */
export const campoAsunto = () =>
  texto('mailSubject', 'Asunto del correo', {
    group: 'lateral',
    description: 'Asunto que aparece ya escrito cuando el visitante hace clic en el botón del correo.',
  })
