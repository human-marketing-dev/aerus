import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Métodos de pago | Aerus' }

export default function MetodosDePagoPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">Reservar</div>
            <h1 className="section-headline">Métodos de pago</h1>
            <p className="pg-wip-note">Esta página estará disponible próximamente.</p>
          </div>
        </section>
      </main>
      <Newsletter/>
      <Footer />
    </>
  )
}
