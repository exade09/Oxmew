import { AnimatePresence, motion } from 'motion/react'
import OxmewLogo from './OxmewLogo'
import SocialIcons from './SocialIcons'

export default function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .35 }}
          className="fixed inset-0 z-40 flex flex-col bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,42,163,.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(25,199,255,.12),transparent_35%)]" />
          <div className="relative"><OxmewLogo large /></div>
          <nav className="relative mt-16 flex flex-col border-y border-white/10 py-7" aria-label="Mobile navigation">
            {['About', 'Tokenomics'].map((item, index) => (
              <motion.a key={item} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .1 + index * .08 }}
                href={`#${item.toLowerCase()}`} onClick={close} className="py-4 text-4xl font-medium tracking-[-.04em] text-white transition hover:text-green focus-visible:outline-none focus-visible:text-pink">{item}</motion.a>
            ))}
          </nav>
          <div className="relative mt-auto"><p className="mb-4 text-[10px] tracking-[.26em] text-muted">FOLLOW THE SIGNAL</p><SocialIcons mobile onNavigate={close} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
