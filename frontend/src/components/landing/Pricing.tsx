import { useState } from 'react'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
    <section className="bg-cloud pb-[178px] pt-[147px]">
      <Container>
        <SectionHeading title={pricing.title} body={pricing.body} />

        <div className="mt-[76px]">
          <BillingToggle yearly={yearly} onChange={setYearly} />
        </div>

        <div className="mt-[128px] grid justify-items-center gap-[42px] md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              price={yearly ? String(Math.round(Number(plan.price) * 0.75)) : plan.price}
              cadence={yearly ? 'billed yearly' : plan.cadence}
            />
          ))}
        </div>

        <div className="mt-[163px]">
          <Testimonials />
        </div>
      </Container>
    </section>
  )
}
