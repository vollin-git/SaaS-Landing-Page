import map from '@/assets/images/map.png'

/**
 * Figma: Map (5:1740). The design masks a 1947×1206 bitmap down to a 1600×541
 * window at (173, 560) — that window is horizontally centred, so an overflow
 * crop reproduces it exactly while staying fluid at any viewport width.
 */
export function ContactMap() {
  return (
    <div className="relative h-[541px] w-full overflow-hidden bg-[#d8d8d8]" aria-hidden="true">
      <img
        src={map}
        alt=""
        className="absolute left-1/2 h-[1206px] w-[1947px] max-w-none -translate-x-1/2"
        style={{ top: -560 }}
      />
    </div>
  )
}
