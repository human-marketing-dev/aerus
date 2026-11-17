import { definePage, enlace, parrafo, texto } from './_helpers'
import { encabezadoAyuda, enlacesAyuda, gruposAyuda, seccionesAyuda } from './_ayuda'

export const paginaAyudaMascotas = definePage({
  name: 'paginaAyudaMascotas',
  title: 'Viajar con mascota',
  groups: gruposAyuda(
    { name: 'secciones', title: 'Secciones' },
    { name: 'contacto', title: 'Contacto y barra lateral' },
  ),
  fields: [
    ...encabezadoAyuda(),

    texto('serviceRefA', 'Aviso de animales de servicio · inicio', {
      group: 'secciones',
      description: 'Recuadro al inicio de la página. Se arma así: inicio + texto en negritas + final + enlace. Ej.: "¿Viajas con un "',
    }),
    texto('serviceRefStrong', 'Aviso · texto en negritas', { group: 'secciones' }),
    texto('serviceRefB', 'Aviso · final', { group: 'secciones', description: 'Empieza con espacio si lo necesita.' }),
    texto('serviceRefLink', 'Aviso · texto del enlace', { group: 'secciones' }),
    enlace('serviceRefHref', 'Aviso · enlace', { group: 'secciones' }),
    seccionesAyuda('secciones', 'Secciones', 'secciones', { ancla: true }),

    texto('ctaTitle', 'Tarjeta final · título', { group: 'contacto' }),
    parrafo('ctaText', 'Tarjeta final · texto', { group: 'contacto' }),
    texto('contactCta', 'Tarjeta final · texto del botón', { group: 'contacto' }),
    enlace('contactHref', 'Tarjeta final · enlace del botón', { group: 'contacto' }),
    texto('onThisPage', 'Barra lateral · título del índice', { group: 'contacto', description: 'El índice se arma solo con los títulos de las secciones.' }),
    texto('alsoInHelp', 'Barra lateral · título de enlaces relacionados', { group: 'contacto' }),
    enlacesAyuda('relacionados', 'Barra lateral · enlaces relacionados', 'contacto'),
  ],
})
