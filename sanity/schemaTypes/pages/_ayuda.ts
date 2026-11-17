// Campos que se repiten en las páginas del Centro de ayuda (encabezado, secciones informativas,
// enlaces relacionados). Solo los usan los esquemas sanity/schemaTypes/pages/ayuda*.ts.
import { dato, enlace, icono, lista, listaTextos, parrafo, texto } from './_helpers'

/** Grupos de pestañas de una página de ayuda: "Encabezado" y luego las secciones propias. */
export const gruposAyuda = (...secciones: { name: string; title: string }[]) => [
  { name: 'encabezado', title: 'Encabezado', default: true },
  ...secciones,
]

/** Encabezado azul: breadcrumb, antetítulo, título en dos partes e introducción. */
export const encabezadoAyuda = () => [
  texto('crumb', 'Nombre en el breadcrumb', {
    group: 'encabezado',
    description: 'Último paso de la ruta de navegación (Inicio › Ayuda › …).',
  }),
  texto('eyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde sobre el título.' }),
  texto('titleA', 'Título (parte normal)', { group: 'encabezado' }),
  texto('titleB', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
  parrafo('intro', 'Introducción', { group: 'encabezado' }),
]

/**
 * Secciones informativas (ícono + título + viñetas + nota opcional).
 * - `subtitulo`: muestra un texto pequeño sobre el título de cada sección.
 * - `ancla`: cada sección tiene un identificador para enlazarla (#…) desde el índice lateral.
 */
export const seccionesAyuda = (
  name: string,
  title: string,
  group: string,
  o: { subtitulo?: boolean; ancla?: boolean } = {},
) =>
  lista(name, title, 'seccionAyuda', [
    ...(o.ancla
      ? [dato('ancla', 'Identificador del enlace', {
          description: 'Va en la dirección de la página (…/#identificador). Solo minúsculas y guiones. ' +
            'Si lo cambias, revisa los enlaces que apuntan a esta sección desde otras páginas.',
        })]
      : []),
    icono('icono'),
    texto('titulo', 'Título'),
    ...(o.subtitulo ? [texto('subtitulo', 'Subtítulo', { description: 'Texto pequeño sobre el título.' })] : []),
    listaTextos('items', 'Puntos de la lista'),
    parrafo('nota', 'Nota destacada', { optional: true, description: 'Recuadro con bandera al final de la sección. Déjalo vacío si no lleva.' }),
  ], { group, itemTitle: 'titulo', description: 'Puedes agregar, quitar o reordenar secciones.' })

/** Lista de enlaces a otras páginas de ayuda (tarjeta de la barra lateral). */
export const enlacesAyuda = (name: string, title: string, group: string) =>
  lista(name, title, 'enlaceAyuda', [
    texto('label', 'Texto del enlace'),
    enlace('href', 'Enlace'),
  ], { group, itemTitle: 'label', description: 'Puedes agregar, quitar o reordenar enlaces.' })
