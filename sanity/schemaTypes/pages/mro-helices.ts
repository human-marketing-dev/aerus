import { dato, definePage, lista, texto } from './_helpers'
import { ctaMro, encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroHelices = definePage({
  name: 'paginaMroHelices',
  title: 'MRO · Hélices',
  groups: gruposMro(
    { name: 'servicios', title: 'Servicios' },
    { name: 'marcas', title: 'Marcas' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('serviciosSubtitle', 'Servicios · antetítulo', { group: 'servicios' }),
    texto('serviciosTitle', 'Servicios · título', { group: 'servicios' }),
    listaTituloDesc('servicios', 'Servicios', 'servicio', 'servicios'),

    texto('marcasSubtitle', 'Marcas · antetítulo', { group: 'marcas' }),
    texto('marcasTitle', 'Marcas · título', { group: 'marcas' }),
    texto('colMarca', 'Tabla · encabezado de la columna "Marca"', { group: 'marcas' }),
    texto('colSeries', 'Tabla · encabezado de la columna "Series"', { group: 'marcas' }),
    lista('marcas', 'Tabla de marcas', 'marcaHelice', [
      dato('marca', 'Marca', { description: 'Igual en español e inglés.' }),
      texto('series', 'Series y aplicaciones'),
    ], { group: 'marcas', itemTitle: 'marca' }),

    texto('otrosTitle', 'Otros servicios · título', { group: 'lateral' }),
    listaEnlacesMro('otros', 'Otros servicios · enlaces'),
    ...ctaMro(),
  ],
})
