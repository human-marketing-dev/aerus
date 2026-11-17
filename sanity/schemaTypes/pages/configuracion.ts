import { defineField } from 'sanity'
import { dato, definePage, enlace, icono, lista, listaTextos, numero, opcion, parrafo, seccion, texto } from './_helpers'

const linkFields = [texto('label', 'Texto'), enlace('href', 'Enlace')]

// Configuración general del sitio (aparece en todas las páginas).
export const configuracion = definePage({
  name: 'configuracion',
  title: 'Configuración general',
  groups: [
    { name: 'menu', title: 'Menú y aviso', default: true },
    { name: 'footer', title: 'Footer y redes' },
    { name: 'boletin', title: 'Boletín' },
  ],
  fields: [
    seccion('menu', 'Menú superior', [
      lista('izquierda', 'Enlaces a la izquierda del logo', 'enlace', linkFields, { itemTitle: 'label' }),
      lista('derecha', 'Enlaces a la derecha del logo', 'enlace', linkFields, { itemTitle: 'label' }),
      texto('reservar', 'Botón verde'),
      enlace('reservarHref', 'Botón verde · enlace'),
    ], { group: 'menu' }),

    seccion('aviso', 'Aviso de rutas (barra verde bajo el menú)', [
      texto('titulo', 'Etiqueta'),
      texto('porDia', 'Texto "vuelos diarios"'),
      texto('porSemana', 'Texto "vuelos semanales"'),
      texto('deVuelo', 'Texto después de la duración'),
      texto('verRuta', 'Texto del enlace'),
      defineField({
        name: 'rutas',
        title: 'Rutas que rotan en el aviso',
        type: 'array',
        of: [{
          type: 'object',
          name: 'rutaAviso',
          fields: [
            defineField({ name: 'ruta', title: 'Ruta', type: 'reference', to: [{ type: 'ruta' }], validation: r => r.required() }),
            numero('frecuencia', 'Número de vuelos (opcional)', { optional: true }),
            opcion('periodo', 'Por', [{ title: 'Día', value: 'day' }, { title: 'Semana', value: 'week' }], { optional: true }),
          ],
          preview: {
            select: { o: 'ruta.origen.nombre', d: 'ruta.destino.nombre', n: 'frecuencia', p: 'periodo' },
            prepare: ({ o, d, n, p }) => ({
              title: `${o ?? '?'} – ${d ?? '?'}`,
              subtitle: n ? `${n} por ${p === 'week' ? 'semana' : 'día'}` : 'Sin frecuencia',
            }),
          },
        }],
      }),
    ], { group: 'menu' }),

    seccion('footer', 'Footer', [
      parrafo('tagline', 'Texto bajo el logo'),
      lista('columnas', 'Columnas de enlaces', 'columna', [
        texto('titulo', 'Título'),
        lista('links', 'Enlaces', 'enlace', linkFields, { itemTitle: 'label' }),
      ], { itemTitle: 'titulo' }),
      lista('contactos', 'Teléfonos de contacto', 'contacto', [
        icono('icono'),
        texto('etiqueta', 'Etiqueta'),
        dato('valor', 'Número'),
        texto('detalle', 'Detalle (horario, etc.)'),
      ], { itemTitle: 'etiqueta' }),
      texto('derechos', 'Texto de derechos reservados'),
      lista('legales', 'Enlaces legales', 'enlace', linkFields, { itemTitle: 'label' }),
      parrafo('direccion', 'Dirección'),
    ], { group: 'footer' }),

    lista('redes', 'Redes sociales', 'red', [
      dato('nombre', 'Nombre'),
      opcion('icono', 'Ícono', [
        { title: 'Instagram', value: 'ig' },
        { title: 'Facebook', value: 'fb' },
        { title: 'TikTok', value: 'tiktok' },
        { title: 'YouTube', value: 'youtube' },
        { title: 'LinkedIn', value: 'in' },
        { title: 'X (Twitter)', value: 'x-twitter' },
      ]),
      enlace('href', 'Enlace al perfil'),
    ], { group: 'footer', itemTitle: 'nombre', description: 'Aparecen en el footer y en Ayuda → Contacto.' }),

    seccion('boletin', 'Boletín (sección antes del footer)', [
      texto('eyebrow', 'Antetítulo'),
      texto('titulo', 'Título'),
      texto('tituloContorno', 'Título · línea con contorno'),
      parrafo('texto', 'Texto'),
      texto('email', 'Texto dentro del campo de correo'),
      texto('enviar', 'Botón'),
      texto('gracias', 'Mensaje al suscribirse'),
      listaTextos('beneficios', 'Beneficios (palomitas)'),
      texto('visual1', 'Texto decorativo · línea 1'),
      texto('visual2', 'Texto decorativo · línea 2'),
    ], { group: 'boletin' }),
  ],
})
