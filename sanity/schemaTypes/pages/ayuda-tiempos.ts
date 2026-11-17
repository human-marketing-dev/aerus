import { booleano, definePage, enlace, lista, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda } from './_ayuda'

export const paginaAyudaTiempos = definePage({
  name: 'paginaAyudaTiempos',
  title: 'Tiempos de llegada al aeropuerto',
  groups: gruposAyuda(
    { name: 'tarjetas', title: 'Tarjetas de tiempos' },
    { name: 'recomendaciones', title: 'Recomendaciones' },
  ),
  fields: [
    ...encabezadoAyuda(),

    lista('tarjetas', 'Tarjetas de tiempos', 'tarjetaTiempo', [
      texto('tipo', 'Tipo de vuelo', { description: 'P. ej. "Nacional".' }),
      texto('subtitulo', 'Subtítulo'),
      booleano('destacado', 'Destacar tarjeta', { description: 'Muestra la tarjeta resaltada.' }),
      texto('llegada', 'Tiempo de llegada recomendado', { description: 'Número grande de la tarjeta, p. ej. "1h 30 min".' }),
      lista('fases', 'Cierres', 'faseTiempo', [
        texto('label', 'Concepto', { description: 'P. ej. "Cierre de mostrador".' }),
        texto('valor', 'Tiempo', { description: 'P. ej. "45 min antes".' }),
      ], { itemTitle: 'label', description: 'Al final de la lista se agrega sola la fila "Salida del vuelo · 00:00".' }),
      parrafo('nota', 'Nota', { optional: true, description: 'Texto al pie de la tarjeta. Déjalo vacío si no lleva.' }),
    ], { group: 'tarjetas', itemTitle: 'tipo' }),
    texto('beforeFlight', 'Texto bajo el tiempo de llegada', { group: 'tarjetas', description: 'P. ej. "antes de tu vuelo".' }),
    texto('departure', 'Texto de la última fila', { group: 'tarjetas', description: 'P. ej. "Salida del vuelo".' }),
    parrafo('generalNote', 'Nota debajo de las tarjetas', { group: 'tarjetas' }),

    texto('tipsEyebrow', 'Antetítulo', { group: 'recomendaciones' }),
    texto('tipsTitle', 'Título', { group: 'recomendaciones' }),
    lista('recomendaciones', 'Recomendaciones', 'recomendacionTiempo', [
      parrafo('texto', 'Texto'),
      texto('linkLabel', 'Enlace · texto', { optional: true, description: 'Opcional: enlace al final del texto.' }),
      enlace('linkHref', 'Enlace · dirección', { optional: true }),
    ], { group: 'recomendaciones', itemTitle: 'texto' }),
  ],
})
