// Gambar gerakan sholat (SVG) ramah anak
const size = 120

export function GerakanSholatSvg({ gerakan, className = '' }) {
  const props = { width: size, height: size, viewBox: '0 0 80 100', className: `gerakan-svg ${className}` }
  switch (gerakan) {
    case 'niat':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="35" r="12" />
          <path d="M32 50 L40 62 L48 50" />
          <ellipse cx="40" cy="85" rx="22" ry="8" />
        </svg>
      )
    case 'takbir':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="28" r="10" />
          <path d="M25 45 L40 55 L55 45" />
          <path d="M25 45 L25 75 M55 45 L55 75" />
          <path d="M20 38 L40 25 L60 38" strokeWidth="2.5" />
          <ellipse cx="40" cy="88" rx="18" ry="6" />
        </svg>
      )
    case 'berdiri':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="22" r="10" />
          <path d="M32 38 L40 32 L48 38 L48 78 L32 78 Z" />
          <rect x="34" y="78" width="12" height="8" rx="1" />
        </svg>
      )
    case 'ruku':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="18" r="8" />
          <path d="M32 32 L40 28 L48 32 L48 52 L40 72 L32 52 Z" />
          <path d="M28 58 L52 58" strokeWidth="2.5" />
          <ellipse cx="40" cy="88" rx="20" ry="6" />
        </svg>
      )
    case 'itidal':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="22" r="10" />
          <path d="M30 38 L40 35 L50 38 L50 78 L30 78 Z" />
          <path d="M38 45 L40 55 L42 45" />
          <ellipse cx="40" cy="88" rx="18" ry="6" />
        </svg>
      )
    case 'sujud':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="62" r="10" />
          <path d="M28 72 L40 78 L52 72 L52 88 L28 88 Z" />
          <path d="M40 45 L40 52" strokeWidth="2" />
          <ellipse cx="40" cy="38" rx="14" ry="8" />
          <path d="M26 38 L54 38" strokeWidth="1.5" />
        </svg>
      )
    case 'duduk_sujud':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="35" r="10" />
          <path d="M30 50 L40 45 L50 50 L52 82 L28 82 Z" />
          <path d="M35 58 L45 58" />
          <ellipse cx="40" cy="90" rx="18" ry="6" />
        </svg>
      )
    case 'tahiyat':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="28" r="10" />
          <path d="M28 42 L40 38 L52 42 L52 82 L28 82 Z" />
          <path d="M40 50 L40 65" strokeWidth="2" />
          <circle cx="40" cy="58" r="3" fill="currentColor" />
          <ellipse cx="40" cy="88" rx="20" ry="6" />
        </svg>
      )
    case 'salam':
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="28" r="10" />
          <path d="M30 42 L40 38 L50 42 L50 78 L30 78 Z" />
          <path d="M20 35 L30 38 M60 35 L50 38" strokeWidth="2" />
          <ellipse cx="40" cy="88" rx="18" ry="6" />
        </svg>
      )
    default:
      return (
        <svg {...props} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="40" cy="35" r="12" />
          <path d="M32 52 L40 60 L48 52" />
          <ellipse cx="40" cy="85" rx="22" ry="8" />
        </svg>
      )
  }
}
