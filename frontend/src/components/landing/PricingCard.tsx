import { Button } from '@/components/ui/Button'
import { PlanFeature } from '@/components/ui/PlanFeature'
import { pricing, type Plan } from '@/data/landing'

/** Figma: pricing card (1:1009 / 1:1022 / 1:1035). */
export function PricingCard({ plan, price, cadence }: { plan: Plan; price: string; cadence: string }) {
  return (
    <div className="flex w-full min-w-0 max-w-[467px] flex-col rounded-card border border-hairline bg-white px-6 pb-12 pt-12 sm:px-[66px] sm:pb-[74px] sm:pt-[80px] xl:pt-[193px]">
      <p className="text-eyebrow font-bold uppercase text-brand">{plan.name}</p>

      <p className="mt-10 font-bold tracking-[-0.8px] text-ink">
        <span className="text-[24px] leading-[65px]">$</span>
        <span className="text-display leading-[65px]">{price}</span>
        <span className="ml-2 font-numeric text-body font-normal tracking-[-0.0944px]">/ month</span>
      </p>

      <p className="mt-[11px] text-small text-ink opacity-70">{cadence}</p>

      <ul className="mt-[3px] space-y-[37px] pt-8">
        {plan.features.map((feature) => (
          <PlanFeature key={feature.label} {...feature} />
        ))}
      </ul>

      <p className="mt-[31px] text-small text-ink opacity-70">{pricing.note}</p>

      <Button
        variant={plan.featured ? 'solid' : 'soft'}
        size="lg"
        withArrow
        className="mt-[31px] w-[274.5px] max-w-full"
      >
        {pricing.cta}
      </Button>
    </div>
  )
}
