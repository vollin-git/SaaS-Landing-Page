import rule from '@/assets/icons/rule-logos.svg'

import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ClientLogo } from '@/components/ui/ClientLogo'
import { CardRail } from '@/components/ui/CardRail'
import { clientLogos } from '@/data/landing'

/** Figma: Logos (1:1114) — the rule below runs full-bleed, past the container. */
export function LogoCloud() {
  return (
    <Section bleed className="pt-14 sm:pt-[98px]">
      <Container>
        <CardRail
          className="items-center md:mx-0 md:flex-wrap md:justify-between md:gap-x-10 md:gap-y-8 md:overflow-visible md:px-0 md:pb-0"
          itemClassName="flex w-auto items-center"
        >
          {clientLogos.map((logo) => (
            <ClientLogo key={logo.name} {...logo} />
          ))}
        </CardRail>
      </Container>
      <img src={rule} alt="" aria-hidden="true" className="mt-14 h-px w-full sm:mt-[95px]" />
    </Section>
  )
}
