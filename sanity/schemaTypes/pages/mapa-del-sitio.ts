import { dato, definePage, lista, seccion, texto } from './_helpers'

// Mapa del sitio: solo los NOMBRES que se muestran en el árbol. Los enlaces y el estatus de cada
// página están fijos en el sitio; los destinos y rutas se listan solos desde la red de rutas.

const SEC = 'Título de la sección en el mapa.'
const t = (group: string) => (name: string, title: string, description?: string) =>
  texto(name, title, { group, ...(description ? { description } : {}) })

const general = t('general')
const principal = t('principal')
const red = t('red')
const onDemand = t('onDemand')
const experiencia = t('experiencia')
const blog = t('blog')
const nosotros = t('nosotros')
const legalAyuda = t('legalAyuda')

export const paginaMapaSitio = definePage({
  name: 'paginaMapaSitio',
  title: 'Mapa del sitio',
  groups: [
    { name: 'general', title: 'General', default: true },
    { name: 'principal', title: 'Tareas principales' },
    { name: 'red', title: 'Destinos y rutas' },
    { name: 'onDemand', title: 'On Demand' },
    { name: 'experiencia', title: 'Experiencia' },
    { name: 'blog', title: 'Blog' },
    { name: 'nosotros', title: 'Nosotros y MRO' },
    { name: 'legalAyuda', title: 'Legal y ayuda' },
  ],
  fields: [
    general('eyebrow', 'Antetítulo'),
    general('title', 'Título'),
    general('legendLabel', 'Nombre de la leyenda (accesibilidad)', 'Lo leen los lectores de pantalla; no se ve en la página.'),
    seccion('status', 'Leyenda de estatus', [
      texto('gris', 'Gris'),
      texto('amarillo', 'Amarillo'),
      texto('naranja', 'Naranja'),
      texto('azul', 'Azul'),
      texto('verde', 'Verde'),
    ], { group: 'general', description: 'Nombre de cada color de estatus.' }),

    principal('secMain', 'Sección · título', SEC),
    principal('home', 'Inicio'),
    principal('book', 'Reservar'),
    principal('fares', 'Tarifas y familias'),
    principal('payment', 'Métodos de pago'),
    principal('checkin', 'Check-in'),
    principal('myBooking', 'Mi reserva'),

    red('secDestinations', 'Destinos · título de la sección', SEC),
    red('destinationsIndex', 'Destinos · índice', 'Debajo se listan solos todos los destinos de la red.'),
    red('secRoutes', 'Rutas · título de la sección', SEC),
    red('routesIndex', 'Rutas · índice', 'Debajo se listan solas todas las rutas de la red.'),
    red('viva', 'Alianza con Viva'),

    onDemand('secOnDemand', 'Sección · título', SEC),
    onDemand('onDemand', 'On Demand'),
    onDemand('charter', 'Charter'),
    onDemand('charterQuote', 'Cotizar charter'),
    onDemand('flightPass', 'Flight Pass'),
    onDemand('flightPassContact', 'Contacto Flight Pass'),
    onDemand('business', 'Soluciones para empresas'),

    experiencia('secExperience', 'Sección · título', SEC),
    experiencia('experience', 'Experiencia Aerus'),
    experiencia('fastProcess', 'Proceso ágil'),
    experiencia('fleet', 'La flota'),
    experiencia('travelAssistance', 'Asistencia de viaje'),
    experiencia('cancellationInsurance', 'Seguro de cancelación'),
    experiencia('groups', 'Vuelos para grupos'),

    blog('secBlog', 'Sección · título', SEC),
    blog('blog', 'Blog'),
    lista('blogPosts', 'Artículos del blog', 'articulo', [
      texto('label', 'Título del artículo'),
      dato('slug', 'Dirección del artículo', { description: 'Última parte de la URL, p. ej. "descubre-cozumel" para /blog/descubre-cozumel/.' }),
    ], { group: 'blog', itemTitle: 'label' }),

    nosotros('secAbout', 'Nosotros · título de la sección', SEC),
    nosotros('about', 'Nosotros'),
    nosotros('press', 'Sala de prensa'),
    nosotros('secMro', 'MRO · título de la sección', SEC),
    nosotros('mro', 'MRO'),
    nosotros('mroCapabilities', 'Capacidades y certificaciones'),
    nosotros('mroPt6a', 'Motores PT6A'),
    nosotros('mroPropellers', 'Hélices'),
    nosotros('mroAccessories', 'Accesorios y planeadores'),
    nosotros('mroRadios', 'Radios e instrumentos'),
    nosotros('mroQuote', 'Solicitar cotización'),

    legalAyuda('secLegal', 'Legal · título de la sección', SEC),
    legalAyuda('terms', 'Términos y condiciones'),
    legalAyuda('privacy', 'Aviso de privacidad'),
    legalAyuda('cookies', 'Política de cookies'),
    legalAyuda('secHelp', 'Ayuda · título de la sección', SEC),
    legalAyuda('helpCenter', 'Centro de ayuda'),
    legalAyuda('faq', 'Preguntas frecuentes'),
    legalAyuda('travelDocs', 'Documentos para viajar'),
    legalAyuda('baggage', 'Equipaje'),
    legalAyuda('airportTimes', 'Tiempos de llegada al aeropuerto'),
    legalAyuda('specialAssistance', 'Requerimientos especiales'),
    legalAyuda('pets', 'Viajar con mascota'),
    legalAyuda('invoicing', 'Facturación'),
    legalAyuda('contact', 'Contacto'),
  ],
})
