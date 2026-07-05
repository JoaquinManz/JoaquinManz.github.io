import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import type { ContactData } from '../data/types'

describe('Contact', () => {
  it('renders the email as a mailto link and every social link', () => {
    const data: ContactData = {
      heading: 'Contact',
      message: "Let's build something together.",
      email: 'ada@example.com',
      phone: '+1 415 555 0100',
      location: 'San Francisco, USA',
      socials: [{ label: 'GitHub', href: 'https://github.com/ada' }],
    }

    render(<Contact data={data} />)

    expect(screen.getByText("Let's build something together.")).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ada@example.com' })).toHaveAttribute(
      'href',
      'mailto:ada@example.com',
    )
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/ada')
  })

  it('renders multiple social links with different data (triangulation)', () => {
    const data: ContactData = {
      heading: 'Contact',
      message: 'Reach out anytime.',
      email: 'grace@example.com',
      phone: '+1 555 0100',
      location: 'Boston, USA',
      socials: [
        { label: 'GitHub', href: 'https://github.com/grace' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/grace' },
      ],
    }

    render(<Contact data={data} />)

    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/grace',
    )
  })

  it('renders phone and location', () => {
    const data: ContactData = {
      heading: 'Contact',
      message: "Let's build something together.",
      email: 'ada@example.com',
      phone: '+44 20 7946 0958',
      location: 'London, UK',
      socials: [{ label: 'GitHub', href: 'https://github.com/ada' }],
    }

    render(<Contact data={data} />)

    expect(screen.getByText('+44 20 7946 0958')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
  })

  it('renders a different phone and location (triangulation)', () => {
    const data: ContactData = {
      heading: 'Contact',
      message: 'Reach out anytime.',
      email: 'grace@example.com',
      phone: '+598 91 819 872',
      location: 'Montevideo, Uruguay',
      socials: [{ label: 'GitHub', href: 'https://github.com/grace' }],
    }

    render(<Contact data={data} />)

    expect(screen.getByText('+598 91 819 872')).toBeInTheDocument()
    expect(screen.getByText('Montevideo, Uruguay')).toBeInTheDocument()
  })
})
