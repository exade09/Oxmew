import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './sections/About'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Impact from './sections/Impact'

export default function App() {
  const [loading, setLoading] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => {
    const ready = () => setLoading(false)
    if (document.readyState === 'complete') ready()
    else window.addEventListener('load', ready, { once: true })
    const fallback = window.setTimeout(ready, 1400)
    return () => { window.removeEventListener('load', ready); window.clearTimeout(fallback) }
  }, [])
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink font-sans text-soft antialiased selection:bg-pink selection:text-white">
      <AnimatePresence>{loading && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .45 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink"><div className="loader-mark text-sm tracking-[.4em]">O<span className="text-pink">X</span>MEW</div></motion.div>}</AnimatePresence>
      <div className="noise fixed inset-0 z-[60] pointer-events-none" aria-hidden="true" /><div className="vignette fixed inset-0 z-[59] pointer-events-none" aria-hidden="true" />
      <Header /><main><Hero /><About /><Impact /></main><Footer />
    </div>
  )
}
