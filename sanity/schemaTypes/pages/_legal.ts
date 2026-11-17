// Campos que comparten las páginas legales (aviso de privacidad, cookies, términos y condiciones).
// Solo los usan los esquemas sanity/schemaTypes/pages/{aviso-de-privacidad,cookies,terminos-y-condiciones}.ts.
import { defineField, type FieldDefinition, type StringRule } from 'sanity'
import { enlace, lista, parrafo, texto, textoEnriquecido } from './_helpers'

/** Pestañas comunes de una página legal. */
export const gruposLegal = [
  { name: 'encabezado', title: 'Encabezado', default: true },
  { name: 'secciones', title: 'Secciones del documento' },
  { name: 'lateral', title: 'Barra lateral' },
]

/** Encabezado: título, línea de razón social / fecha y nota de traducción. */
export const encabezadoLegal = () => [
  texto('title', 'Título del documento', {
    group: 'encabezado',
    description: 'Aparece como título grande y como último paso de la ruta de navegación (Inicio › …).',
  }),
  texto('meta', 'Razón social y fecha de actualización', {
    group: 'encabezado',
    description: 'Línea debajo del título, p. ej. "Aerotransportes Rafilher, S.A. de C.V. · Última actualización: agosto 2025". Actualiza la fecha cuando cambies el documento.',
  }),
  parrafo('avisoTraduccion', 'Nota sobre la traducción', {
    group: 'encabezado',
    optional: true,
    description: 'Recuadro al inicio del documento. Normalmente solo se llena en inglés ("This English translation is provided for convenience only…"); en el idioma que quede vacío no aparece.',
  }),
]

/** Campo "ancla": identificador de la sección para el índice lateral. */
export const anclaField = () =>
  defineField({
    name: 'ancla',
    title: 'Ancla (identificador)',
    type: 'string',
    description: 'Identificador de la sección para el índice lateral y los enlaces directos (…/#ancla). Solo minúsculas, números y guiones, sin acentos. Si lo cambias, los enlaces que ya apuntan a esta sección dejan de funcionar.',
    validation: (rule: StringRule) =>
      rule.required().regex(/^[a-z0-9-]+$/, { name: 'minúsculas, números y guiones' }),
  })

/** Campos básicos de una sección legal (sirven también para el índice lateral). */
export const camposSeccionLegal = (): FieldDefinition[] => [
  texto('titulo', 'Título de la sección', { description: 'Título dentro del documento, p. ej. "1. Responsable del tratamiento de datos personales".' }),
  texto('indice', 'Texto en el índice lateral', { description: 'Versión corta del título que aparece en la tarjeta "Contenido" de la barra lateral.' }),
  anclaField(),
  textoEnriquecido('cuerpo', 'Texto de la sección', {
    description: 'Párrafos, subtítulos, listas, negritas y enlaces (correos con mailto:, páginas del sitio con su ruta en español, p. ej. /legal/cookies/).',
  }),
]

/** Lista de secciones del documento. */
export const seccionesLegal = (extra: FieldDefinition[] = []) =>
  lista('secciones', 'Secciones', 'seccionLegal', [...camposSeccionLegal(), ...extra], {
    group: 'secciones',
    itemTitle: 'titulo',
    description: 'Cada sección aparece en el documento y en el índice lateral, en este orden. Puedes agregar, quitar o reordenar.',
  })

/** Barra lateral: título del índice y enlaces a otros documentos legales. */
export const lateralLegal = () => [
  texto('tocTitle', 'Título del índice', { group: 'lateral', description: 'Encabezado de la tarjeta con el índice de secciones, p. ej. "Contenido".' }),
  texto('otherTitle', 'Otros documentos · título', { group: 'lateral' }),
  lista('otherDocs', 'Otros documentos · enlaces', 'docLegal', [
    texto('label', 'Texto del enlace'),
    enlace('href', 'Enlace'),
  ], { group: 'lateral', itemTitle: 'label' }),
]
