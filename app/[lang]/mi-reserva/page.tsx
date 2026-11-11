import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang } from '@/lib/i18n'

const PATH = '/mi-reserva/'

const T = {
  es: {
    metaTitle: 'Mi Reserva | Aerus',
    eyebrow: 'Gestiona tu viaje',
    title: 'Mi Reserva',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    metaTitle: 'My Booking | Aerus',
    eyebrow: 'Manage your trip',
    title: 'My Booking',
    wip: 'This page will be available soon.',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/mi-reserva'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return { title: T[lang].metaTitle, alternates: alternates(lang, PATH) }
}

export default async function MiReservaPage({ params }: PageProps<'/[lang]/mi-reserva'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = T[lang]

  return (
    <>
      <Nav lang={lang} />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">{t.eyebrow}</div>
            <h1 className="section-headline">{t.title}</h1>
            <p className="pg-wip-note">{t.wip}</p>
          </div>
        </section>
      </main>
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </>
  )
}
