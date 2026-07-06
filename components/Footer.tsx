import Link from 'next/link'
import { Icon } from './icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <div className="brand">
            <img src="/logo-lockup-inverse.svg" alt="Aerus"/>
            <p>Aerolínea mexicana enfocada en la agilidad, la flexibilidad y la innovación. Reimagina la nueva forma de moverse.</p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><Icon name="fb" size={16}/></a>
              <a href="#" aria-label="Instagram"><Icon name="ig" size={16}/></a>
              <a href="#" aria-label="LinkedIn"><Icon name="in" size={16}/></a>
            </div>
          </div>
          <div>
            <h5>Volar</h5>
            <ul>
              <li><Link href="/reservar/">Reservar vuelo</Link></li>
              <li><Link href="/reservar/tarifas/">Tarifas y familias</Link></li>
              <li><Link href="/check-in/">Web check-in</Link></li>
              <li><Link href="/mi-vuelo/">Mi vuelo</Link></li>
              <li><Link href="/mi-vuelo/">Cambios y cancelaciones</Link></li>
            </ul>
          </div>
          <div>
            <h5>Destinos y rutas</h5>
            <ul>
              <li><Link href="/destinos/">Destinos</Link></li>
              <li><Link href="/rutas/">Rutas</Link></li>
              <li><Link href="/rutas/conexiones-viva-aerobus/">Conexiones Viva Aerobus</Link></li>
            </ul>
          </div>
          <div>
            <h5>Corporativo</h5>
            <ul>
              <li><Link href="/corporativo/">Corporativo</Link></li>
              <li><Link href="/corporativo/charter/">Aerus Charter</Link></li>
              <li><Link href="/corporativo/flight-pass/">Aerus Flight Pass</Link></li>
              <li><Link href="/corporativo/empresas/">Soluciones para empresas</Link></li>
            </ul>
          </div>
          <div>
            <h5>La aerolínea</h5>
            <ul>
              <li><Link href="/experiencia/">Experiencia Aerus</Link></li>
              <li><Link href="/nosotros/">Nosotros</Link></li>
              <li><Link href="/nosotros/prensa/">Sala de prensa</Link></li>
              <li><Link href="/mro/">MRO</Link></li>
              <li><Link href="/mro/capacidades/">Capacidades y certificaciones</Link></li>
            </ul>
          </div>
          <div>
            <h5>Ayuda</h5>
            <ul>
              <li><Link href="/ayuda/">Centro de ayuda</Link></li>
              <li><Link href="/ayuda/faq/">Preguntas frecuentes</Link></li>
              <li><Link href="/ayuda/documentos-para-viajar/">Documentos para viajar</Link></li>
              <li><Link href="/ayuda/equipaje/">Equipaje</Link></li>
              <li><Link href="/ayuda/requerimientos-especiales/">Requerimientos especiales</Link></li>
              <li><Link href="/ayuda/viajar-con-mascota/">Viajar con mascota</Link></li>
              <li><Link href="/ayuda/facturacion/">Facturación</Link></li>
              <li><Link href="/ayuda/contacto/">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="contacts">
          <div className="item">
            <div className="ico"><Icon name="phone" size={16}/></div>
            <div>
              <div className="lab">México</div>
              <div className="val">+52 (812) 682·3501</div>
              <div className="sub">Lun–Dom · 06:00 – 22:00 hrs</div>
            </div>
          </div>
          <div className="item">
            <div className="ico"><Icon name="phone" size={16}/></div>
            <div>
              <div className="lab">Estados Unidos</div>
              <div className="val">+1 (866) 691·0179</div>
              <div className="sub">Llamada gratuita desde EE. UU.</div>
            </div>
          </div>
          <div className="item">
            <div className="ico"><Icon name="bot" size={16}/></div>
            <div>
              <div className="lab">Asistente IA · 24 hrs</div>
              <div className="val">+52 (814) 170·1702</div>
              <div className="sub">WhatsApp y SMS · todos los días</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>© 2026 Aerus. Todos los derechos reservados. Descubre el futuro™</div>
          <div className="legal">
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Cookies</a>
          </div>
          <div className="address">
            Aeropuerto Internacional de Monterrey, N.L. · Carretera Miguel Alemán, Km 24, Apodaca, Nuevo León · C.P. 66600
          </div>
        </div>
      </div>
    </footer>
  )
}
