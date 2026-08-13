import { siteConfig } from '../config'
import { useState } from 'react'
import SoonOverlay from './SoonOverlay'

type Platform = 'pump' | keyof typeof siteConfig.socials

const PumpIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17V7h8.4a4 4 0 0 1 0 8H9v2H5Zm4-6h4.1a1 1 0 0 0 0-2H9v2Z" fill="currentColor"/><path d="m16 16 3-3 2 2-3 3Z" fill="#8BFF5A"/></svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.2l3.7 5.2L17.4 4H19l-5.4 6.4L20 20h-4.2l-4.2-5.9L6.6 20H5l5.8-7.1L5 4Zm3.2 1.5 8.4 13h2L10.2 5.5h-2Z" fill="currentColor"/></svg>
)
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 4.1 17.5 19c-.2 1.1-.8 1.3-1.7.8l-4.4-3.3-2.1 2.1c-.2.2-.4.4-.9.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.5-.2L6.3 13.3 2 11.9c-1-.3-1-.9.2-1.4l16.9-6.6c.8-.3 1.5.2 1.3.2Z" fill="currentColor"/></svg>
)

const icons = { pump: PumpIcon, x: XIcon, telegram: TelegramIcon }
const labels = { pump: 'Pump.fun', x: 'X', telegram: 'Telegram' }
const glows = { pump: 'hover:text-green hover:shadow-[0_0_24px_rgba(139,255,90,.22)]', x: 'hover:text-pink hover:shadow-[0_0_24px_rgba(255,42,163,.22)]', telegram: 'hover:text-cyan hover:shadow-[0_0_24px_rgba(25,199,255,.22)]' }

export default function SocialIcons({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const [isSoonOpen, setIsSoonOpen] = useState(false)

  return (
    <>
      <div className={`flex ${mobile ? 'gap-4' : 'gap-2'}`}>
      {(Object.keys(icons) as Platform[]).map((platform) => {
        const Icon = icons[platform]
        const sharedClassName = `social-frame reflection relative grid ${mobile ? 'h-12 w-12' : 'h-9 w-9'} place-items-center overflow-hidden border border-white/10 bg-white/[.04] text-white transition duration-300 hover:-translate-y-0.5 hover:rotate-3 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${glows[platform]}`

        if (platform === 'pump') {
          return (
            <button key={platform} type="button" onClick={() => setIsSoonOpen(true)}
              aria-label="Open Pump.fun launch notice" title="Pump.fun" data-tooltip="Pump.fun"
              className={sharedClassName}>
              <Icon />
            </button>
          )
        }

        return (
          <a key={platform} href={siteConfig.socials[platform]} target="_blank" rel="noopener noreferrer" onClick={onNavigate}
            aria-label={`Open ${labels[platform]}`} title={labels[platform]} data-tooltip={labels[platform]}
            className={sharedClassName}>
            <Icon />
          </a>
        )
      })}
      </div>
      <SoonOverlay open={isSoonOpen} onClose={() => setIsSoonOpen(false)} />
    </>
  )
}
