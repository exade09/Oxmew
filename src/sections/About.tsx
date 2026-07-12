import { motion } from 'motion/react'
import LowPolyBackdrop from '../components/LowPolyBackdrop'
import SceneSelector from '../components/SceneSelector'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <LowPolyBackdrop mood="blue" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_.97fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="about-frame relative aspect-[4/5] overflow-hidden border border-white/10">
              <img src="/images/oxmew-blue-ascent.png" alt="Oxmew ascending through a blue low poly escalator interior" width="1122" height="1402" loading="lazy" decoding="async" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-blue/10" />
              <span className="absolute bottom-5 left-5 text-[9px] tracking-[.23em] text-white/70">ASCENT // 01</span>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border border-cyan/20" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8, delay: .1, ease: [0.22, 1, 0.36, 1] }}>
            <p className="section-kicker">ABOUT OXMEW</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.05em] sm:text-5xl lg:text-6xl">Somewhere between the tunnel and the neon skyline</h2>
            <div className="mt-8 max-w-xl space-y-4 text-sm leading-7 text-muted sm:text-base">
              <p>Marked by O and X, Oxmew moves through silent stations, dark tunnels, and glowing streets</p>
              <p>No map leads to it and no signal explains where it came from</p>
              <p className="text-white">It simply appeared on Solana and kept walking</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">{['LOW POLY', 'NIGHT WALKER', 'O X IDENTITY', 'SOLANA'].map(tag => <span key={tag} className="border border-white/10 bg-white/[.03] px-3 py-2 text-[9px] tracking-[.2em] text-white/70">{tag}</span>)}</div>
          </motion.div>
        </div>
        <SceneSelector />
      </div>
    </section>
  )
}
