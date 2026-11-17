import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import defaults from '@/content/pages/reservar-metodos-pago'

const PATH = '/reservar/metodos-de-pago/'

export async function generateMetadata({ params }: PageProps<'/[lang]/reservar/metodos-de-pago'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaMetodosPago', lang, defaults)
  return seoMetadata(t.seo, lang, PATH)
}

export default async function MetodosDePagoPage({ params }: PageProps<'/[lang]/reservar/metodos-de-pago'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = await getPage('paginaMetodosPago', lang, defaults)

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
