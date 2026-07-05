import { render, screen } from '@testing-library/react'
import { Nav } from './Nav'
import type { NavItem } from '../data/types'

describe('Nav', () => {
  it('renders one link per nav item with an href pointing to its section id', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
    ]

    render(<Nav items={items} />)

    const homeLink = screen.getByRole('link', { name: 'Home' })
    const aboutLink = screen.getByRole('link', { name: 'About' })

    expect(homeLink).toHaveAttribute('href', '#hero')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })

  it('renders a different set of links when given different items (triangulation)', () => {
    const items: NavItem[] = [
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
      { id: 'skills', label: 'Skills' },
    ]

    render(<Nav items={items} />)

    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
  })
})
