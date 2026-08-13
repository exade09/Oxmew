import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import OxmewLogo from './OxmewLogo'
import SocialIcons from './SocialIcons'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setIsMobileMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey) }
  }, [isMobileMenuOpen])

  return (
    <motion.header initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-7 lg:px-10">
      <div className="nav-shell mx-auto flex h-16 max-w-[1500px] items-center justify-between border border-white/10 bg-[#090a0e]/75 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
        <OxmewLogo />
        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-10 md:flex" aria-label="Primary navigation">
          <a className="nav-link" href="#about">Story</a><a className="nav-link" href="#impact">Impact</a>
        </nav>
        <div className="hidden md:block"><SocialIcons /></div>
        <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
          className="relative z-50 grid h-10 w-10 place-items-center border border-white/10 bg-white/[.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink md:hidden">
          <span className="relative block h-4 w-5">
            <span className={`hamburger top-0 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`hamburger top-[7px] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`hamburger top-[14px] ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>
      <MobileMenu open={isMobileMenuOpen} close={() => setIsMobileMenuOpen(false)} />
    </motion.header>
  )
}
