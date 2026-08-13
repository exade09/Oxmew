import OxmewLogo from '../components/OxmewLogo'
import SocialIcons from '../components/SocialIcons'
import { siteConfig } from '../config'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#06070a] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div><OxmewLogo /><p className="mt-4 text-sm text-muted">Every cat deserves another night</p></div>
          <div className="flex items-center gap-6"><div className="text-right text-[9px] leading-5 tracking-[.2em] text-muted"><p>{siteConfig.ticker}</p><p>{siteConfig.blockchain.toUpperCase()}</p></div><SocialIcons /></div>
        </div>
        <div className="mt-8 grid gap-3 border-t border-white/[.07] pt-5 text-[10px] leading-5 text-white/35 sm:grid-cols-2 sm:gap-8">
          <p>Oxmew is a community driven Solana token supporting disabled cat shelters through project profit</p>
          <p className="sm:text-right">Crypto assets involve risk and weekly profit may vary</p>
        </div>
      </div>
    </footer>
  )
}
