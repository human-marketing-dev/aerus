import { definePage, enlace, parrafo, texto } from './_helpers'
import { encabezadoAyuda, enlacesAyuda, gruposAyuda, seccionesAyuda } from './_ayuda'

export const paginaAyudaDocumentos = definePage({
  name: 'paginaAyudaDocumentos',
  title: 'Documentos para viajar',
  groups: gruposAyuda(
    { name: 'secciones', title: 'Secciones' },
    { name: 'lateral', title: 'Barra lateral' },
  ),
  fields: [
    ...encabezadoAyuda(),
    seccionesAyuda('secciones', 'Secciones', 'secciones', { subtitulo: true }),

    texto('sidebarTitle', 'Título de la tarjeta', { group: 'lateral' }),
    enlacesAyuda('relacionados', 'Enlaces relacionados', 'lateral'),
    parrafo('sidebarCta', 'Texto sobre el botón', { group: 'lateral' }),
    texto('contactCta', 'Texto del botón', { group: 'lateral' }),
    enlace('contactHref', 'Enlace del botón', { group: 'lateral' }),
  ],
})
