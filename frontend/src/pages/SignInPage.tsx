import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { AuthLayout } from '@/components/auth/AuthLayout'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { TextField } from '@/components/ui/TextField'
import { signIn } from '@/data/auth'

export function SignInPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // No auth backend is wired up yet; hook this to your provider.
    event.preventDefault()
  }

  return (
    <AuthLayout title={signIn.title} body={signIn.body} prompt={signIn.prompt} action={signIn.action} href={signIn.href}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-[26px]">
          {signIn.fields.map((field) => (
            <TextField key={field.name} {...field} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Checkbox name="remember">Remember me</Checkbox>
          <Link to="#" className="text-small font-bold text-brand transition-opacity hover:opacity-80">
            Forgot password?
          </Link>
        </div>

        <Button as="button" type="submit" variant="solid" className="mt-8 h-[59px] w-full px-0">
          {signIn.submit}
        </Button>
      </form>
    </AuthLayout>
  )
}
