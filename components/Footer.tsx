import { Icon } from './icons'

export default function Footer() {
  return (
    <footer className="footer" id="ayuda">
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
            <h5>Mi reservación</h5>
            <ul>
              <li><a href="#">Consulta tu reservación</a></li>
              <li><a href="#">Web check-in</a></li>
              <li><a href="#">Cambios y cancelaciones</a></li>
              <li><a href="#">Estatus de vuelo</a></li>
            </ul>
          </div>
          <div>
            <h5>Ayuda</h5>
            <ul>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Facturación</a></li>
              <li><a href="#">Legales</a></li>
              <li><a href="#">Aviso de privacidad</a></li>
            </ul>
          </div>
          <div>
            <h5>Nosotros</h5>
            <ul>
              <li><a href="#">Aerus MRO</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Alianzas</a></li>
              <li><a href="#">Sala de prensa</a></li>
              <li><a href="#">Bolsa de trabajo</a></li>
            </ul>
          </div>
          <div>
            <h5>Atención a clientes</h5>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Programa Aerus Vital</a></li>
              <li><a href="#">Personas con discapacidad</a></li>
              <li><a href="#">Grupos y empresas</a></li>
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
