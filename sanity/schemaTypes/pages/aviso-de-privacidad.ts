import { dato, parrafo, texto, definePage } from './_helpers'
import { encabezadoLegal, gruposLegal, lateralLegal, seccionesLegal } from './_legal'

export const paginaPrivacidad = definePage({
  name: 'paginaPrivacidad',
  title: 'Aviso de privacidad',
  groups: gruposLegal,
  fields: [
    ...encabezadoLegal(),
    seccionesLegal(),
    ...lateralLegal(),
    texto('contactTitle', 'Contacto de privacidad · título', { group: 'lateral' }),
    parrafo('contactDesc', 'Contacto de privacidad · texto', { group: 'lateral' }),
    dato('contactEmail', 'Contacto de privacidad · correo', { group: 'lateral', description: 'Correo que aparece (y se abre al hacer clic) en la tarjeta de contacto.' }),
  ],
})
