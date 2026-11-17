import { definePage, enlace, icono, lista, parrafo, texto } from './_helpers'
import { GRUPOS, camposEncabezado, camposRelacionados, campoEmail, campoHorario } from './on-demand-comun'

export const paginaFlightPass = definePage({
  name: 'paginaFlightPass',
  title: 'Aerus Flight Pass',
  groups: GRUPOS,
  fields: [
    ...camposEncabezado('Aerus '),

    texto('beneficiosSub', 'Qué incluye · antetítulo', { group: 'contenido' }),
    texto('beneficiosTitulo', 'Qué incluye · título', { group: 'contenido' }),
    lista('beneficios', 'Qué incluye (tarjetas)', 'beneficio', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('pasosTitulo', 'Cómo funciona · título', { group: 'contenido' }),
    lista('pasos', 'Cómo funciona · pasos', 'paso', [
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('faqTitulo', 'Preguntas frecuentes · título', { group: 'contenido' }),
    lista('faq', 'Preguntas frecuentes', 'pregunta', [
      texto('q', 'Pregunta'),
      parrafo('a', 'Respuesta'),
    ], { group: 'contenido', itemTitle: 'q' }),

    texto('ctaTitulo', 'Solicitar información · título', { group: 'lateral' }),
    parrafo('ctaDesc', 'Solicitar información · texto', { group: 'lateral' }),
    texto('ctaBtn', 'Solicitar información · texto del botón', { group: 'lateral' }),
    enlace('ctaHref', 'Solicitar información · enlace del botón', { group: 'lateral' }),

    ...camposRelacionados(),

    texto('contactoTag', 'Contacto · etiqueta', { group: 'lateral' }),
    texto('contactoTitulo', 'Contacto · título', { group: 'lateral' }),
    campoEmail(),
    campoHorario(),
  ],
})
