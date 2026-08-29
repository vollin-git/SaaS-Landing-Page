import rule from '@/assets/icons/rule-logos.svg'

import { Container } from '@/components/ui/Container'
import { ClientLogo } from '@/components/ui/ClientLogo'
import { clientLogos } from '@/data/landing'

/** Figma: Logos (1:1114) — the rule below runs full-bleed, past the container. */
export function LogoCloud() {
  return (
    <section className="bg-white pt-[98px]">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-8">
          {clientLogos.map((logo) => (
            <ClientLogo key={logo.name} {...logo} />
          ))}
        </div>
      </Container>
      <img src={rule} alt="" aria-hidden="true" className="mt-[95px] h-px w-full" />
    </section>
  )
}
