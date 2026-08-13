import { ArrowDownRight } from 'lucide-react'
import { motion } from 'motion/react'
import LowPolyBackdrop from '../components/LowPolyBackdrop'
import { usePointerParallax } from '../hooks/usePointerParallax'
import { useTypewriter } from '../hooks/useTypewriter'

const parent = { hidden: {}, visible: { transition: { staggerChildren: .1, delayChildren: .2 } } }
const child = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .75, ease: [0.22, 1, 0.36, 1] as const } } }

export default function Hero() {
  const { displayed, done } = useTypewriter('One eye missing\nNine lives moving')
  const { offset, onPointerMove, onPointerLeave } = usePointerParallax(15)
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-24">
      <LowPolyBackdrop mood="city" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
        <motion.div variants={parent} initial="hidden" animate="visible" className="relative z-10 max-w-2xl">
          <motion.p variants={child} className="section-kicker">SOLANA CAT RESCUE SIGNAL</motion.p>
          <motion.h1 variants={child} className="hero-wordmark mt-4 text-6xl font-medium leading-[.88] tracking-[-.07em] sm:text-7xl lg:text-8xl xl:text-[116px]">OXMEW</motion.h1>
          <motion.h2 variants={child} className="mt-7 min-h-[2em] whitespace-pre-wrap text-4xl font-medium leading-[.96] tracking-[-.05em] sm:text-5xl lg:text-6xl xl:text-[68px]">
            {displayed}{!done && <span className="animate-blink ml-1 inline-block h-[.8em] w-px bg-green align-middle" />}
          </motion.h2>
          <motion.p variants={child} className="mt-7 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">A Solana meme coin built to help shelters give disabled cats another shot at life</motion.p>
          <motion.div variants={child} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="angular-button group bg-white text-black">MEET OXMEW <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
            <a href="#impact" className="angular-button group border border-white/15 bg-white/[.04] text-white">FOLLOW THE FLOW <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .25, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onPointerMove} onMouseLeave={onPointerLeave} className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
          <motion.div animate={{ x: offset.x, y: offset.y }} transition={{ type: 'spring', stiffness: 80, damping: 18 }} className="hero-frame relative aspect-[4/5] w-full">
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="h-full w-full">
              <img src="/images/oxmew-neon-city.png" alt="Oxmew, a black low poly cat with one O eye and one X eye, in a neon city" width="1122" height="1402" decoding="async" fetchPriority="high" className="h-full w-full object-cover object-center" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            <span className="ambient-label -left-2 top-[12%]">O // X</span><span className="ambient-label -right-2 top-[34%]">70% TO SHELTERS</span><span className="ambient-label bottom-[8%] left-[5%]">ONE EYE BRIGHT</span>
          </motion.div>
          <div className="mx-auto h-10 w-4/5 bg-gradient-to-b from-pink/15 to-transparent blur-xl" />
        </motion.div>
      </div>
    </section>
  )
}
