import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'
import type { ContactData } from '../data/types'

describe('Contact', () => {
  it('renders the email as a mailto link and every social link', () => {
    const data: ContactData = {
      heading: 'Contact',
      message: "Let's build something together.",
      email: 'ada@example.com',
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
})
