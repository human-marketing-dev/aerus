import { definePage, lista, listaParrafos, parrafo, texto } from './_helpers'
import { ctaLateral, encabezadoExperiencia, gruposExperiencia, listaRelacionados } from './_experiencia'

export const paginaSeguroCancelacion = definePage({
  name: 'paginaSeguroCancelacion',
  title: 'Seguro de cancelación',
  groups: gruposExperiencia(
    { name: 'cobertura', title: 'Cobertura' },
    { name: 'contratar', title: 'Cómo contratarlo' },
    { name: 'faq', title: 'Preguntas frecuentes' },
  ),
  fields: [
    ...encabezadoExperiencia(),

    // Cobertura
    texto('cubreSubtitulo', 'Qué cubre · antetítulo', { group: 'cobertura' }),
    texto('cubreTitle', 'Qué cubre · título', { group: 'cobertura' }),
    listaParrafos('cubre', 'Qué cubre (viñetas)', { group: 'cobertura' }),
    texto('noCubreSubtitulo', 'Qué no cubre · antetítulo', { group: 'cobertura' }),
    texto('noCubreTitle', 'Qué no cubre · título', { group: 'cobertura' }),
    listaParrafos('noCubre', 'Qué no cubre (viñetas)', { group: 'cobertura' }),

    // Cómo contratarlo
    texto('contratarTitle', 'Cómo contratarlo · título', { group: 'contratar' }),
    listaParrafos('pasosContratar', 'Pasos', {
      group: 'contratar',
      description: 'Se numeran solos en el orden de la lista.',
    }),

    // Preguntas frecuentes
    texto('faqTitle', 'Preguntas frecuentes · título', { group: 'faq' }),
    lista('preguntas', 'Preguntas frecuentes', 'preguntaSeguro', [
      texto('pregunta', 'Pregunta'),
      parrafo('respuesta', 'Respuesta'),
    ], { group: 'faq', itemTitle: 'pregunta' }),

    // Barra lateral
    ...ctaLateral('Tarjeta de reserva'),
    texto('relacionadosTitle', 'Tarjeta de enlaces · título', { group: 'lateral' }),
    listaRelacionados('relacionados', 'Tarjeta de enlaces · enlaces'),
  ],
})
