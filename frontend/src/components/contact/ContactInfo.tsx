import { contactDetails } from '@/data/contact'

/** Figma: Info (5:1744) — icon + two-line detail, sitting beside the form. */
export function ContactInfo() {
  return (
    <div className="w-full max-w-[284px] space-y-[18px] pt-[23px]">
      {contactDetails.map((detail) => (
        <div key={detail.lines[0]} className="flex gap-[21px]">
          <img
            src={detail.icon}
            alt=""
            aria-hidden="true"
            className="mt-[14px] max-w-none shrink-0"
            style={{ width: detail.iconWidth, height: detail.iconHeight }}
          />
          <p className="text-lead leading-8 text-ink opacity-70">
            {detail.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}
