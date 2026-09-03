import featureLayers from '@/assets/icons/feature-layers.svg'
import featureSync from '@/assets/icons/feature-sync.svg'
import featureChart from '@/assets/icons/feature-chart.svg'

import socialTwitter from '@/assets/icons/social-twitter.svg'
import socialFacebook from '@/assets/icons/social-facebook.svg'
import socialInstagram from '@/assets/icons/social-instagram.svg'
import socialLinkedin from '@/assets/icons/social-linkedin.svg'

import logo1 from '@/assets/logos/logo-1.png'
import logo1Mask from '@/assets/logos/logo-1-mask.png'
import logo2 from '@/assets/logos/logo-2.png'
import logo2Mask from '@/assets/logos/logo-2-mask.png'
import logo3 from '@/assets/logos/logo-3.png'
import logo3Mask from '@/assets/logos/logo-3-mask.png'
import logo4 from '@/assets/logos/logo-4.png'
import logo4Mask from '@/assets/logos/logo-4-mask.png'
import logo5 from '@/assets/logos/logo-5.png'
import logo5Mask from '@/assets/logos/logo-5-mask.png'
import logo6 from '@/assets/logos/logo-6.png'
import logo6Mask from '@/assets/logos/logo-6-mask.png'

export const BRAND = 'Brainwave.io'

export const navLinks = [
  { label: 'Demos', href: '#demos' },
  { label: 'Pages', href: '#pages' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '/contact' },
]

export const hero = {
  title: 'Get more visitors, get more sales.',
  body: 'With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.',
  cta: 'Start a free trial',
}

/**
 * Each logo ships as a raster plus an alpha mask — Figma stacks a #7d818d
 * masked layer over the artwork to desaturate it. See <ClientLogo />.
 */
export const clientLogos = [
  { name: 'Client 1', src: logo1, mask: logo1Mask, width: 187.48, height: 36.43 },
  { name: 'Client 2', src: logo2, mask: logo2Mask, width: 198.2, height: 45.54 },
  { name: 'Client 3', src: logo3, mask: logo3Mask, width: 196.86, height: 42.5 },
  { name: 'Client 4', src: logo4, mask: logo4Mask, width: 124.54, height: 51.61 },
  { name: 'Client 5', src: logo5, mask: logo5Mask, width: 135.26, height: 39.47 },
  { name: 'Client 6', src: logo6, mask: logo6Mask, width: 147.31, height: 45.54 },
]

const featureBody =
  'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'

export const features = [
  { icon: featureLayers, title: 'Organize your campaigns', body: featureBody, iconWidth: 46.87, iconHeight: 56.16 },
  { icon: featureSync, title: 'Manage customers', body: featureBody, iconWidth: 49.55, iconHeight: 57.68 },
  { icon: featureChart, title: 'Track progress fast', body: featureBody, iconWidth: 45.53, iconHeight: 51.61 },
]

const contentBody =
  'We share common trends and strategies for improving your rental income and making sure you stay in high demand.'

export const contentSections = {
  track: { title: 'Track your progress with our advanced site.', body: contentBody, cta: 'Start a free trial' },
  visitors: { title: 'Understand your visitors fast. Take quick actions.', body: contentBody, cta: 'Start a free trial' },
  services: { title: 'Make your customers happy by giving services.', body: contentBody, cta: 'Start a free trial' },
}

export const pricing = {
  title: 'Pricing & Plans',
  body: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  toggle: { monthly: 'Monthly', yearly: 'Yearly', badge: 'Save 25%' },
  note: 'No credit card required',
  cta: 'Start Free Trial',
}

export type Plan = {
  name: string
  price: string
  cadence: string
  featured: boolean
  features: { label: string; included: boolean }[]
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '19',
    cadence: 'billed monthly',
    featured: false,
    features: [
      { label: 'Commercial License', included: true },
      { label: '100+ HTML UI Elements', included: true },
      { label: '01 Domain Support', included: true },
      { label: '6 Month Premium Support', included: false },
      { label: 'Lifetime Updates', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '49',
    cadence: 'billed monthly',
    featured: true,
    features: [
      { label: 'Commercial License', included: true },
      { label: '100+ HTML UI Elements', included: true },
      { label: 'Unlimited Domain Support', included: true },
      { label: '6 Month Premium Support', included: true },
      { label: 'Lifetime Updates', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '99',
    cadence: 'billed monthly',
    featured: false,
    features: [
      { label: 'Commercial License', included: true },
      { label: '100+ HTML UI Elements', included: true },
      { label: 'Unlimited Domain Support', included: true },
      { label: '6 Month Premium Support', included: true },
      { label: 'Lifetime Updates', included: true },
    ],
  },
]

export const testimonials = [
  {
    quote:
      '“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
    name: 'Diego Morata',
    role: 'Web Developer',
  },
  {
    quote:
      '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
    name: 'Franklin Hicks',
    role: 'Digital Marketer',
  },
]

/** No Figma counterpart — composed to close the page before the footer. */
export const callToAction = {
  title: 'Ready to get more visitors?',
  body: 'Start your free trial today. No credit card required, and you can cancel any time.',
  cta: 'Start a free trial',
}

export const footerColumns = [
  {
    heading: 'Company',
    links: ['About us', 'Contact us', 'Careers', 'Press'],
  },
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'News', 'Help desk', 'Support'],
  },
  {
    heading: 'Services',
    links: ['Digital Marketing', 'Content Writing', 'SEO for Business', 'UI Design'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'Return Policy'],
  },
  {
    heading: 'Contact us',
    links: ['support@brainwave.io', '+133-394-3439-1435'],
  },
]

export const socialLinks = [
  { name: 'Twitter', icon: socialTwitter, href: '#' },
  { name: 'Facebook', icon: socialFacebook, href: '#' },
  { name: 'Instagram', icon: socialInstagram, href: '#' },
  { name: 'LinkedIn', icon: socialLinkedin, href: '#' },
]

export const copyright = '© 2026 Copyright, All Right Reserved, Made by Sejal_ui_ux with'
