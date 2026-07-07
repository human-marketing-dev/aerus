import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import { AYUDA_CATEGORIAS } from '@/lib/ayuda-mock'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Centro de Ayuda | Aerus',
  description:
    'Encuentra respuestas sobre reservas, equipaje, documentos, check-in y más. Centro de ayuda oficial de Aerus.',
}

export default function AyudaPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="ayuda-hero">
          <div className="container ayuda-hero-inner">
            <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>
              Soporte
            </div>
            <h1 className="section-headline" style={{ color: 'var(--aerus-white)' }}>
              ¿Cómo podemos<br />
              <span className="accent">ayudarte?</span>
            </h1>
            <p className="section-intro ayuda-hero-intro">
              Encuentra respuestas, políticas y formas de contacto para tu viaje con Aerus.
            </p>
            <div className="ayuda-search-bar" role="search">
              <Icon name="search" size={16} className="ayuda-search-icon" />
              <span className="ayuda-search-placeholder">Busca una pregunta o tema…</span>
              <span className="ayuda-search-badge">Próximamente</span>
            </div>
          </div>
        </section>

        <section className="section-pad ayuda-cats-section">
          <div className="container">
            <div className="ayuda-cats-header">
              <div className="eyebrow">Temas</div>
              <h2 className="section-headline" style={{ fontSize: 36 }}>
                Explora por categoría
              </h2>
            </div>
            <div className="ayuda-cat-grid">
              {AYUDA_CATEGORIAS.map(cat => (
                <Link
                  key={cat.slug}
                  href={`/ayuda/${cat.slug}/`}
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
              <div className="eyebrow" style={{ color: 'var(--aerus-spring-green)' }}>¿No encontraste lo que buscabas?</div>
              <p className="ayuda-contact-text">
                Nuestro equipo está disponible de lunes a domingo de 06:00 a 22:00 hrs.
              </p>
            </div>
            <div className="ayuda-contact-actions">
              <Link href="/ayuda/contacto/" className="btn btn-primary">
                Contactar a Aerus
              </Link>
              <Link href="/ayuda/faq/" className="btn btn-on-dark">
                Preguntas frecuentes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
