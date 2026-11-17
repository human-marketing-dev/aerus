import { definePage, icono, imagen, lista, parrafo, texto } from './_helpers'
import { ctaLateral, encabezadoExperiencia, gruposExperiencia, listaRelacionados } from './_experiencia'

export const paginaFlota = definePage({
  name: 'paginaFlota',
  title: 'La flota',
  groups: gruposExperiencia(
    { name: 'especificaciones', title: 'Especificaciones' },
    { name: 'ventajas', title: 'Ventajas' },
  ),
  fields: [
    ...encabezadoExperiencia(),
    imagen('imagen', 'Foto de la flota', {
      group: 'encabezado',
      description: 'Foto ancha que aparece debajo del encabezado. Marca el punto de interés para que no se recorte el avión.',
    }),

    // Especificaciones
    texto('specsSubtitulo', 'Especificaciones · antetítulo', { group: 'especificaciones', description: 'P. ej. el modelo del avión.' }),
    texto('specsTitle', 'Especificaciones · título', { group: 'especificaciones' }),
    lista('specs', 'Tabla de especificaciones', 'especificacion', [
      texto('etiqueta', 'Concepto', { description: 'Columna izquierda, p. ej. "Motor".' }),
      texto('valor', 'Valor', { description: 'Columna derecha.' }),
    ], { group: 'especificaciones', itemTitle: 'etiqueta' }),

    // Ventajas
    texto('ventajasTitle', 'Ventajas · título', { group: 'ventajas' }),
    lista('ventajas', 'Tarjetas de ventajas', 'ventaja', [
      icono('icono'),
      texto('titulo', 'Título'),
      parrafo('descripcion', 'Descripción'),
    ], { group: 'ventajas', itemTitle: 'titulo' }),

    // Barra lateral
    texto('sidebarTitle', 'Tarjeta de enlaces · título', { group: 'lateral' }),
    listaRelacionados('relacionados', 'Tarjeta de enlaces · enlaces'),
    ...ctaLateral('Tarjeta de reserva'),
  ],
})
