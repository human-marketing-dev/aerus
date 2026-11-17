import { definePage, enlace, icono, lista, listaTextos, parrafo, texto } from './_helpers'
import { encabezadoMro } from './_mro'

export const paginaMro = definePage({
  name: 'paginaMro',
  title: 'MRO · Inicio',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'servicios', title: 'Servicios' },
    { name: 'aprobaciones', title: 'Aprobaciones' },
  ],
  fields: [
    ...encabezadoMro({ crumb: false }),

    lista('servicios', 'Tarjetas de servicios', 'servicioMro', [
      icono('icono', 'Ícono'),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
      enlace('href', 'Enlace de la tarjeta'),
    ], { group: 'servicios', itemTitle: 'titulo', description: 'Cada tarjeta lleva a una página de MRO.' }),
    texto('verMas', 'Texto "Ver más" de las tarjetas', { group: 'servicios' }),

    texto('credsLabel', 'Franja de aprobaciones · etiqueta', { group: 'aprobaciones' }),
    listaTextos('creds', 'Franja de aprobaciones · lista', {
      group: 'aprobaciones',
      description: 'Cada aprobación se muestra con el símbolo ✦ delante (se agrega solo).',
    }),
  ],
})
