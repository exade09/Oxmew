import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { CSSProperties, MouseEvent } from 'react'

export default function TokenCard({ label, value, accent, index }: { label: string; value: string; accent: string; index: number }) {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-.5, .5], [5, -5]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(mx, [-.5, .5], [-6, 6]), { stiffness: 180, damping: 22 })
  const move = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const box = event.currentTarget.getBoundingClientRect()
    mx.set((event.clientX - box.left) / box.width - .5); my.set((event.clientY - box.top) / box.height - .5)
  }
  const reset = () => { mx.set(0); my.set(0) }
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ delay: index * .08, duration: .65, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={move} onMouseLeave={reset} style={{ rotateX, rotateY, transformPerspective: 900, '--accent': accent } as CSSProperties}
      className="token-card group relative min-h-52 overflow-hidden border border-white/10 bg-[#0b0d12]/85 p-6 transition-[border-color,box-shadow] duration-500 hover:border-white/25 sm:p-8">
      <div className="token-poly absolute -right-8 -top-10 h-40 w-40 opacity-20 transition-transform duration-700 group-hover:-translate-x-3 group-hover:translate-y-2 group-hover:rotate-6" />
      <div className="absolute inset-x-0 top-0 h-px opacity-70" style={{ background: `linear-gradient(90deg,transparent,${accent},transparent)` }} />
      <p className="text-[10px] font-medium tracking-[.25em] text-muted">{label}</p>
      <p className="absolute bottom-7 left-6 text-5xl font-medium tracking-[-.06em] text-white transition-transform duration-500 group-hover:-translate-y-1 sm:left-8 sm:text-6xl">{value}</p>
      <span className="absolute bottom-7 right-7 h-2 w-2 rotate-45" style={{ backgroundColor: accent, boxShadow: `0 0 18px ${accent}` }} />
    </motion.div>
  )
}
