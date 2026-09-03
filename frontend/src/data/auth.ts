/**
 * The Figma file has no auth screens, so these pages are composed from the
 * existing design system rather than a design: the contact form's card and
 * TextField, the pricing section's cloud ground, and the shared Heading/Button.
 */
export type AuthField = {
  name: string
  label: string
  placeholder: string
  type?: string
}

export const signIn = {
  title: 'Welcome back',
  body: 'Sign in to pick up where you left off.',
  fields: [
    { name: 'email', label: 'Email', placeholder: 'i.e. john@mail.com', type: 'email' },
    { name: 'password', label: 'Password', placeholder: 'Enter your password', type: 'password' },
  ] as AuthField[],
  submit: 'Sign In',
  prompt: "Don't have an account?",
  action: 'Sign up',
  href: '/signup',
}

export const signUp = {
  title: 'Create your account',
  body: 'Start your free trial. No credit card required.',
  fields: [
    { name: 'name', label: 'First & Last Name', placeholder: 'i.e. John Doe' },
    { name: 'email', label: 'Email', placeholder: 'i.e. john@mail.com', type: 'email' },
    { name: 'password', label: 'Password', placeholder: 'At least 8 characters', type: 'password' },
  ] as AuthField[],
  submit: 'Create Account',
  prompt: 'Already have an account?',
  action: 'Sign in',
  href: '/signin',
}
