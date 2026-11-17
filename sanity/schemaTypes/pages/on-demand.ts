import { definePage, enlace, icono, lista, parrafo, texto } from './_helpers'

export const paginaOnDemand = definePage({
  name: 'paginaOnDemand',
  title: 'On Demand',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'contenido', title: 'Contenido' },
    { name: 'cta', title: 'Llamado final' },
  ],
  fields: [
    texto('eyebrow', 'Antetítulo', { group: 'encabezado', description: 'Texto pequeño en verde arriba del título.' }),
    texto('titleA', 'Título (parte normal)', { group: 'encabezado', description: 'Ej.: "Vuelos corporativos ". Deja un espacio al final.' }),
    texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
    parrafo('intro', 'Introducción', { group: 'encabezado' }),

    lista('servicios', 'Servicios (tarjetas)', 'servicio', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
      enlace('href', 'Enlace de la tarjeta'),
      texto('cta', 'Texto del enlace', { description: 'Aparece al pie de la tarjeta, junto a la flecha.' }),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('ventajasTitulo', 'Ventajas · título', { group: 'contenido' }),
    lista('ventajas', 'Ventajas', 'ventaja', [
      icono('icono'),
      texto('texto', 'Texto'),
    ], { group: 'contenido', itemTitle: 'texto' }),

    texto('ctaEyebrow', 'Antetítulo', { group: 'cta' }),
    texto('ctaTitulo', 'Título', { group: 'cta' }),
    texto('ctaCharter', 'Botón principal · texto', { group: 'cta' }),
    enlace('ctaCharterHref', 'Botón principal · enlace', { group: 'cta' }),
    texto('ctaContacto', 'Botón secundario · texto', { group: 'cta' }),
    enlace('ctaContactoHref', 'Botón secundario · enlace', { group: 'cta' }),
  ],
})
