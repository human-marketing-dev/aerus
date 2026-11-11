import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { alternates, isLang, type Lang } from '@/lib/i18n'

const PATH = '/check-in/'

const T: Record<Lang, { metaTitle: string; eyebrow: string; title: string; wip: string }> = {
  es: {
    metaTitle: 'Check-in | Aerus',
    eyebrow: 'Viaja con Aerus',
    title: 'Check-in',
    wip: 'Esta página estará disponible próximamente.',
  },
  en: {
    metaTitle: 'Check-in | Aerus',
    eyebrow: 'Fly with Aerus',
    title: 'Check-in',
    wip: 'This page will be available soon.',
  },
}

export async function generateMetadata({ params }: PageProps<'/[lang]/check-in'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return { title: T[lang].metaTitle, alternates: alternates(lang, PATH) }
}

export default async function CheckInPage({ params }: PageProps<'/[lang]/check-in'>) {
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
