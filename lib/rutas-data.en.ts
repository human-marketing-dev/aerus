// English copy for the route pages. Same shape and keys as RUTAS_DATA in ./rutas-data.ts.
// Slugs, IATA codes, city names and numeric data are identical to the Spanish version.
// `conectadas[].href` values are canonical (Spanish) paths — pages wrap them in lp().
import type { RutaData } from './rutas-data'

export const RUTAS_DATA_EN: Record<string, RutaData> = {
  'cdmx-ciudad-victoria': {
    slug: 'cdmx-ciudad-victoria',
    label: 'CDMX – Ciudad Victoria',
    origen: 'CDMX',
    destino: 'Ciudad Victoria',
    iataOrigen: 'NLU',
    iataDestino: 'CVM',
    aeropuertoOrigen: 'Felipe Ángeles International Airport',
    aeropuertoDestino: 'General Pedro José Méndez International Airport',
    distanciaKm: 480,
    duracionMin: 95,
    descripcion:
      'Ciudad Victoria is the capital of Tamaulipas and the state’s administrative, educational and agricultural center. This route connects it directly with Mexico City from Felipe Ángeles International Airport (AIFA), with no stops or connections along the way.',
    quienViaja:
      'State and federal government officials, academics and students, farmers and citrus growers, and professionals who need to handle paperwork or meetings in the nation’s capital without losing days on the road.',
    ventajaAerus:
      'By road, Mexico City and Ciudad Victoria are approximately 8 hours or more apart, depending on the route and traffic. Aerus’s direct flight from AIFA takes about 1 hour 35 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Which airport does the flight leave from in Mexico City?',
        a: 'Aerus flights in Mexico City operate from Felipe Ángeles International Airport (NLU), located in the State of Mexico, north of the capital. Factor in the time it takes to get to the airport when planning your trip.',
      },
      {
        q: 'Which airport do I arrive at in Ciudad Victoria?',
        a: 'You arrive at General Pedro José Méndez International Airport (CVM), which serves Ciudad Victoria and central Tamaulipas.',
      },
      {
        q: 'What documents do I need to fly?',
        a: 'This is a domestic route: a valid official photo ID is all you need. See the details at /en/help/travel-documents/.',
      },
      {
        q: 'How early should I arrive at the airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. At AIFA, also allow for travel time from your starting point. See /en/help/airport-times/ for the full guide.',
      },
    ],
    conectadas: [
      { label: 'CDMX – Tampico', href: '/rutas/cdmx-tampico/' },
      { label: 'Viva alliance',  href: '/rutas/alianza-viva/' },
    ],
  },

  'cdmx-tampico': {
    slug: 'cdmx-tampico',
    label: 'CDMX – Tampico',
    origen: 'CDMX',
    destino: 'Tampico',
    iataOrigen: 'NLU',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'Felipe Ángeles International Airport',
    aeropuertoDestino: 'General Francisco Javier Mina International Airport',
    distanciaKm: 340,
    duracionMin: 65,
    descripcion:
      'Tampico is the main port of southern Tamaulipas and, together with Ciudad Madero and Altamira, forms one of the most important industrial and petrochemical areas on the Gulf of Mexico. This route connects it directly with Mexico City from AIFA.',
    quienViaja:
      'Petrochemical and port industry executives and technicians, suppliers from the Altamira industrial corridor, government officials and families from the metro area who travel to the capital often.',
    ventajaAerus:
      'The drive between Mexico City and Tampico takes approximately 6 to 7 hours, with mountain stretches through the Sierra Madre Oriental. Aerus’s direct flight from AIFA is about 65 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Which airport does the flight leave from in Mexico City?',
        a: 'Aerus flights in Mexico City operate from Felipe Ángeles International Airport (NLU), located in the State of Mexico, north of the capital. Factor in the time it takes to get to the airport when planning your trip.',
      },
      {
        q: 'Which airport do I arrive at in Tampico?',
        a: 'You arrive at General Francisco Javier Mina International Airport (TAM), which serves Tampico, Ciudad Madero and Altamira.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See our baggage policy at /en/help/baggage/. Weight and size limits apply according to your fare.',
      },
      {
        q: 'Does the route operate year-round?',
        a: 'The CDMX–Tampico route operates on a regular schedule. Check availability and specific dates in the booking engine.',
      },
    ],
    conectadas: [
      { label: 'CDMX – Ciudad Victoria', href: '/rutas/cdmx-ciudad-victoria/' },
      { label: 'Viva alliance',          href: '/rutas/alianza-viva/' },
    ],
  },

  'monterrey-aguascalientes': {
    slug: 'monterrey-aguascalientes',
    label: 'Monterrey – Aguascalientes',
    origen: 'Monterrey',
    destino: 'Aguascalientes',
    iataOrigen: 'MTY',
    iataDestino: 'AGU',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'Jesús Terán Peredo International Airport',
    distanciaKm: 505,
    duracionMin: 100,
    descripcion:
      'Aguascalientes is one of the most important automotive and manufacturing centers in central Mexico. This route connects Monterrey’s industrial hub directly with the city and its supply chain, without going through Mexico City.',
    quienViaja:
      'Automotive and auto parts executives and technicians, suppliers with operations in both cities, logistics professionals and visitors to the San Marcos National Fair.',
    ventajaAerus:
      'By road, Monterrey–Aguascalientes takes approximately 6 to 7 hours via Saltillo and Zacatecas. Aerus’s direct flight gets it done in about 1 hour 40 minutes, nonstop.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Monterrey–Aguascalientes?',
        a: 'It is approximately 6 to 7 hours by road each way. With Aerus’s direct flight you can attend meetings in Aguascalientes without spending entire days in transit.',
      },
      {
        q: 'Which airport do I arrive at in Aguascalientes?',
        a: 'Jesús Terán Peredo International Airport (AGU) is south of the city, about 30 minutes from downtown depending on traffic.',
      },
      {
        q: 'How early should I get to the Monterrey airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. See /en/help/airport-times/ for the full guide.',
      },
      {
        q: 'Can I use this route to visit the San Marcos Fair?',
        a: 'Yes. The fair takes place every year between April and May and is a high-demand season, so we recommend booking ahead and checking availability in the booking engine.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
      { label: 'Monterrey – Durango',         href: '/rutas/monterrey-durango/' },
      { label: 'Monterrey – Tampico',         href: '/rutas/monterrey-tampico/' },
    ],
  },

  'monterrey-brownsville': {
    slug: 'monterrey-brownsville',
    label: 'Monterrey – Brownsville',
    origen: 'Monterrey',
    destino: 'Brownsville',
    iataOrigen: 'MTY',
    iataDestino: 'BRO',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'Brownsville South Padre Island International Airport',
    distanciaKm: 270,
    duracionMin: 50,
    descripcion:
      'A direct route between Monterrey’s industrial hub and South Texas. Brownsville is the border crossing point that links to Matamoros and the northeastern logistics corridor.',
    quienViaja:
      'Executives from the maquiladora sector, foreign trade professionals and families along the border corridor who would rather arrive without spending hours on the international bridges.',
    ventajaAerus:
      'Crossing by land from Matamoros to Brownsville can take 1 to 3 hours depending on bridge traffic. With Aerus, Monterrey to Brownsville is a 50-minute flight, and you land directly on the U.S. side.',
    esInternacional: true,
    faq: [
      {
        q: 'Do I need a passport to fly Monterrey–Brownsville?',
        a: 'Yes. This is an international route between Mexico and the United States. You need a valid passport and, if applicable, a U.S. visa or ESTA authorization. See the full requirements on our travel documents page.',
      },
      {
        q: 'Are there immigration procedures on this flight?',
        a: 'Yes. When you arrive in Brownsville you go through U.S. immigration and customs. We recommend arriving at the Monterrey airport with enough time to complete your departure paperwork.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See our baggage policy at /en/help/baggage/. Because this is an international route, weight and size limits apply according to your fare.',
      },
      {
        q: 'Does the route operate year-round?',
        a: 'The Monterrey–Brownsville route operates on a regular schedule. Check availability and specific dates in the booking engine.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – McAllen',        href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Piedras Negras', href: '/rutas/monterrey-piedras-negras/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-durango': {
    slug: 'monterrey-durango',
    label: 'Monterrey – Durango',
    origen: 'Monterrey',
    destino: 'Durango',
    iataOrigen: 'MTY',
    iataDestino: 'DGO',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'Guadalupe Victoria International Airport',
    distanciaKm: 480,
    duracionMin: 95,
    descripcion:
      'Monterrey and Durango are almost 600 km apart by road, across the northern desert via Saltillo and Torreón. The direct flight cuts out roughly 7 hours of driving and connects the northeast’s industrial hub with Durango, the state’s mining and forestry capital, in 95 minutes.',
    quienViaja:
      'Mining and forestry executives, government officials, professionals who work in both cities and tourists visiting the mountains and the state of Durango.',
    ventajaAerus:
      'By road, Monterrey–Durango takes roughly 7 hours or more via Saltillo and Torreón, with long stretches of heavy truck traffic. The direct flight is 95 minutes — no tolls, no fatigue and no day lost on the highway.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Monterrey–Durango?',
        a: 'The drive between Monterrey and Durango is almost 600 km and takes roughly 7 hours or more. Aerus’s direct flight takes 95 minutes and gets you to exactly the same place without the wear and tear of the road.',
      },
      {
        q: 'Which airport do I arrive at in Durango?',
        a: 'Guadalupe Victoria International Airport (DGO) is about 20 minutes from downtown Durango.',
      },
      {
        q: 'How early should I get to the Monterrey airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. See /en/help/airport-times/ for the full guide.',
      },
      {
        q: 'Does Aerus operate this route during the rainy season?',
        a: 'The route operates year-round. The Cessna Grand Caravan EX flies up to 25,000 feet, which allows it to operate above much of the region’s weather activity.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Brownsville',    href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Aguascalientes', href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – McAllen',        href: '/rutas/monterrey-mcallen/' },
    ],
  },

  'monterrey-mcallen': {
    slug: 'monterrey-mcallen',
    label: 'Monterrey – McAllen',
    origen: 'Monterrey',
    destino: 'McAllen',
    iataOrigen: 'MTY',
    iataDestino: 'MFE',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'McAllen Miller International Airport',
    distanciaKm: 190,
    duracionMin: 35,
    descripcion:
      'McAllen is the medical, retail and services center of the Rio Grande Valley in Texas. This route connects it directly with Monterrey for the thousands of Monterrey residents who travel to South Texas for healthcare, business or shopping.',
    quienViaja:
      'Patients and their companions seeking medical care in the Rio Grande Valley, executives of companies operating on both sides of the border, and families combining errands and shopping.',
    ventajaAerus:
      'Driving from Monterrey to McAllen takes about 3 hours, plus the wait at the Reynosa–Hidalgo bridge. The direct flight is 35 minutes — no traffic, no bridge lines, no parking.',
    esInternacional: true,
    faq: [
      {
        q: 'Do I need a passport to fly to McAllen?',
        a: 'Yes. This is an international route between Mexico and the United States. You need a valid passport and a visa or ESTA authorization. More information at /en/help/travel-documents/.',
      },
      {
        q: 'Are there specialty hospitals near McAllen airport?',
        a: 'McAllen Medical Center and several specialty hospitals are a short distance from the airport. This is one of the most common reasons passengers choose this route.',
      },
      {
        q: 'Can I carry medication in my baggage?',
        a: 'Permitted medications can be carried with their prescription. Check Aerus’s baggage guide and U.S. TSA regulations on bringing medication into the country.',
      },
      {
        q: 'How early should I get to the airport?',
        a: 'For international flights we recommend arriving 90 minutes in advance. See the full guide at /en/help/airport-times/.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Brownsville',    href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – Piedras Negras', href: '/rutas/monterrey-piedras-negras/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-piedras-negras': {
    slug: 'monterrey-piedras-negras',
    label: 'Monterrey – Piedras Negras',
    origen: 'Monterrey',
    destino: 'Piedras Negras',
    iataOrigen: 'MTY',
    iataDestino: 'PDS',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'Piedras Negras International Airport',
    distanciaKm: 320,
    duracionMin: 60,
    descripcion:
      'Piedras Negras is the main border city in northern Coahuila, across from Eagle Pass, Texas, and the gateway to the state’s coal region. This domestic route connects it directly with Monterrey in about an hour.',
    quienViaja:
      'Maquiladora and mining executives, foreign trade professionals and customs brokers, and families from northern Coahuila who travel to Monterrey for business, healthcare or school.',
    ventajaAerus:
      'By road, Monterrey–Piedras Negras takes approximately 4 to 5 hours. Aerus’s direct flight is about 60 minutes and, since it is a domestic route, there are no immigration procedures.',
    esInternacional: false,
    faq: [
      {
        q: 'Do I need a passport to fly Monterrey–Piedras Negras?',
        a: 'No. This is a domestic route within Mexico, so a valid official ID is all you need. If you plan to cross into Eagle Pass, Texas, afterward, you will need the documents required to enter the United States.',
      },
      {
        q: 'Which airport do I arrive at in Piedras Negras?',
        a: 'You arrive at Piedras Negras International Airport (PDS), which serves the city and northern Coahuila.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See our baggage policy at /en/help/baggage/. Weight and size limits apply according to your fare.',
      },
      {
        q: 'How early should I get to the Monterrey airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. See /en/help/airport-times/ for the full guide.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – McAllen',         href: '/rutas/monterrey-mcallen/' },
      { label: 'Monterrey – Brownsville',     href: '/rutas/monterrey-brownsville/' },
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
    ],
  },

  'monterrey-san-luis-potosi': {
    slug: 'monterrey-san-luis-potosi',
    label: 'Monterrey – San Luis Potosí',
    origen: 'Monterrey',
    destino: 'San Luis Potosí',
    iataOrigen: 'MTY',
    iataDestino: 'SLP',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'Ponciano Arriaga International Airport',
    distanciaKm: 400,
    duracionMin: 75,
    descripcion:
      'San Luis Potosí is a logistics and automotive hub at the crossroads of Mexico’s main highway corridors, between the Bajío and the northeast. This route connects it directly with Monterrey in about 1 hour 15 minutes.',
    quienViaja:
      'Automotive and manufacturing executives and technicians, logistics operators, government officials and travelers visiting the Huasteca Potosina or the state’s high plateau.',
    ventajaAerus:
      'By road, Monterrey–San Luis Potosí takes approximately 5 to 6 hours, with heavy truck traffic along much of the way. Aerus’s direct flight takes about 1 hour 15 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Monterrey–San Luis Potosí?',
        a: 'The drive takes around 5 to 6 hours and shares the road with one of the busiest freight corridors in the country. The direct flight cuts the trip to about 1 hour 15 minutes.',
      },
      {
        q: 'Which airport do I arrive at in San Luis Potosí?',
        a: 'You arrive at Ponciano Arriaga International Airport (SLP), which serves the state capital and its industrial zone.',
      },
      {
        q: 'What documents do I need to fly?',
        a: 'This is a domestic route: a valid official photo ID is all you need. See the details at /en/help/travel-documents/.',
      },
      {
        q: 'Does the route operate year-round?',
        a: 'The Monterrey–San Luis Potosí route operates on a regular schedule. Check availability and specific dates in the booking engine.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – Aguascalientes', href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – Tampico',        href: '/rutas/monterrey-tampico/' },
      { label: 'Monterrey – Durango',        href: '/rutas/monterrey-durango/' },
    ],
  },

  'monterrey-tampico': {
    slug: 'monterrey-tampico',
    label: 'Monterrey – Tampico',
    origen: 'Monterrey',
    destino: 'Tampico',
    iataOrigen: 'MTY',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'Mariano Escobedo International Airport',
    aeropuertoDestino: 'General Francisco Javier Mina International Airport',
    distanciaKm: 450,
    duracionMin: 85,
    descripcion:
      'Tampico, Ciudad Madero and Altamira make up the most important metro area in southern Tamaulipas, with port, petrochemical and tourism activity on the Gulf coast. This route connects it directly with Monterrey in about 1 hour 25 minutes.',
    quienViaja:
      'Petrochemical and port industry executives and technicians, suppliers with operations in Monterrey and Altamira, and Monterrey families heading to the beaches of Ciudad Madero.',
    ventajaAerus:
      'By road, Monterrey–Tampico takes approximately 6 hours or more via Ciudad Victoria. Aerus’s direct flight gets it done in about 1 hour 25 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Monterrey–Tampico?',
        a: 'It is approximately 6 hours or more by road each way. The direct flight saves you most of that time, so you arrive rested for your meetings or your time on the coast.',
      },
      {
        q: 'Which airport do I arrive at in Tampico?',
        a: 'You arrive at General Francisco Javier Mina International Airport (TAM), which serves Tampico, Ciudad Madero and Altamira.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See our baggage policy at /en/help/baggage/. Weight and size limits apply according to your fare.',
      },
      {
        q: 'How early should I get to the Monterrey airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. See /en/help/airport-times/ for the full guide.',
      },
    ],
    conectadas: [
      { label: 'Monterrey – San Luis Potosí', href: '/rutas/monterrey-san-luis-potosi/' },
      { label: 'Monterrey – Aguascalientes',  href: '/rutas/monterrey-aguascalientes/' },
      { label: 'Monterrey – McAllen',         href: '/rutas/monterrey-mcallen/' },
    ],
  },

  'veracruz-tampico': {
    slug: 'veracruz-tampico',
    label: 'Veracruz – Tampico',
    origen: 'Veracruz',
    destino: 'Tampico',
    iataOrigen: 'VER',
    iataDestino: 'TAM',
    aeropuertoOrigen: 'General Heriberto Jara International Airport',
    aeropuertoDestino: 'General Francisco Javier Mina International Airport',
    distanciaKm: 390,
    duracionMin: 75,
    descripcion:
      'The Gulf of Mexico coastal corridor links two of the country’s most historic ports. Veracruz and Tampico share port, energy and commercial activity — and this route connects them directly in about 1 hour 15 minutes.',
    quienViaja:
      'Port and logistics professionals, energy and petrochemical executives and technicians, government officials and travelers moving along the Gulf coast.',
    ventajaAerus:
      'By road, Veracruz–Tampico takes approximately 7 hours or more along the coast, via Poza Rica and Tuxpan. Aerus’s direct flight takes about 1 hour 15 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Veracruz–Tampico?',
        a: 'The drive takes around 7 hours or more, with truck traffic on several stretches. The direct flight cuts the trip to about 1 hour 15 minutes.',
      },
      {
        q: 'Which airport do I depart from in Veracruz?',
        a: 'Flights depart from General Heriberto Jara International Airport (VER), which serves the port of Veracruz and Boca del Río.',
      },
      {
        q: 'Which airport do I arrive at in Tampico?',
        a: 'You arrive at General Francisco Javier Mina International Airport (TAM), which serves Tampico, Ciudad Madero and Altamira.',
      },
      {
        q: 'How early should I get to the airport?',
        a: 'For domestic flights we recommend arriving 60–90 minutes before departure. See /en/help/airport-times/ for the full guide.',
      },
    ],
    conectadas: [
      { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
      { label: 'Viva alliance',           href: '/rutas/alianza-viva/' },
    ],
  },

  'veracruz-villahermosa': {
    slug: 'veracruz-villahermosa',
    label: 'Veracruz – Villahermosa',
    origen: 'Veracruz',
    destino: 'Villahermosa',
    iataOrigen: 'VER',
    iataDestino: 'VSA',
    aeropuertoOrigen: 'General Heriberto Jara International Airport',
    aeropuertoDestino: 'Carlos Rovirosa Pérez International Airport',
    distanciaKm: 375,
    duracionMin: 75,
    descripcion:
      'The Gulf of Mexico corridor links two of the most important cities in the country’s energy sector. Veracruz and Villahermosa are key centers of Mexico’s oil industry — and this route connects them directly in one hour.',
    quienViaja:
      'Energy sector executives and technicians (Pemex, CFE and suppliers), state government officials, petrochemical industry professionals and travelers along the southeast corridor.',
    ventajaAerus:
      'By road, Veracruz–Villahermosa takes 4 to 5 hours through tropical terrain with heavy truck traffic. Aerus’s direct flight is 75 minutes.',
    esInternacional: false,
    faq: [
      {
        q: 'Why is this route important for the energy sector?',
        a: 'Veracruz and Villahermosa are two of Pemex’s main operating centers on the Gulf of Mexico. The route lets industry professionals travel between both cities on the same day without losing half a day on the road.',
      },
      {
        q: 'Which airport do I arrive at in Villahermosa?',
        a: 'Carlos Rovirosa Pérez International Airport (VSA) is located north of Villahermosa, about 20 minutes from downtown.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See the full policy at /en/help/baggage/. The Cessna Grand Caravan EX has enough cargo hold capacity for every passenger’s baggage.',
      },
      {
        q: 'Does the route operate during the rainy season?',
        a: 'Yes, the route operates year-round. The Cessna Grand Caravan EX is designed to operate in the variable weather conditions typical of the Gulf region.',
      },
    ],
    conectadas: [
      { label: 'Veracruz – Tampico', href: '/rutas/veracruz-tampico/' },
      { label: 'Viva alliance',      href: '/rutas/alianza-viva/' },
    ],
  },

  'villahermosa-merida': {
    slug: 'villahermosa-merida',
    label: 'Villahermosa – Mérida',
    origen: 'Villahermosa',
    destino: 'Mérida',
    iataOrigen: 'VSA',
    iataDestino: 'MID',
    aeropuertoOrigen: 'Carlos Rovirosa Pérez International Airport',
    aeropuertoDestino: 'Manuel Crescencio Rejón International Airport',
    distanciaKm: 465,
    duracionMin: 90,
    descripcion:
      'Villahermosa, the capital of Tabasco and Aerus’s hub in the southeast, connects directly with Mérida, the capital of Yucatán and the peninsula’s leading center for services, healthcare and education. The route links both cities in about an hour and a half.',
    quienViaja:
      'Energy sector professionals, business owners with operations in the southeast, patients seeking specialized medical care in Mérida, students and tourists visiting the Yucatán Peninsula.',
    ventajaAerus:
      'By road, Villahermosa–Mérida takes approximately 7 hours or more across Tabasco and Campeche. Aerus’s direct flight gets it done in about an hour and a half.',
    esInternacional: false,
    faq: [
      {
        q: 'Why fly instead of driving Villahermosa–Mérida?',
        a: 'The drive takes around 7 hours or more and crosses three states. The direct flight cuts the trip to about an hour and a half and drops you right in Mérida.',
      },
      {
        q: 'Which airport do I arrive at in Mérida?',
        a: 'Manuel Crescencio Rejón International Airport (MID) is south of Mérida, about 20 minutes from downtown depending on traffic.',
      },
      {
        q: 'How much baggage can I bring?',
        a: 'See our baggage policy at /en/help/baggage/. Weight and size limits apply according to your fare.',
      },
      {
        q: 'Does the route operate year-round?',
        a: 'The Villahermosa–Mérida route operates on a regular schedule. Check availability and specific dates in the booking engine.',
      },
    ],
    conectadas: [
      { label: 'Veracruz – Villahermosa', href: '/rutas/veracruz-villahermosa/' },
      { label: 'Viva alliance',           href: '/rutas/alianza-viva/' },
    ],
  },
}
