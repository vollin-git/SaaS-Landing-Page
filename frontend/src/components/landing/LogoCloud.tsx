import rule from '@/assets/icons/rule-logos.svg'

import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ClientLogo } from '@/components/ui/ClientLogo'
import { clientLogos } from '@/data/landing'

/** Figma: Logos (1:1114) — the rule below runs full-bleed, past the container. */
export function LogoCloud() {
  return (
    <Section bleed className="pt-14 sm:pt-[98px]">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:justify-between sm:gap-x-10">
          {clientLogos.map((logo) => (
            <ClientLogo key={logo.name} {...logo} />
          ))}
        </div>
      </Container>
      <img src={rule} alt="" aria-hidden="true" className="mt-14 h-px w-full sm:mt-[95px]" />
    </Section>
  )
}
