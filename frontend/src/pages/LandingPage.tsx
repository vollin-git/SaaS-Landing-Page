import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Hero } from '@/components/landing/Hero'
import { LogoCloud } from '@/components/landing/LogoCloud'
import { Features } from '@/components/landing/Features'
import { ContentTrack } from '@/components/landing/ContentTrack'
import { ContentVisitors } from '@/components/landing/ContentVisitors'
import { ContentServices } from '@/components/landing/ContentServices'
import { Pricing } from '@/components/landing/Pricing'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* The header floats over the dark hero, so both share one stacking context. */}
      <div className="relative">
        <SiteHeader />
        <Hero />
      </div>

      <main>
        <LogoCloud />
        <Features />
        <ContentTrack />
        <ContentVisitors />
        <ContentServices />
        <Pricing />
      </main>

      <SiteFooter />
    </div>
  )
}
