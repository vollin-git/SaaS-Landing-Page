/**
 * Figma stacks two layers per client logo: the original artwork at 80% opacity,
 * with a #7d818d fill masked to the same shape sitting on top. That pair is what
 * produces the desaturated grey treatment, so both layers are reproduced here.
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
    <div className="relative shrink-0" style={{ width, height }}>
      <img src={src} alt={name} className="absolute inset-0 h-full w-full max-w-none opacity-80" />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-logo opacity-80"
        style={{
          maskImage: `url(${mask})`,
          maskSize: `${width}px ${height}px`,
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url(${mask})`,
          WebkitMaskSize: `${width}px ${height}px`,
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </div>
  )
}
