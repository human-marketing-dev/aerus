import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experiencia from '@/components/Experiencia'
import Tarifas from '@/components/Tarifas'
import BrandBanner from '@/components/BrandBanner'
import RoutesMapInteractive from '@/components/RoutesMapInteractive'
import Reviews from '@/components/Reviews'
import Espera from '@/components/Espera'
import Directos from '@/components/Directos'
import Servicios from '@/components/Servicios'
import Pagos from '@/components/Pagos'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import { getCities, getRoutes } from '@/lib/routes'

// Revalidate this page every hour so route/city changes in the Sheet propagate
export const revalidate = 3600

export default async function Page() {
  const [cities, allRoutes] = await Promise.all([getCities(), getRoutes()])

  // Drop route rows where either city has a typo / isn't in the ciudades sheet
  const validCities = new Set(Object.keys(cities))
  const routes = allRoutes.filter(([a, b]) => validCities.has(a) && validCities.has(b))

  return (
    <>
      <Nav/>
      <Hero/>
      <Experiencia/>
      <BrandBanner/>
      <Tarifas/>
      <RoutesMapInteractive cities={cities} routes={routes}/>
      <Reviews/>
      <Espera/>
      <Directos/>
      <Servicios/>
      <Pagos/>
      <Newsletter/>
      <Footer/>
    </>
  )
}
