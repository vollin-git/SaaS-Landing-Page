import { Tag } from '@/components/ui/Tag'
import { pricing } from '@/data/landing'
import { cn } from '@/lib/cn'

/**
 * Figma: "Full toggle" (1:1048). The design ships the switch as a flat vector,
 * so it is rebuilt here as a real control using the same geometry — a 96.42×50.09
 * track (ink @ 15%) carrying a white 28.12×31.88 knob inset 9.37px.
 *
 * Below sm the whole control scales to ~70% (68×36 track, 20×23 knob, inset
 * 6.6px), keeping Figma's proportions but sitting correctly against the 17px
 * labels — at full size it read as an oversized slab next to them and pushed the
 * savings badge onto its own line.
 */
export function BillingToggle({ yearly, onChange }: { yearly: boolean; onChange: (yearly: boolean) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:gap-x-[21px]">
      <span className="text-body text-ink sm:text-lead">{pricing.toggle.monthly}</span>

      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label={`Switch to ${yearly ? 'monthly' : 'yearly'} billing`}
        onClick={() => onChange(!yearly)}
        className="relative h-9 w-[68px] shrink-0 rounded-full bg-ink/15 transition-colors hover:bg-ink/20 sm:h-[50.09px] sm:w-[96.42px] sm:rounded-[16.5px]"
      >
        <span
          className={cn(
            'absolute top-1/2 block -translate-y-1/2 rounded-full bg-white shadow-sm',
            'h-[23px] w-[20px] sm:h-[31.88px] sm:w-[28.12px]',
            'transition-[left] duration-200',
            // Both end positions are plain px. A left:calc(100% - …) class is
            // silently dropped (the % and parens don't survive as a selector),
            // and a conditional translate-x won't compose with the
            // -translate-y-1/2 above — its --tw-translate-x is set but the
            // translate shorthand still resolves x to 0.
            //   on  = track - inset - knob   (68-6.6-20, 96.42-9.37-28.12)
            yearly ? 'left-[41.4px] sm:left-[58.93px]' : 'left-[6.6px] sm:left-[9.37px]',
          )}
        />
      </button>

      <span className="text-body text-ink sm:text-lead">{pricing.toggle.yearly}</span>
      <Tag className="h-[34px] px-3 sm:h-[44px] sm:px-[18px]">{pricing.toggle.badge}</Tag>
    </div>
  )
}
