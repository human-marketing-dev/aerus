import { dato, definePage, listaTextos, parrafo, texto } from './_helpers'
import { encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroCotizacion = definePage({
  name: 'paginaMroCotizacion',
  title: 'MRO · Solicitar cotización',
  groups: gruposMro(
    { name: 'pasos', title: 'Pasos' },
    { name: 'datos', title: 'Datos de la aeronave' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('pasosTitle', 'Pasos · título', { group: 'pasos' }),
    listaTituloDesc('pasos', 'Pasos para solicitar la cotización', 'paso', 'pasos'),

    texto('datosSubtitle', 'Datos · antetítulo', { group: 'datos' }),
    texto('datosTitle', 'Datos · título', { group: 'datos' }),
    listaTextos('datos', 'Datos que se piden', { group: 'datos' }),
    parrafo('urgente', 'Aviso de atención urgente', { group: 'datos' }),

    texto('contactTag', 'Contacto · etiqueta', { group: 'lateral' }),
    texto('contactTitle', 'Contacto · título', { group: 'lateral' }),
    dato('email', 'Contacto · correo', { group: 'lateral', description: 'P. ej. mro@aerus.mx' }),
    dato('telefono', 'Contacto · teléfono (como se muestra)', { group: 'lateral', description: 'P. ej. +52 (812) 682·3501' }),
    dato('telefonoMarcar', 'Contacto · teléfono para marcar', {
      group: 'lateral',
      description: 'Solo números con lada internacional, sin espacios. P. ej. +528126823501',
    }),
    texto('horario', 'Contacto · horario', { group: 'lateral' }),
    texto('serviciosTitle', 'Servicios MRO · título', { group: 'lateral' }),
    listaEnlacesMro('servicios', 'Servicios MRO · enlaces'),
  ],
})
