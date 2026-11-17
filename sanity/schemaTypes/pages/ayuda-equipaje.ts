import { booleano, dato, definePage, lista, opcion, parrafo, texto } from './_helpers'
import { encabezadoAyuda, gruposAyuda, seccionesAyuda } from './_ayuda'

export const paginaAyudaEquipaje = definePage({
  name: 'paginaAyudaEquipaje',
  title: 'Equipaje',
  groups: gruposAyuda(
    { name: 'tabla', title: 'Tabla por tarifa' },
    { name: 'secciones', title: 'Secciones' },
  ),
  fields: [
    ...encabezadoAyuda(),

    texto('compareEyebrow', 'Antetítulo', { group: 'tabla' }),
    texto('compareTitle', 'Título', { group: 'tabla' }),
    lista('tarifas', 'Tarifas (columnas de la tabla)', 'tarifaEquipaje', [
      dato('nombre', 'Nombre de la tarifa', { description: 'P. ej. "Aerus Light".' }),
      dato('etiqueta', 'Etiqueta corta', { description: 'Texto pequeño sobre el nombre, p. ej. "Light".' }),
      booleano('destacada', 'Destacar columna', { description: 'Resalta esta tarifa en la tabla.' }),
    ], {
      group: 'tabla',
      itemTitle: 'nombre',
      description: 'El orden de las tarifas debe coincidir con el orden de las celdas de cada fila.',
    }),
    lista('filas', 'Filas de la tabla', 'filaEquipaje', [
      texto('feature', 'Concepto', { description: 'P. ej. "Equipaje de mano".' }),
      lista('celdas', 'Celdas (una por tarifa, en el mismo orden)', 'celdaEquipaje', [
        texto('texto', 'Texto'),
        opcion('estado', 'Estado', [
          { title: 'Incluido (punto verde)', value: 'incluido' },
          { title: 'Con costo adicional', value: 'extra' },
        ]),
      ], { itemTitle: 'texto' }),
    ], { group: 'tabla', itemTitle: 'feature' }),
    parrafo('compareNote', 'Nota debajo de la tabla', { group: 'tabla' }),

    seccionesAyuda('secciones', 'Secciones informativas', 'secciones', { subtitulo: true }),
  ],
})
