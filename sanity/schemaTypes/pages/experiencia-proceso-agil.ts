import { definePage, icono, lista, parrafo, texto } from './_helpers'
import { ctaLateral, encabezadoExperiencia, gruposExperiencia, listaRelacionados } from './_experiencia'

export const paginaProcesoAgil = definePage({
  name: 'paginaProcesoAgil',
  title: 'Espera minutos, no horas',
  groups: gruposExperiencia(
    { name: 'comparacion', title: 'Comparación' },
    { name: 'pasos', title: 'Paso a paso' },
  ),
  fields: [
    ...encabezadoExperiencia(),

    // Comparación
    texto('comparacionSubtitulo', 'Comparación · antetítulo', { group: 'comparacion' }),
    texto('comparacionTitle', 'Comparación · título', { group: 'comparacion' }),
    texto('colGrande', 'Encabezado de la columna "aerolínea grande"', { group: 'comparacion' }),
    texto('colAerus', 'Encabezado de la columna "Aerus"', { group: 'comparacion' }),
    lista('comparacion', 'Filas de la tabla comparativa', 'filaComparacion', [
      texto('aspecto', 'Aspecto', { description: 'Columna izquierda, p. ej. "Llegada recomendada".' }),
      texto('grande', 'Aerolínea grande'),
      texto('aerus', 'Aerus'),
    ], { group: 'comparacion', itemTitle: 'aspecto' }),

    // Paso a paso
    texto('pasosSubtitulo', 'Paso a paso · antetítulo', { group: 'pasos' }),
    texto('pasosTitle', 'Paso a paso · título', { group: 'pasos' }),
    lista('pasos', 'Tarjetas de pasos', 'pasoProceso', [
      icono('icono'),
      texto('paso', 'Etiqueta del paso', { description: 'Texto pequeño, p. ej. "90 min antes" o "Check-in".' }),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'pasos', itemTitle: 'titulo' }),

    // Barra lateral
    texto('relacionadosTitle', 'Tarjeta de enlaces · título', { group: 'lateral' }),
    listaRelacionados('relacionados', 'Tarjeta de enlaces · enlaces'),
    ...ctaLateral('Tarjeta de reserva'),
  ],
})
