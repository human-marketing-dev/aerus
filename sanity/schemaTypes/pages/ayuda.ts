import { definePage, enlace, icono, lista, parrafo, texto } from './_helpers'

export const paginaAyuda = definePage({
  name: 'paginaAyuda',
  title: 'Centro de ayuda',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'categorias', title: 'Categorías' },
    { name: 'contacto', title: 'Franja de contacto' },
  ],
  fields: [
    texto('eyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde sobre el título.' }),
    texto('titleA', 'Título (primera línea)', { group: 'encabezado' }),
    texto('titleB', 'Título (segunda línea, resaltada en verde)', { group: 'encabezado' }),
    parrafo('intro', 'Introducción', { group: 'encabezado' }),
    texto('searchPlaceholder', 'Buscador · texto de ejemplo', { group: 'encabezado' }),
    texto('searchBadge', 'Buscador · etiqueta', { group: 'encabezado', description: 'Etiqueta junto al buscador, p. ej. "Próximamente".' }),

    texto('catsEyebrow', 'Categorías · antetítulo', { group: 'categorias' }),
    texto('catsTitle', 'Categorías · título', { group: 'categorias' }),
    lista('categorias', 'Categorías', 'categoriaAyuda', [
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
      icono('icono'),
      enlace('href', 'Enlace', { description: 'Página a la que lleva la tarjeta, p. ej. /ayuda/faq/' }),
    ], { group: 'categorias', itemTitle: 'titulo', description: 'Tarjetas del centro de ayuda. Puedes agregar, quitar o reordenar.' }),

    texto('contactEyebrow', 'Antetítulo', { group: 'contacto' }),
    parrafo('contactText', 'Texto', { group: 'contacto' }),
    texto('contactCta', 'Botón principal · texto', { group: 'contacto' }),
    enlace('contactHref', 'Botón principal · enlace', { group: 'contacto' }),
    texto('faqCta', 'Botón secundario · texto', { group: 'contacto' }),
    enlace('faqHref', 'Botón secundario · enlace', { group: 'contacto' }),
  ],
})
