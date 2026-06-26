import React from 'react'

interface IconProps {
  name: string
  size?: number
  stroke?: number
  className?: string
}

export function Icon({ name, size = 18, stroke = 1.5, className = '' }: IconProps) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth: stroke,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className,
  }
  switch (name) {
    case 'arrow-right': return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case 'arrow-left': return <svg {...props}><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    case 'arrow-up-right': return <svg {...props}><path d="M7 17 17 7M8 7h9v9"/></svg>
    case 'arrows-swap': return <svg {...props}><path d="M7 7h14M21 7l-3-3M21 7l-3 3M17 17H3M3 17l3-3M3 17l3 3"/></svg>
    case 'search': return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
    case 'user': return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
    case 'menu': return <svg {...props}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    case 'plane': return <svg {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.2.6-.6.5-1.1Z"/></svg>
    case 'plane-takeoff': return <svg {...props}><path d="M2 22h20M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3 3.59-.7a3.62 3.62 0 0 1 3.4 5.5 3.62 3.62 0 0 1-2.1 1.55Z"/></svg>
    case 'calendar': return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
    case 'users': return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'luggage': return <svg {...props}><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"/><path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14M10 20h4M6 20v2M18 20v2"/></svg>
    case 'wifi': return <svg {...props}><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
    case 'snack': return <svg {...props}><path d="M3 11h18l-2 9H5l-2-9zM12 11V4a3 3 0 0 1 6 0"/></svg>
    case 'chair': return <svg {...props}><path d="M6 19v2M18 19v2M4 9V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4M4 19h16l-2-10H6Z"/></svg>
    case 'ticket': return <svg {...props}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/></svg>
    case 'shield': return <svg {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
    case 'check': return <svg {...props}><path d="M20 6 9 17l-5-5"/></svg>
    case 'x': return <svg {...props}><path d="M18 6 6 18M6 6l12 12"/></svg>
    case 'circle-check': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
    case 'phone': return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>
    case 'mail': return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>
    case 'pin': return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
    case 'bot': return <svg {...props}><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>
    case 'x-mark': return <svg {...props}><path d="M5 5l14 14M19 5L5 19"/></svg>
    case 'lock': return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    case 'fb': return <svg {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    case 'ig': return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>
    case 'in': return <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    case 'globe': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/></svg>
    case 'clock': return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    case 'swap': return <svg {...props}><path d="M16 3 21 8l-5 5M21 8H8M8 21l-5-5 5-5M3 16h13"/></svg>
    case 'support': return <svg {...props}><path d="M21 12a9 9 0 1 0-18 0v6a3 3 0 0 0 3 3h1v-9H4M21 12v6a3 3 0 0 1-3 3h-1v-9h4"/></svg>
    case 'credit-card': return <svg {...props}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
    case 'cash': return <svg {...props}><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
    case 'x-deco': return (
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
        <path d="M20 20 L80 80 M80 20 L20 80"/>
      </svg>
    )
    default: return <svg {...props}/>
  }
}
