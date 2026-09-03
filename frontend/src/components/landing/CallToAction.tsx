import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'
import { Button } from '@/components/ui/Button'
import { callToAction } from '@/data/landing'

/**
 * Closing CTA. Not in the Figma file — composed from the design system to sit
 * between the cloud pricing band and the ink footer, so the page steps
 * cloud → brand → ink rather than butting two flat grounds together.
 */
export function CallToAction() {
  return (
    <Section tone="brand" className="py-16 sm:py-[104px]">
      <Heading
        as="h2"
        align="center"
        tone="white"
        title={callToAction.title}
        body={callToAction.body}
        className="mx-auto max-w-[720px]"
        // Heading's white tone dims the lead to 65%, which is ~4.1:1 on the brand
        // ground — under AA for 19px text. 80% takes it to ~5.4:1.
        bodyClassName="max-w-[560px] opacity-80"
      />

      <div className="mt-9 flex justify-center sm:mt-10">
        <Button variant="inverse" size="lg" className="h-14 sm:h-[76px]">
          {callToAction.cta}
        </Button>
      </div>
    </Section>
  )
}
