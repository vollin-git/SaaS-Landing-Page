import { useState } from 'react'

import { Section } from '@/components/ui/Section'
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
        bodyClassName="max-w-[810px]"
      />

      <div className="mt-10 sm:mt-[76px]">
        <BillingToggle yearly={yearly} onChange={setYearly} />
      </div>

      <div className="mt-14 grid justify-items-center gap-[42px] sm:mt-[128px] md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
            price={yearly ? String(Math.round(Number(plan.price) * 0.75)) : plan.price}
            cadence={yearly ? 'billed yearly' : plan.cadence}
          />
        ))}
      </div>

      <div className="mt-20 sm:mt-[163px]">
        <Testimonials />
      </div>
    </Section>
  )
}
