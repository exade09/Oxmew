import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { scenes } from '../data/scenes'

export default function SceneSelector() {
  const [activeId, setActiveId] = useState<(typeof scenes)[number]['id']>(() => (sessionStorage.getItem('oxmew-scene') as (typeof scenes)[number]['id']) || 'city')
  const active = scenes.find((scene) => scene.id === activeId) ?? scenes[0]
  const select = (id: (typeof scenes)[number]['id']) => { setActiveId(id); sessionStorage.setItem('oxmew-scene', id) }

  return (
    <div className="mt-16 border-y border-white/10 py-8 lg:mt-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div><p className="section-kicker">OXMEW FILES</p><h3 className="mt-2 text-2xl font-medium tracking-[-.04em] sm:text-3xl">FOLLOW HIS STORY</h3></div>
        <span className="hidden text-[10px] tracking-[.22em] text-muted sm:block">03 // OPEN CHAPTERS</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-stretch">
        <div className="flex flex-col gap-2" role="tablist" aria-label="Oxmew scenes">
          {scenes.map((scene, index) => {
            const selected = scene.id === activeId
            return <button key={scene.id} role="tab" aria-selected={selected} onClick={() => select(scene.id)} className={`scene-tab group relative flex min-h-16 items-center justify-between overflow-hidden border px-5 text-left transition duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${selected ? 'border-white/20 bg-white/[.07] text-white' : 'border-white/[.07] bg-white/[.02] text-muted hover:border-white/15 hover:text-white'}`}>
              {selected && <motion.span layoutId="scene-indicator" className="absolute inset-y-0 left-0 w-[3px]" style={{ backgroundColor: active.accent, boxShadow: `0 0 18px ${active.accent}` }} />}
              <span className="text-xs font-medium tracking-[.18em]"><span className="mr-4 text-white/30">0{index + 1}</span>{scene.label}</span><span className="text-lg transition-transform group-hover:translate-x-1">↗</span>
            </button>
          })}
          <AnimatePresence mode="wait"><motion.p key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-auto pt-5 text-sm leading-6 text-muted">{active.caption}</motion.p></AnimatePresence>
        </div>
        <div className="scene-viewport relative aspect-[16/10] min-h-0 overflow-hidden border border-white/10 bg-panel" style={{ boxShadow: `0 18px 60px ${active.accent}18` }}>
          <AnimatePresence mode="wait">
            <motion.img key={active.id} src={active.image} alt={active.alt} width="1122" height="1402" loading="lazy" decoding="async"
              initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .985 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: active.position }} />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 border border-white/15 bg-black/50 px-3 py-2 text-[9px] tracking-[.22em] text-white backdrop-blur-md">{active.label}</div>
        </div>
      </div>
    </div>
  )
}
