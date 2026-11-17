// Textos de la página "Contacto" (/ayuda/contacto).
// Se editan en Sanity (Páginas → Ayuda → Contacto); esto es el respaldo y la fuente de la
// carga inicial. Mismas claves que el esquema sanity/schemaTypes/pages/ayuda-contacto.ts.
// Las redes sociales no están aquí: salen de Configuración general (las mismas del footer).
import type { PageDefaults, PageSeo } from '@/lib/content'

type Canal = {
  icono: string
  label: string
  valor: string
  detalle: string
  href: string
  cta: string
  destacado: boolean
}

type HorarioFila = { dias: string; horas: string }

export type AyudaContactoContent = {
  seo: PageSeo
  crumb: string
  eyebrow: string
  titleA: string
  titleB: string
  intro: string
  canales: Canal[]
  socialEyebrow: string
  socialTitle: string
  socialDesc: string
  hoursEyebrow: string
  hoursTitle: string
  horarios: HorarioFila[]
  specialNote: string
}

const es: AyudaContactoContent = {
  seo: {
    metaTitle: 'Contacto | Aerus',
    metaDescription:
      'Comunícate con Aerus por teléfono, WhatsApp, correo electrónico o redes sociales. Estamos disponibles para ayudarte.',
  },
  crumb: 'Contacto',
  eyebrow: 'Atención a clientes',
  titleA: '¿En qué podemos',
  titleB: 'ayudarte?',
  intro: 'Elige el canal que prefieras. Nuestro equipo está listo para atenderte.',
  canales: [
    {
      icono: 'phone',
      label: 'México',
      valor: '+52 (812) 682·3501',
      detalle: 'Lun–Dom · 06:00 – 22:00 hrs',
      href: 'tel:+528126823501',
      cta: 'Llamar',
      destacado: false,
    },
    {
      icono: 'phone',
      label: 'Estados Unidos',
      valor: '+1 (866) 691·0179',
      detalle: 'Llamada gratuita · Lun–Dom · 06:00 – 22:00 hrs',
      href: 'tel:+18666910179',
      cta: 'Llamar',
      destacado: false,
    },
    {
      icono: 'bot',
      label: 'Asistente IA · WhatsApp',
      valor: '+52 (814) 170·1702',
      detalle: 'Disponible 24 hrs · todos los días',
      href: 'https://wa.me/528141701702',
      cta: 'Abrir WhatsApp',
      destacado: true,
    },
    {
      icono: 'mail',
      label: 'Correo electrónico',
      valor: 'contacto@aerus.mx',
      detalle: 'Respuesta en 24–48 horas hábiles',
      href: 'mailto:contacto@aerus.mx',
      cta: 'Enviar correo',
      destacado: false,
    },
  ],
  socialEyebrow: 'Redes sociales',
  socialTitle: 'Síguenos',
  socialDesc: 'También puedes escribirnos por mensaje directo en nuestras redes sociales.',
  hoursEyebrow: 'Horarios',
  hoursTitle: 'Disponibilidad',
  horarios: [
    { dias: 'Lunes – Domingo', horas: '06:00 – 22:00 hrs' },
    { dias: 'Asistente IA · WhatsApp', horas: '24 hrs · todos los días' },
    { dias: 'Correo electrónico', horas: 'Respuesta en 24–48 hrs hábiles' },
  ],
  specialNote:
    'Para requerimientos especiales (menores no acompañados, movilidad reducida, animales de servicio) contacta con al menos 48 horas de anticipación a tu vuelo.',
}

const en: AyudaContactoContent = {
  seo: {
    metaTitle: 'Contact Us | Aerus',
    metaDescription:
      'Reach Aerus by phone, WhatsApp, email or social media. We’re here to help.',
  },
  crumb: 'Contact',
  eyebrow: 'Customer service',
  titleA: 'How can we',
  titleB: 'help you?',
  intro: 'Choose the channel you prefer. Our team is ready to assist you.',
  canales: [
    {
      icono: 'phone',
      label: 'Mexico',
      valor: '+52 (812) 682·3501',
      detalle: 'Mon–Sun · 6:00 am – 10:00 pm',
      href: 'tel:+528126823501',
      cta: 'Call',
      destacado: false,
    },
    {
      icono: 'phone',
      label: 'United States',
      valor: '+1 (866) 691·0179',
      detalle: 'Toll-free · Mon–Sun · 6:00 am – 10:00 pm',
      href: 'tel:+18666910179',
      cta: 'Call',
      destacado: false,
    },
    {
      icono: 'bot',
      label: 'AI assistant · WhatsApp',
      valor: '+52 (814) 170·1702',
      detalle: 'Available 24/7 · every day',
      href: 'https://wa.me/528141701702',
      cta: 'Open WhatsApp',
      destacado: true,
    },
    {
      icono: 'mail',
      label: 'Email',
      valor: 'contacto@aerus.mx',
      detalle: 'Reply within 24–48 business hours',
      href: 'mailto:contacto@aerus.mx',
      cta: 'Send email',
      destacado: false,
    },
  ],
  socialEyebrow: 'Social media',
  socialTitle: 'Follow us',
  socialDesc: 'You can also send us a direct message on our social media channels.',
  hoursEyebrow: 'Hours',
  hoursTitle: 'Availability',
  horarios: [
    { dias: 'Monday – Sunday', horas: '6:00 am – 10:00 pm' },
    { dias: 'AI assistant · WhatsApp', horas: '24/7 · every day' },
    { dias: 'Email', horas: 'Reply within 24–48 business hours' },
  ],
  specialNote:
    'For special assistance (unaccompanied minors, reduced mobility, service animals), please contact us at least 48 hours before your flight.',
}

const defaults: PageDefaults<AyudaContactoContent> = { es, en }
export default defaults
