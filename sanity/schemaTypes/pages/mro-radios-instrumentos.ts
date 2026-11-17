import { definePage, listaTextos, parrafo, texto } from './_helpers'
import { ctaMro, encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroRadios = definePage({
  name: 'paginaMroRadios',
  title: 'MRO · Radios e instrumentos',
  groups: gruposMro(
    { name: 'servicios', title: 'Servicios' },
    { name: 'marcas', title: 'Marcas' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('serviciosSubtitle', 'Servicios · antetítulo', { group: 'servicios' }),
    texto('serviciosTitle', 'Servicios · título', { group: 'servicios' }),
    listaTituloDesc('servicios', 'Servicios de aviónica', 'servicio', 'servicios'),

    texto('marcasSubtitle', 'Marcas · antetítulo', { group: 'marcas' }),
    texto('marcasTitle', 'Marcas · título', { group: 'marcas' }),
    listaTextos('marcas', 'Marcas y equipos', { group: 'marcas' }),
    parrafo('marcasCallout', 'Nota bajo la lista de marcas', { group: 'marcas' }),

    texto('otrosTitle', 'Otros servicios · título', { group: 'lateral' }),
    listaEnlacesMro('otros', 'Otros servicios · enlaces'),
    ...ctaMro(),
  ],
})
