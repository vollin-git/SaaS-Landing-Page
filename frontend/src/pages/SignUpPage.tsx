import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import { AuthLayout } from '@/components/auth/AuthLayout'
import { Button } from '@/components/ui/Button'
import { Checkbox } from '@/components/ui/Checkbox'
import { TextField } from '@/components/ui/TextField'
import { signUp } from '@/data/auth'

export function SignUpPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // No auth backend is wired up yet; hook this to your provider.
    event.preventDefault()
  }

  return (
    <AuthLayout title={signUp.title} body={signUp.body} prompt={signUp.prompt} action={signUp.action} href={signUp.href}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-[26px]">
          {signUp.fields.map((field) => (
            <TextField key={field.name} {...field} />
          ))}
        </div>

        <div className="mt-6">
          <Checkbox name="terms">
            I agree to the{' '}
            <Link to="#" className="font-bold text-brand transition-opacity hover:opacity-80">
              Terms &amp; Conditions
            </Link>{' '}
            and{' '}
            <Link to="#" className="font-bold text-brand transition-opacity hover:opacity-80">
              Privacy Policy
            </Link>
            .
          </Checkbox>
        </div>

        <Button as="button" type="submit" variant="solid" className="mt-8 h-[59px] w-full px-0">
          {signUp.submit}
        </Button>
      </form>
    </AuthLayout>
  )
}
