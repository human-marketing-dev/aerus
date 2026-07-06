import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Requerimientos especiales | Aerus' }

export default function RequerimientosEspecialesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">Ayuda</div>
            <h1 className="section-headline">Requerimientos especiales</h1>
            <p className="pg-wip-note">Esta página estará disponible próximamente.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
