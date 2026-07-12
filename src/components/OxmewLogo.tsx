type Props = { large?: boolean }

export function CatMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M8 23 12 6l15 11h10L52 6l4 17v24L44 58H20L8 47Z" fill="#101219" stroke="currentColor" strokeWidth="2" />
      <path d="m15 13 5 7-8 3m37-10-5 7 8 3" fill="none" stroke="#FF2AA3" strokeWidth="2" />
      <circle cx="25" cy="34" r="7" fill="none" stroke="#F4F5F7" strokeWidth="3.5" />
      <path d="m38 28 10 12m0-12L38 40" stroke="#F4F5F7" strokeWidth="3.5" />
    </svg>
  )
}

export default function OxmewLogo({ large = false }: Props) {
  return (
    <a href="#top" className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink" aria-label="Oxmew home">
      <CatMark className={`${large ? 'h-14 w-14' : 'h-9 w-9'} text-white transition-transform duration-500 group-hover:-rotate-3`} />
      <span className={`wordmark ${large ? 'text-3xl' : 'text-lg'}`}>OXMEW</span>
    </a>
  )
}
