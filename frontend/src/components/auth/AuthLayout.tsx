import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { Section } from '@/components/ui/Section'
import { Heading } from '@/components/ui/Heading'

/**
 * Shared shell for /signin and /signup: the contact page's solid header and
 * narrow column, a centred heading, and the form card on the pricing section's
 * cloud ground so the white card reads as raised.
 */
export function AuthLayout({
  title,
  body,
  prompt,
  action,
  href,
  children,
}: {
  title: string
  body: string
  prompt: string
  action: string
  href: string
  children: ReactNode
}) {
  return (
    <div
      className="flex min-h-screen flex-col bg-white"
      style={{ '--container-w': 'var(--container-narrow)' } as CSSProperties}
    >
      <SiteHeader variant="solid" />

      <main className="flex-1">
        <Section tone="cloud" className="py-14 sm:py-24">
          <Heading
            as="h1"
            align="center"
            title={title}
            body={body}
            className="mx-auto max-w-[560px]"
            bodyGap="mt-3"
          />

          <div className="mx-auto mt-10 w-full max-w-[440px] rounded-card border border-hairline bg-white p-7 shadow-form sm:p-10">
            {children}
          </div>

          <p className="mt-8 text-center text-small text-ink">
            <span className="opacity-70">{prompt}</span>{' '}
            <Link to={href} className="font-bold text-brand transition-opacity hover:opacity-80">
              {action}
            </Link>
          </p>
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}
