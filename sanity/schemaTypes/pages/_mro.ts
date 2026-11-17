// Campos que se repiten en las páginas de MRO (encabezado, listas de servicios, barra lateral).
// Solo los usan los esquemas sanity/schemaTypes/pages/mro*.ts.
import { enlace, lista, parrafo, texto } from './_helpers'

/** Grupos de pestañas comunes de una página de servicio MRO. */
export const gruposMro = (...secciones: { name: string; title: string }[]) => [
  { name: 'encabezado', title: 'Encabezado', default: true },
  ...secciones,
  { name: 'lateral', title: 'Barra lateral' },
]

/** Encabezado azul: breadcrumb, antetítulo, título en dos partes e introducción. */
export const encabezadoMro = (o: { crumb?: boolean } = {}) => [
  ...(o.crumb === false
    ? []
    : [texto('crumb', 'Nombre en el breadcrumb', { group: 'encabezado', description: 'Último paso de la ruta de navegación (Inicio › MRO › …).' })]),
  texto('eyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde sobre el título, p. ej. "Aerus MRO".' }),
  texto('titlePre', 'Título (parte normal)', { group: 'encabezado', description: 'Incluye el espacio final si lo lleva, p. ej. "Motores ".' }),
  texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
  parrafo('intro', 'Introducción', { group: 'encabezado' }),
]

/** Lista de elementos con título y descripción (servicios, sistemas, alcance…). */
export const listaTituloDesc = (name: string, title: string, itemName: string, group: string) =>
  lista(name, title, itemName, [
    texto('titulo', 'Título'),
    parrafo('descripcion', 'Descripción'),
  ], { group, itemTitle: 'titulo' })

/** Lista de enlaces a otras páginas de MRO (tarjeta de la barra lateral). */
export const listaEnlacesMro = (name: string, title: string, group = 'lateral') =>
  lista(name, title, 'enlaceMro', [
    texto('label', 'Texto del enlace'),
    enlace('href', 'Enlace'),
  ], { group, itemTitle: 'label', description: 'Enlaces que aparecen en la barra lateral. Puedes agregar, quitar o reordenar.' })

/** Tarjeta verde de la barra lateral con botón a cotización. */
export const ctaMro = () => [
  texto('ctaTitle', 'Tarjeta de cotización · título', { group: 'lateral' }),
  parrafo('ctaDesc', 'Tarjeta de cotización · texto', { group: 'lateral' }),
  texto('ctaButton', 'Tarjeta de cotización · texto del botón', { group: 'lateral' }),
  enlace('ctaHref', 'Tarjeta de cotización · enlace del botón', { group: 'lateral' }),
]
