import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { contactHero } from '@/data/contact'

/** Figma: Hero (5:1771) — centred title and lead, on the white page ground. */
export function ContactHero() {
  return (
    <Section className="pt-10 sm:pt-[73px]">
      <Heading
        as="h1"
        size="display"
        align="center"
        title={contactHero.title}
        body={contactHero.body}
        className="mx-auto max-w-[601px]"
        bodyGap="mt-[12px]"
      />
    </Section>
  )
}
