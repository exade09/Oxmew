import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function SoonOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[120] grid place-items-center bg-black/80 px-5 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="soon-title"
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="soon-panel relative w-full max-w-lg overflow-hidden border border-white/15 bg-[#090b10] px-7 py-12 text-center shadow-[0_30px_100px_rgba(0,0,0,.7)] sm:px-12 sm:py-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(139,255,90,.12),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,42,163,.16),transparent_38%)]" />
            <div className="soon-grid absolute inset-0 opacity-40" />
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center border border-white/10 bg-white/[.04] text-white/60 transition hover:border-green/40 hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Close launch notice"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
            </button>
            <div className="relative">
              <p className="section-kicker">PUMP FUN SIGNAL</p>
              <h2 id="soon-title" className="soon-word mt-5 text-7xl font-medium leading-none tracking-[-.07em] text-white sm:text-8xl">SOON</h2>
              <p className="mx-auto mt-6 max-w-xs text-sm leading-6 text-muted">Launch coordinates are still under wraps</p>
              <div className="mx-auto mt-8 flex w-fit items-center gap-3 text-[9px] tracking-[.24em] text-white/45">
                <span className="h-1.5 w-1.5 rotate-45 bg-green shadow-[0_0_14px_#8BFF5A]" />
                <span>STAY ON SIGNAL</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
