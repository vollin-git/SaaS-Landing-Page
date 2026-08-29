import { Tag } from '@/components/ui/Tag'
import { pricing } from '@/data/landing'

/**
 * Figma: "Full toggle" (1:1048). The design ships the switch as a flat vector,
 * so it is rebuilt here as a real control using the same geometry — 96.42×50.09
 * track (ink @ 15%, 16.5px radius) with a white 28×32 knob.
 */
export function BillingToggle({ yearly, onChange }: { yearly: boolean; onChange: (yearly: boolean) => void }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <span className="text-lead text-ink">{pricing.toggle.monthly}</span>

      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label={`Switch to ${yearly ? 'monthly' : 'yearly'} billing`}
        onClick={() => onChange(!yearly)}
        className="relative h-[50.09px] w-[96.42px] shrink-0 rounded-[16.5px] bg-ink/15 transition-colors hover:bg-ink/20"
      >
        <span
          className="absolute top-1/2 block h-[31.88px] w-[28.12px] -translate-y-1/2 rounded-full bg-white shadow-sm transition-[left] duration-200"
          style={{ left: yearly ? 'calc(100% - 37.5px)' : '9.37px' }}
        />
      </button>

      <span className="text-lead text-ink">{pricing.toggle.yearly}</span>
      <Tag>{pricing.toggle.badge}</Tag>
    </div>
  )
}
