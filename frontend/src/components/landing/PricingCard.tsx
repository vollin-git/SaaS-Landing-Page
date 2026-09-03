import { Button } from '@/components/ui/Button'
import { PlanFeature } from '@/components/ui/PlanFeature'
import { pricing, type Plan } from '@/data/landing'

/** Figma: pricing card (1:1009 / 1:1022 / 1:1035). */
export function PricingCard({ plan, price, cadence }: { plan: Plan; price: string; cadence: string }) {
  return (
    <div className="flex w-full min-w-0 max-w-[467px] flex-col rounded-card border border-hairline bg-white px-6 pb-8 pt-8 sm:px-[66px] sm:pb-[62px] sm:pt-[72px]">
      <p className="text-eyebrow font-bold uppercase text-brand">{plan.name}</p>

      <p className="mt-6 font-bold tracking-[-0.8px] text-ink sm:mt-10">
        <span className="text-[18px] leading-[46px] sm:text-[24px] sm:leading-[65px]">$</span>
        <span className="text-[40px] leading-[46px] tracking-[-1.2px] sm:text-display sm:leading-[65px]">{price}</span>
        <span className="ml-2 font-numeric text-small font-normal tracking-[-0.0944px] sm:text-body">/ month</span>
      </p>

      <p className="mt-2 text-small text-ink opacity-70 sm:mt-[11px]">{cadence}</p>

      <ul className="mt-5 space-y-5 sm:mt-6 sm:space-y-[37px]">
        {plan.features.map((feature) => (
          <PlanFeature key={feature.label} {...feature} />
        ))}
      </ul>

      <p className="mt-6 text-small text-ink opacity-70 sm:mt-[31px]">{pricing.note}</p>

      {/* mt-auto on the wrapper pins every CTA to the card floor, so the
          buttons stay aligned even if a plan gains or loses a feature. */}
      <div className="mt-auto pt-7 sm:pt-[31px]">
        <Button
          variant={plan.featured ? 'solid' : 'soft'}
          size="lg"
          withArrow
          className="h-14 w-[274.5px] max-w-full sm:h-[76px]"
        >
          {pricing.cta}
        </Button>
      </div>
    </div>
  )
}
