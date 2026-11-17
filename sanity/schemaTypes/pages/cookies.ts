import { dato, definePage, lista, parrafo, seccion, texto, textoEnriquecido } from './_helpers'
import { encabezadoLegal, gruposLegal, lateralLegal, seccionesLegal } from './_legal'

export const paginaCookies = definePage({
  name: 'paginaCookies',
  title: 'Política de cookies',
  groups: gruposLegal,
  fields: [
    ...encabezadoLegal(),
    seccion('tableHeader', 'Encabezados de las tablas de cookies', [
      texto('cookie', 'Columna 1 (nombre de la cookie)'),
      texto('tipo', 'Columna 2 (tipo)'),
      texto('duracion', 'Columna 3 (duración)'),
      texto('proposito', 'Columna 4 (propósito)'),
    ], { group: 'secciones', collapsed: true }),
    seccionesLegal([
      texto('tablaTitulo', 'Tabla de cookies · título (opcional)', {
        optional: true,
        description: 'Texto en negritas justo encima de la tabla, p. ej. "Cookies propias de aerus.mx:". Déjalo vacío si no lleva.',
      }),
      lista('cookies', 'Tabla de cookies (opcional)', 'filaCookie', [
        dato('nombre', 'Nombre de la cookie', { description: 'Tal como la guarda el navegador, p. ej. aerus_session.' }),
        texto('tipo', 'Tipo'),
        texto('duracion', 'Duración'),
        parrafo('proposito', 'Propósito'),
      ], {
        itemTitle: 'nombre',
        description: 'Si la sección lleva tabla, agrega aquí una fila por cookie. Se muestra después del texto de la sección. Vacía = sin tabla.',
      }),
      textoEnriquecido('cuerpoFinal', 'Texto después de la tabla (opcional)', {
        optional: true,
        description: 'Texto que va debajo de la tabla de cookies (p. ej. los enlaces a las políticas de Google y Meta).',
      }),
    ]),
    ...lateralLegal(),
  ],
})
