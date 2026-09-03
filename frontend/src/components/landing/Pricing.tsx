import { useState } from 'react'

import { Section } from '@/components/ui/Section'
import { CardRail } from '@/components/ui/CardRail'
import { Heading } from '@/components/ui/Heading'
import { BillingToggle } from './BillingToggle'
import { PricingCard } from './PricingCard'
import { Testimonials } from './Testimonials'
import { plans, pricing } from '@/data/landing'

/**
 * Figma: Pricing (1:1004). The design only specifies monthly figures alongside a
 * "Save 25%" badge, so yearly billing applies that 25% to the monthly rate.
 */
export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <Section tone="cloud" className="py-20 sm:pb-[178px] sm:pt-[147px]">
      <Heading
        align="center"
        title={pricing.title}
        body={pricing.body}
        className="mx-auto max-w-[1030px]"
        bodyGap="mt-[18px]"
        bodyClassName="max-w-[789px]"
      />

      <div className="mt-10 sm:mt-[76px]">
        <BillingToggle yearly={yearly} onChange={setYearly} />
      </div>

      <CardRail
        className="mt-14 sm:mt-[76px] md:mx-0 md:grid md:grid-cols-2 md:justify-items-center md:gap-[42px] md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        itemClassName="flex w-[85%] max-w-[467px] md:w-full md:max-w-none"
      >
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            price={yearly ? String(Math.round(Number(plan.price) * 0.75)) : plan.price}
            cadence={yearly ? 'billed yearly' : plan.cadence}
          />
        ))}
      </CardRail>

      <div className="mt-20 sm:mt-[120px]">
        <Testimonials />
      </div>
    </Section>
  )
}
