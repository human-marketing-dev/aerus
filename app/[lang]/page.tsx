import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experiencia from '@/components/Experiencia'
import Tarifas from '@/components/Tarifas'
import BrandBanner from '@/components/BrandBanner'
import RoutesMapInteractive from '@/components/RoutesMapInteractive'
import Espera from '@/components/Espera'
import Directos from '@/components/Directos'
import Servicios from '@/components/Servicios'
import Pagos from '@/components/Pagos'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCities, getRoutes } from '@/lib/red'
import { isLang } from '@/lib/i18n'
import { getPage } from '@/lib/content'
import { seoMetadata } from '@/lib/seo'
import inicio from '@/content/pages/inicio'

// Contenido: Sanity → Páginas → Inicio. Ciudades y rutas: Red de rutas.

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const t = await getPage('paginaInicio', lang, inicio)
  return seoMetadata(t.seo, lang, '/')
}

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const [t, cities, allRoutes] = await Promise.all([
    getPage('paginaInicio', lang, inicio),
    getCities(lang),
    getRoutes(lang),
  ])

  // Drop routes where either city isn't defined in the cities list
  const validCities = new Set(Object.keys(cities))
  const routes = allRoutes.filter(([a, b]) => validCities.has(a) && validCities.has(b))

  return (
    <>
      <Nav lang={lang}/>
      <Hero lang={lang} banners={t.banners}/>
      <Experiencia t={t.experiencia}/>
      <BrandBanner texto={t.marca.texto}/>
      <Tarifas lang={lang} t={t.tarifas}/>
      <RoutesMapInteractive lang={lang} t={t.mapa} cities={cities} routes={routes}/>
      <Espera lang={lang} t={t.espera}/>
      <Directos lang={lang} t={t.directos}/>
      <Servicios lang={lang} t={t.servicios}/>
      <Pagos lang={lang}/>
      <Newsletter lang={lang}/>
      <Footer lang={lang}/>
    </>
  )
}
