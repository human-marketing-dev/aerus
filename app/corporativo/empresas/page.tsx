import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Soluciones para empresas | Aerus' }

export default function EmpresasPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pg-wip">
          <div className="container">
            <div className="eyebrow">Corporativo</div>
            <h1 className="section-headline">Soluciones para empresas</h1>
            <p className="pg-wip-note">Esta página estará disponible próximamente.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
