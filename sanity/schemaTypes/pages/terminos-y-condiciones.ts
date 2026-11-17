import { definePage } from './_helpers'
import { encabezadoLegal, gruposLegal, lateralLegal, seccionesLegal } from './_legal'

export const paginaTerminos = definePage({
  name: 'paginaTerminos',
  title: 'Términos y condiciones',
  groups: gruposLegal,
  fields: [
    ...encabezadoLegal(),
    seccionesLegal(),
    ...lateralLegal(),
  ],
})
