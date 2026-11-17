import { definePage, enlace, icono, lista, listaTextos, parrafo, texto } from './_helpers'
import { GRUPOS, camposEncabezado, camposRelacionados, campoEmail, campoHorario, campoTelefono } from './on-demand-comun'

export const paginaCharter = definePage({
  name: 'paginaCharter',
  title: 'Aerus Charter',
  groups: GRUPOS,
  fields: [
    ...camposEncabezado('Aerus '),

    texto('usosSub', 'Usos · antetítulo', { group: 'contenido' }),
    texto('usosTitulo', 'Usos · título', { group: 'contenido' }),
    lista('usos', 'Usos frecuentes (tarjetas)', 'uso', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('incluyeSub', 'Qué incluye · antetítulo', { group: 'contenido' }),
    texto('incluyeTitulo', 'Qué incluye · título', { group: 'contenido' }),
    listaTextos('incluye', 'Qué incluye · lista', { group: 'contenido' }),

    texto('pasosTitulo', 'Cómo funciona · título', { group: 'contenido' }),
    lista('pasos', 'Cómo funciona · pasos', 'paso', [
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
    ], { group: 'contenido', itemTitle: 'titulo' }),

    texto('ctaTitulo', 'Cotización · título', { group: 'lateral' }),
    parrafo('ctaDesc', 'Cotización · texto', { group: 'lateral' }),
    texto('ctaBtn', 'Cotización · texto del botón', { group: 'lateral' }),
    enlace('ctaHref', 'Cotización · enlace del botón', { group: 'lateral' }),

    ...camposRelacionados(),

    texto('contactoTag', 'Contacto · etiqueta', { group: 'lateral' }),
    texto('contactoTitulo', 'Contacto · título', { group: 'lateral' }),
    campoEmail(),
    campoTelefono(),
    campoHorario(),
  ],
})
