/**
 * Figma stacks two layers per client logo: the original artwork at 80% opacity,
 * with a #7d818d fill masked to the same shape sitting on top. That pair is what
 * produces the desaturated grey treatment, so both layers are reproduced here.
 *
 * Logos render at their Figma width; on small screens LogoCloud scrolls them in
 * a rail rather than shrinking them, since a squeezed wordmark reads as broken.
 * aspect-ratio holds the proportions and the percentage mask-size keeps the tint
 * layer in register with the box at any size.
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
      className="relative shrink-0"
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
