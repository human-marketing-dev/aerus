import { definePage, enlace, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda, seccionesAyuda } from './_ayuda'

export const paginaAyudaRequerimientos = definePage({
  name: 'paginaAyudaRequerimientos',
  title: 'Requerimientos especiales',
  groups: gruposAyuda(
    { name: 'secciones', title: 'Secciones' },
    { name: 'contacto', title: 'Contacto y barra lateral' },
  ),
  fields: [
    ...encabezadoAyuda(),
    seccionesAyuda('secciones', 'Secciones', 'secciones', { ancla: true }),

    texto('ctaTitle', 'Tarjeta final · título', { group: 'contacto' }),
    parrafo('ctaText', 'Tarjeta final · texto', { group: 'contacto' }),
    texto('contactCta', 'Tarjeta final · texto del botón', { group: 'contacto' }),
    enlace('contactHref', 'Enlace de los botones de contacto', {
      group: 'contacto',
      description: 'Lo usan el botón de la tarjeta final y el de la barra lateral, p. ej. /ayuda/contacto/',
    }),
    texto('onThisPage', 'Barra lateral · título del índice', { group: 'contacto', description: 'El índice se arma solo con los títulos de las secciones.' }),
    parrafo('sidebarCta', 'Barra lateral · texto', { group: 'contacto' }),
    texto('sidebarBtn', 'Barra lateral · texto del botón', { group: 'contacto' }),
  ],
})
