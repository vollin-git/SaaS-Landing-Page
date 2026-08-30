/**
 * Figma stacks two layers per client logo: the original artwork at 80% opacity,
 * with a #7d818d fill masked to the same shape sitting on top. That pair is what
 * produces the desaturated grey treatment, so both layers are reproduced here.
 *
 * The box is fluid — it caps at the Figma width but shrinks on narrow screens,
 * with aspect-ratio holding the proportions and a percentage mask-size so the
 * tint layer tracks the box instead of drifting out of register.
 */
export function ClientLogo({
  name,
  src,
  mask,
  width,
  height,
}: {
  name: string
  src: string
  mask: string
  width: number
  height: number
}) {
  return (
    <div
      className="relative w-full max-w-[38%] sm:max-w-[28%] lg:max-w-none"
      style={{ width, aspectRatio: `${width} / ${height}` }}
    >
      <img src={src} alt={name} className="absolute inset-0 h-full w-full max-w-none opacity-80" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-logo opacity-80"
        style={{
          maskImage: `url("${mask}")`,
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url("${mask}")`,
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
