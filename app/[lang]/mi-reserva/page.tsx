import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/mi-reserva'

const PATH = '/mi-reserva/'

export async function generateMetadata({ params }: PageProps<'/[lang]/mi-reserva'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMiReserva', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function MiReservaPage({ params }: PageProps<'/[lang]/mi-reserva'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMiReserva', lang, defaults)

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
