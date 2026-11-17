import { definePage, lista, listaTextos, parrafo, texto } from './_helpers'
import { ctaMro, encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroCapacidades = definePage({
  name: 'paginaMroCapacidades',
  title: 'MRO · Capacidades y certificaciones',
  groups: gruposMro(
    { name: 'certificaciones', title: 'Certificaciones' },
    { name: 'aeronaves', title: 'Aeronaves' },
    { name: 'alcance', title: 'Alcance de trabajo' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('certSubtitle', 'Certificaciones · antetítulo', { group: 'certificaciones' }),
    texto('certTitle', 'Certificaciones · título', { group: 'certificaciones' }),
    lista('certificaciones', 'Certificaciones', 'certificacion', [
      texto('nombre', 'Nombre de la certificación'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'certificaciones', itemTitle: 'nombre' }),

    texto('aeronavesSubtitle', 'Aeronaves · antetítulo', { group: 'aeronaves' }),
    texto('aeronavesTitle', 'Aeronaves · título', { group: 'aeronaves' }),
    listaTextos('aeronaves', 'Aeronaves que se atienden', { group: 'aeronaves' }),
    parrafo('aeronavesCallout', 'Nota bajo la lista de aeronaves', { group: 'aeronaves' }),

    texto('alcanceSubtitle', 'Alcance · antetítulo', { group: 'alcance' }),
    texto('alcanceTitle', 'Alcance · título', { group: 'alcance' }),
    listaTituloDesc('alcance', 'Tipos de trabajo', 'trabajo', 'alcance'),

    texto('otrosTitle', 'Otros servicios · título', { group: 'lateral' }),
    listaEnlacesMro('otros', 'Otros servicios · enlaces'),
    ...ctaMro(),
  ],
})
