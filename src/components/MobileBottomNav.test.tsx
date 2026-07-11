import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { MobileBottomNav } from './MobileBottomNav'
import { navItems } from '../data/nav'
import { useActiveSection } from '../hooks/useActiveSection'

vi.mock('../hooks/useActiveSection')

const mockUseActiveSection = vi.mocked(useActiveSection)

describe('MobileBottomNav', () => {
  it('renders one link per item with an accessible name matching the label (es)', () => {
    mockUseActiveSection.mockReturnValue('hero')

    render(<MobileBottomNav items={navItems.es} />)

    for (const item of navItems.es) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', `#${item.id}`)
    }
  })

  it('renders one link per item with an accessible name matching the label (en)', () => {
    mockUseActiveSection.mockReturnValue('hero')

    render(<MobileBottomNav items={navItems.en} />)

    for (const item of navItems.en) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', `#${item.id}`)
    }
  })

  it('marks only the active section link with aria-current="location"', () => {
    mockUseActiveSection.mockReturnValue('skills')

    render(<MobileBottomNav items={navItems.en} />)

    const links = screen.getAllByRole('link')
    const current = links.filter((link) => link.getAttribute('aria-current') === 'location')

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveAttribute('href', '#skills')
  })

  it('updates aria-current when the active section changes', () => {
    mockUseActiveSection.mockReturnValue('contact')

    render(<MobileBottomNav items={navItems.en} />)

    const contactLink = screen.getByRole('link', { name: 'Contact' })
    expect(contactLink).toHaveAttribute('aria-current', 'location')
  })

  it('is hidden on large viewports via lg:hidden', () => {
    mockUseActiveSection.mockReturnValue('hero')

    render(<MobileBottomNav items={navItems.en} />)

    expect(screen.getByRole('navigation', { name: 'Section navigation' })).toHaveClass('lg:hidden')
  })
})
