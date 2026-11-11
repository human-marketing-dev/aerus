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
import { getCities, getRoutes } from '@/lib/red-de-rutas'
import type { Metadata } from 'next'
import { alternates, isLang } from '@/lib/i18n'

export async function generateMetadata({ params }: PageProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return { alternates: alternates(lang, '/') }
}

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!isLang(lang)) notFound()

  const cities = getCities()
  const allRoutes = getRoutes()

  // Drop routes where either city isn't defined in the cities list
  const validCities = new Set(Object.keys(cities))
  const routes = allRoutes.filter(([a, b]) => validCities.has(a) && validCities.has(b))

  return (
    <>
      <Nav lang={lang}/>
      <Hero lang={lang}/>
      <Experiencia lang={lang}/>
      <BrandBanner lang={lang}/>
      <Tarifas lang={lang}/>
      <RoutesMapInteractive lang={lang} cities={cities} routes={routes}/>
      <Espera lang={lang}/>
      <Directos lang={lang}/>
      <Servicios lang={lang}/>
      <Pagos lang={lang}/>
      <Newsletter lang={lang}/>
      <Footer lang={lang}/>
    </>
  )
}
