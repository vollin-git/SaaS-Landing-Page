import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactMap } from '@/components/contact/ContactMap'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader variant="solid" />

      <main>
        <ContactHero />

        <Section bleed className="relative">
          <Container className="relative z-10">
            <div className="flex flex-wrap justify-center gap-x-[78px] gap-y-12 pb-12 pt-12 lg:pb-[159px] lg:pt-[97px]">
              <ContactForm />
              <ContactInfo />
            </div>
          </Container>

          {/*
            From lg up the card overhangs the map, exactly as drawn. Below that
            the map moves into normal flow underneath — stacked, the contact
            details would otherwise sit on the map artwork and be unreadable.
          */}
          <div className="z-0 lg:absolute lg:inset-x-0 lg:bottom-0">
            <ContactMap />
          </div>
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}
