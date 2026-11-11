import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAyudaCategorias } from '@/lib/ayuda-mock'
import { Icon } from '@/components/icons'
import { alternates, isLang, lp } from '@/lib/i18n'

const PATH = '/ayuda/'

const es = {
  metaTitle: 'Centro de Ayuda | Aerus',
  metaDescription:
    'Encuentra respuestas sobre reservas, equipaje, documentos, check-in y más. Centro de ayuda oficial de Aerus.',
  eyebrow: 'Soporte',
  titleA: '¿Cómo podemos',
  titleB: 'ayudarte?',
  intro: 'Encuentra respuestas, políticas y formas de contacto para tu viaje con Aerus.',
  searchPlaceholder: 'Busca una pregunta o tema…',
  searchBadge: 'Próximamente',
  catsEyebrow: 'Temas',
  catsTitle: 'Explora por categoría',
  contactEyebrow: '¿No encontraste lo que buscabas?',
  contactText: 'Nuestro equipo está disponible de lunes a domingo de 06:00 a 22:00 hrs.',
  contactCta: 'Contactar a Aerus',
  faqCta: 'Preguntas frecuentes',
}

const en: typeof es = {
  metaTitle: 'Help Center | Aerus',
  metaDescription:
    'Find answers about bookings, baggage, travel documents, check-in and more. The official Aerus help center.',
  eyebrow: 'Support',
  titleA: 'How can we',
  titleB: 'help you?',
  intro: 'Find answers, policies and ways to reach us for your trip with Aerus.',
  searchPlaceholder: 'Search for a question or topic…',
  searchBadge: 'Coming soon',
  catsEyebrow: 'Topics',
  catsTitle: 'Browse by category',
  contactEyebrow: 'Didn’t find what you were looking for?',
  contactText: 'Our team is available Monday through Sunday, 6:00 am to 10:00 pm.',
  contactCta: 'Contact Aerus',
  faqCta: 'FAQ',
}

const T = { es, en }

export async function generateMetadata({ params }: PageProps<'/[lang]/ayuda'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = T[lang]
  return { title: t.metaTitle, description: t.metaDescription, alternates: alternates(lang, PATH) }
}

export default async function AyudaPage({ params }: PageProps<'/[lang]/ayuda'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]
  const categorias = getAyudaCategorias(lang)

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="ayuda-hero">
          <div className="container ayuda-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              {t.eyebrow}
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              {t.titleA}<br />
              <span className="accent">{t.titleB}</span>
            </h1>
            <p className="section-intro ayuda-hero-intro">
              {t.intro}
            </p>
            <div className="ayuda-search-bar" role="search">
              <Icon name="search" size={16} className="ayuda-search-icon" />
              <span className="ayuda-search-placeholder">{t.searchPlaceholder}</span>
              <span className="ayuda-search-badge">{t.searchBadge}</span>
            </div>
          </div>
        </section>

        <section className="section-pad ayuda-cats-section">
          <div className="container">
            <div className="ayuda-cats-header">
              <div className="eyebrow">{t.catsEyebrow}</div>
              <h2 className="section-headline" style={{ fontSize: 36 }}>
                {t.catsTitle}
              </h2>
            </div>
            <div className="ayuda-cat-grid">
              {categorias.map(cat => (
                <Link
                  key={cat.slug}
                  href={lp(lang, `/ayuda/${cat.slug}/`)}
                  className="ayuda-cat-card"
                >
                  <div className="ayuda-cat-icon">
                    <Icon name={cat.icono} size={22} stroke={1.5} />
                  </div>
                  <h3 className="ayuda-cat-title">{cat.titulo}</h3>
                  <p className="ayuda-cat-desc">{cat.descripcion}</p>
                  <span className="ayuda-cat-arrow" aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="ayuda-contact-strip">
          <div className="container ayuda-contact-inner">
            <div className="ayuda-contact-copy">
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>{t.contactEyebrow}</div>
              <p className="ayuda-contact-text">
                {t.contactText}
              </p>
            </div>
            <div className="ayuda-contact-actions">
              <Link href={lp(lang, '/ayuda/contacto/')} className="btn btn-primary">
                {t.contactCta}
              </Link>
              <Link href={lp(lang, '/ayuda/faq/')} className="btn btn-on-dark">
                {t.faqCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
