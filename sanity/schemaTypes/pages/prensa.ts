import { dato, definePage, enlace, icono, lista, parrafo, texto } from './_helpers'

export const paginaPrensa = definePage({
  name: 'paginaPrensa',
  title: 'Sala de prensa',
  groups: [
    { name: 'encabezado', title: 'Encabezado', default: true },
    { name: 'contenido', title: 'Datos, rutas y kit' },
    { name: 'lateral', title: 'Barra lateral' },
  ],
  fields: [
    texto('crumb', 'Nombre en el breadcrumb', { group: 'encabezado', description: 'Último paso de la ruta de navegación (Inicio › Nosotros › …).' }),
    texto('eyebrow', 'Antetítulo', { group: 'encabezado' }),
    texto('titleA', 'Título (parte normal)', { group: 'encabezado' }),
    texto('titleAccent', 'Título (parte resaltada en verde)', { group: 'encabezado' }),
    parrafo('intro', 'Introducción', { group: 'encabezado' }),

    texto('factSub', 'Fact sheet · antetítulo', { group: 'contenido' }),
    texto('factTitle', 'Fact sheet · título', { group: 'contenido' }),
    lista('factSheet', 'Fact sheet · datos', 'datoPrensa', [
      texto('label', 'Dato'),
      texto('valor', 'Valor', { description: '{rutas} se reemplaza automáticamente por el número de rutas activas de la red.' }),
    ], { group: 'contenido', itemTitle: 'label' }),

    texto('rutasSub', 'Rutas · antetítulo', { group: 'contenido' }),
    texto('rutasTitle', 'Rutas · título', { group: 'contenido', description: 'La lista de rutas se toma automáticamente de la red de rutas.' }),
    texto('rutasNota', 'Rutas · nota al pie', { group: 'contenido', description: 'Va seguida del enlace a la página de rutas (aerus.mx/rutas).' }),

    texto('kitSub', 'Kit de prensa · antetítulo', { group: 'contenido' }),
    texto('kitTitle', 'Kit de prensa · título', { group: 'contenido' }),
    lista('kitItems', 'Kit de prensa · materiales', 'material', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('desc', 'Descripción'),
      texto('etiqueta', 'Formatos', { description: 'Ej.: SVG · PNG.' }),
    ], { group: 'contenido', itemTitle: 'titulo' }),
    texto('kitCallout', 'Kit de prensa · texto del recuadro', { group: 'contenido', description: 'Va seguido del correo de prensa (campo "Correo de prensa" en la barra lateral).' }),

    texto('contactTag', 'Contacto · antetítulo', { group: 'lateral' }),
    texto('contactTitle', 'Contacto · título', { group: 'lateral' }),
    dato('contactEmail', 'Correo de prensa', { group: 'lateral', description: 'Se usa en la tarjeta de contacto y en el recuadro del kit de prensa.' }),
    dato('contactPhone', 'Teléfono de prensa', { group: 'lateral', description: 'Tal como se muestra, p. ej. +52 812 682 3501 (el enlace para llamar se arma solo).' }),
    texto('contactHours', 'Contacto · horario', { group: 'lateral' }),
    texto('moreTitle', 'Más sobre Aerus · título', { group: 'lateral' }),
    lista('moreLinks', 'Más sobre Aerus · enlaces', 'enlacePrensa', [
      texto('label', 'Texto del enlace'),
      enlace('href', 'Enlace'),
    ], { group: 'lateral', itemTitle: 'label' }),
  ],
})
