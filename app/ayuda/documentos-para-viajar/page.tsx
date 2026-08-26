import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Documentos para viajar | Aerus',
  description:
    'Conoce qué documentos necesitas para volar con Aerus: identificaciones válidas, requisitos para vuelos internacionales y permisos para menores de edad.',
}

type Seccion = {
  icono: string
  titulo: string
  subtitulo: string
  items: string[]
  nota?: string
}

const SECCIONES: Seccion[] = [
  {
    icono: 'shield',
    titulo: 'Vuelos nacionales',
    subtitulo: 'Dentro de México',
    items: [
      'Identificación oficial vigente con fotografía: credencial del INE/IFE, pasaporte mexicano o cédula profesional.',
      'Los documentos deben estar en buen estado: legibles, sin perforaciones, tachaduras ni deterioro excesivo.',
      'Para menores de edad: acta de nacimiento o cualquier documento oficial que acredite su identidad y edad.',
    ],
    nota: 'La aerolínea puede negar el abordaje si la identificación está vencida, deteriorada o no coincide con los datos del boleto.',
  },
  {
    icono: 'globe',
    titulo: 'Vuelos internacionales',
    subtitulo: 'Hacia Estados Unidos y otros destinos',
    items: [
      'Pasaporte vigente mexicano o del país de residencia. Se recomienda al menos 6 meses de vigencia restante.',
      'Visa americana (B1/B2) vigente para ingresar a Texas (Laredo, McAllen, Brownsville). Verifica si eres elegible para el programa de exención de visa (ESTA).',
      'En caso de tener doble nacionalidad, verifica con la embajada cuál pasaporte debes presentar.',
      'Revisa los requisitos específicos del país de destino con anticipación en el portal de la embajada correspondiente.',
    ],
    nota: 'Los requisitos migratorios pueden cambiar. Aerus recomienda verificar la información oficial antes de viajar.',
  },
  {
    icono: 'users',
    titulo: 'Menores de edad',
    subtitulo: 'Niños y adolescentes',
    items: [
      'Viajando con ambos padres o tutores legales: documento de identidad vigente del menor (acta de nacimiento, CURP o pasaporte).',
      'Viajando con uno de los padres: carta responsiva notariada o apostillada del padre o madre ausente que autorice el viaje.',
      'Viajando solos: permiso notariado de ambos padres, identificación del menor y datos de contacto de quien los recibirá en el destino.',
      'Menores bajo tutela legal: presentar documento oficial que acredite la guarda y custodia.',
    ],
    nota: 'Contáctanos con al menos 72 horas de anticipación si un menor viajará solo o con uno de sus tutores, para confirmar la documentación exacta requerida.',
  },
  {
    icono: 'check',
    titulo: 'Recomendaciones generales',
    subtitulo: 'Para todos los viajeros',
    items: [
      'Verifica la vigencia de tus documentos al menos una semana antes del viaje.',
      'Ten tus documentos listos y accesibles al llegar al aeropuerto para agilizar el proceso de check-in.',
      'Guarda copias digitales de tus documentos en tu correo electrónico o en la nube como respaldo.',
      'Si vas a viajar al extranjero, infórmate sobre las regulaciones de aduana del país de destino para evitar inconvenientes.',
    ],
  },
]

const RELACIONADOS = [
  { label: 'Preguntas frecuentes', href: '/ayuda/faq/' },
  { label: 'Equipaje', href: '/ayuda/equipaje/' },
  { label: 'Tiempos de llegada al aeropuerto', href: '/ayuda/tiempos-aeropuerto/' },
  { label: 'Requerimientos especiales', href: '/ayuda/requerimientos-especiales/' },
  { label: 'Viajar con mascota', href: '/ayuda/viajar-con-mascota/' },
]

export default function DocumentosPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="docs-hero">
          <div className="container docs-hero-inner">
            <nav className="destino-breadcrumb" aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/ayuda/">Ayuda</Link>
              <span aria-hidden="true"> › </span>
              <span aria-current="page">Documentos para viajar</span>
            </nav>
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>Ayuda</div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              Documentos para <span className="accent">viajar</span>
            </h1>
            <p className="section-intro" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Todo lo que necesitas saber sobre identificaciones, visas y permisos para volar con Aerus.
            </p>
          </div>
        </section>

        <section className="section-pad docs-body">
          <div className="container">
            <div className="docs-layout">
              <div className="docs-content">
                {SECCIONES.map((sec, i) => (
                  <div key={i} className="docs-section">
                    <div className="docs-section-header">
                      <div className="docs-section-icon">
                        <Icon name={sec.icono} size={20} stroke={1.5} />
                      </div>
                      <div>
                        <p className="docs-subtitulo">{sec.subtitulo}</p>
                        <h2 className="docs-h2">{sec.titulo}</h2>
                      </div>
                    </div>
                    <ul className="docs-list">
                      {sec.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    {sec.nota && (
                      <div className="docs-callout">
                        <span className="docs-callout-icon" aria-hidden="true">⚑</span>
                        <p>{sec.nota}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <aside className="docs-sidebar">
                <div className="docs-sidebar-card">
                  <h3 className="docs-sidebar-title">Más en Ayuda</h3>
                  <ul className="docs-related-list">
                    {RELACIONADOS.map(r => (
                      <li key={r.href}>
                        <Link href={r.href} className="docs-related-link">
                          <span>{r.label}</span>
                          <span className="docs-related-arr" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="docs-sidebar-cta">
                    <p className="docs-sidebar-cta-text">
                      ¿Tienes una pregunta específica sobre tu documentación?
                    </p>
                    <Link href="/ayuda/contacto/" className="btn btn-primary docs-sidebar-btn">
                      Contactar a Aerus
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
