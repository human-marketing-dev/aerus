import { dato, definePage, enlace, lista, listaTextos, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda } from './_ayuda'

export const paginaAyudaFacturacion = definePage({
  name: 'paginaAyudaFacturacion',
  title: 'Facturación',
  groups: gruposAyuda(
    { name: 'pasos', title: 'Pasos y datos' },
    { name: 'preguntas', title: 'Preguntas' },
    { name: 'portal', title: 'Portal de facturación' },
  ),
  fields: [
    ...encabezadoAyuda(),

    texto('stepsTitle', 'Pasos · título', { group: 'pasos' }),
    lista('pasos', 'Pasos', 'pasoFacturacion', [
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'pasos', itemTitle: 'titulo', description: 'Se numeran solos en el orden de la lista.' }),
    texto('dataTitle', 'Datos fiscales · título', { group: 'pasos' }),
    listaTextos('datosNecesarios', 'Datos fiscales · lista', { group: 'pasos' }),
    parrafo('dataNote', 'Datos fiscales · nota destacada', { group: 'pasos', description: 'Recuadro con bandera debajo de la lista.' }),

    texto('faqTitle', 'Preguntas · título', { group: 'preguntas' }),
    lista('preguntas', 'Preguntas', 'preguntaFacturacion', [
      texto('pregunta', 'Pregunta'),
      parrafo('respuesta', 'Respuesta'),
    ], { group: 'preguntas', itemTitle: 'pregunta' }),

    texto('portalTag', 'Etiqueta', { group: 'portal' }),
    texto('portalTitle', 'Título', { group: 'portal' }),
    parrafo('portalDesc', 'Texto', { group: 'portal' }),
    texto('portalBtn', 'Texto del botón', { group: 'portal' }),
    enlace('portalUrl', 'Dirección del portal de facturación', {
      group: 'portal',
      description: 'URL completa (https://…) del portal de SeFactura. Se abre en una pestaña nueva.',
    }),
    texto('rfcLabel', 'Etiqueta del RFC', { group: 'portal' }),
    dato('rfc', 'RFC de Aerus', { group: 'portal' }),
    parrafo('portalNote', 'Nota', { group: 'portal' }),
    texto('helpText', 'Ayuda · texto', { group: 'portal', description: 'Pregunta debajo de la tarjeta del portal.' }),
    texto('contactCta', 'Ayuda · texto del enlace', { group: 'portal' }),
    enlace('contactHref', 'Ayuda · enlace', { group: 'portal' }),
  ],
})
