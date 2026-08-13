import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import type { CSSProperties, MouseEvent, ReactNode } from 'react'

type ProfitCardProps = {
  percentage: number
  label: string
  description: string
  accent: string
  index: number
  featured?: boolean
  icon: ReactNode
}

export default function ProfitCard({ percentage, label, description, accent, index, featured = false, icon }: ProfitCardProps) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), { stiffness: 180, damping: 22 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 22 })

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 1000, '--impact-accent': accent } as CSSProperties}
      className={`impact-card group relative overflow-hidden border border-white/10 bg-[#0b0d12]/90 transition-[border-color,box-shadow] duration-500 hover:border-white/25 ${featured ? 'min-h-[390px] p-7 sm:p-10 lg:min-h-full' : 'min-h-[190px] p-6 sm:p-7'}`}
    >
      <div className="impact-card-grid absolute inset-0 opacity-30 transition-transform duration-700 group-hover:-translate-y-2" />
      <div className="absolute inset-x-0 top-0 h-px opacity-80" style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
      <div className="relative flex items-start justify-between gap-5">
        <span className="impact-icon grid h-11 w-11 place-items-center border border-white/10 bg-white/[.04]" style={{ color: accent }}>{icon}</span>
        <span className="text-[9px] font-medium tracking-[.24em] text-white/35">WEEKLY FLOW // 0{index + 1}</span>
      </div>
      <div className={`relative ${featured ? 'mt-20 sm:mt-24' : 'mt-8'}`}>
        <div className="flex items-start gap-1">
          <span className={`${featured ? 'text-8xl sm:text-[128px]' : 'text-6xl sm:text-7xl'} font-medium leading-[.72] tracking-[-.08em] text-white transition-transform duration-500 group-hover:-translate-y-1`}>{percentage}</span>
          <span className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} font-medium leading-none`} style={{ color: accent }}>%</span>
        </div>
        <h3 className={`${featured ? 'mt-8 text-2xl sm:text-3xl' : 'mt-5 text-lg'} font-medium tracking-[-.035em] text-white`}>{label}</h3>
        <p className={`${featured ? 'mt-4 max-w-lg text-sm leading-7 sm:text-base' : 'mt-3 max-w-md text-xs leading-6'} text-muted`}>{description}</p>
      </div>
      <span className="absolute bottom-5 right-5 h-2 w-2 rotate-45" style={{ backgroundColor: accent, boxShadow: `0 0 18px ${accent}` }} />
    </motion.div>
  )
}
