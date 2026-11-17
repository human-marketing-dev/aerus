import { definePage, texto } from './_helpers'
import { ctaMro, encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroAccesorios = definePage({
  name: 'paginaMroAccesorios',
  title: 'MRO · Accesorios y planeadores',
  groups: gruposMro(
    { name: 'accesorios', title: 'Accesorios' },
    { name: 'planeadores', title: 'Planeadores' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('accesoriosSubtitle', 'Accesorios · antetítulo', { group: 'accesorios' }),
    texto('accesoriosTitle', 'Accesorios · título', { group: 'accesorios' }),
    listaTituloDesc('accesorios', 'Sistemas de la célula', 'sistema', 'accesorios'),

    texto('planeadoresSubtitle', 'Planeadores · antetítulo', { group: 'planeadores' }),
    texto('planeadoresTitle', 'Planeadores · título', { group: 'planeadores' }),
    listaTituloDesc('planeadores', 'Servicios para planeadores', 'servicio', 'planeadores'),

    texto('otrosTitle', 'Otros servicios · título', { group: 'lateral' }),
    listaEnlacesMro('otros', 'Otros servicios · enlaces'),
    ...ctaMro(),
  ],
})
