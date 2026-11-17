import { dato, definePage, lista, parrafo, texto } from './_helpers'
import { ctaMro, encabezadoMro, gruposMro, listaEnlacesMro, listaTituloDesc } from './_mro'

export const paginaMroMotores = definePage({
  name: 'paginaMroMotores',
  title: 'MRO · Motores PT6A',
  groups: gruposMro(
    { name: 'servicios', title: 'Servicios' },
    { name: 'modelos', title: 'Modelos' },
  ),
  fields: [
    ...encabezadoMro(),

    texto('serviciosSubtitle', 'Servicios · antetítulo', { group: 'servicios' }),
    texto('serviciosTitle', 'Servicios · título', { group: 'servicios' }),
    listaTituloDesc('servicios', 'Servicios de motor', 'servicio', 'servicios'),

    texto('modelosSubtitle', 'Modelos · antetítulo', { group: 'modelos' }),
    texto('modelosTitle', 'Modelos · título', { group: 'modelos' }),
    texto('colModelo', 'Tabla · encabezado de la columna "Modelo"', { group: 'modelos' }),
    texto('colAplicacion', 'Tabla · encabezado de la columna "Aeronave"', { group: 'modelos' }),
    lista('modelos', 'Tabla de modelos PT6A', 'modeloMotor', [
      dato('modelo', 'Modelo', { description: 'Igual en español e inglés, p. ej. PT6A-114A.' }),
      dato('aplicacion', 'Aeronave de aplicación', { description: 'Igual en español e inglés.' }),
    ], { group: 'modelos', itemTitle: 'modelo' }),
    parrafo('modelosCallout', 'Nota bajo la tabla', { group: 'modelos' }),

    texto('otrosTitle', 'Otros servicios · título', { group: 'lateral' }),
    listaEnlacesMro('otros', 'Otros servicios · enlaces'),
    ...ctaMro(),
  ],
})
