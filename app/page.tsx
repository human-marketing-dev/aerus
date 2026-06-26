import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experiencia from '@/components/Experiencia'
import Tarifas from '@/components/Tarifas'
import BrandBanner from '@/components/BrandBanner'
import RoutesMap from '@/components/RoutesMap'
import Reviews from '@/components/Reviews'
import Espera from '@/components/Espera'
import Directos from '@/components/Directos'
import Servicios from '@/components/Servicios'
import Pagos from '@/components/Pagos'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Experiencia/>
      <BrandBanner/>
      <Tarifas/>
      <RoutesMap/>
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
