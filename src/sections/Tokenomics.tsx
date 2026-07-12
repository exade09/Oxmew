import { motion } from 'motion/react'
import LowPolyBackdrop from '../components/LowPolyBackdrop'
import TokenCard from '../components/TokenCard'
import { siteConfig } from '../config'

export default function Tokenomics() {
  const items = [
    { label: 'TICKER', value: siteConfig.ticker, accent: '#FF2AA3' },
    { label: 'BLOCKCHAIN', value: siteConfig.blockchain.toUpperCase(), accent: '#19C7FF' },
    { label: 'SUPPLY', value: siteConfig.supply, accent: '#8BFF5A' },
  ]
  return (
    <section id="tokenomics" className="relative scroll-mt-20 overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <LowPolyBackdrop mood="tunnel" />
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="section-kicker">TOKENOMICS</p><h2 className="mt-5 text-5xl font-medium tracking-[-.055em] sm:text-6xl lg:text-7xl">Simple by design</h2></div>
          <p className="text-sm tracking-wide text-muted">One cat one chain one billion signals</p>
        </motion.div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => <div key={item.label} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}><TokenCard {...item} index={index} /></div>)}
        </div>
        <div className="mt-6 flex items-center gap-4 text-[9px] tracking-[.22em] text-white/35"><span className="h-px flex-1 bg-white/10" /><span>O // X // 1B</span></div>
      </div>
    </section>
  )
}
