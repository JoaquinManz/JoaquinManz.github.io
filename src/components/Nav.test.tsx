import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Nav } from './Nav'
import { LanguageProvider } from '../context/LanguageContext'
import type { NavItem } from '../data/types'

function renderNav(items: NavItem[]) {
  return render(
    <LanguageProvider>
      <Nav items={items} />
    </LanguageProvider>,
  )
}

describe('Nav', () => {
  it('renders one link per nav item with an href pointing to its section id', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
    ]

    renderNav(items)

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

    renderNav(items)

    expect(screen.getAllByRole('link')).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
  })

  it('wraps nav items onto multiple lines on narrow viewports', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
    ]

    renderNav(items)

    expect(screen.getByRole('list')).toHaveClass('flex-wrap')
  })

  describe('language toggle', () => {
    const items: NavItem[] = [{ id: 'hero', label: 'Home' }]

    it('renders ES and EN buttons', () => {
      renderNav(items)

      expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument()
    })

    it('marks the currently active language with aria-pressed', () => {
      window.localStorage.setItem('lang', 'es')
      renderNav(items)

      expect(screen.getByRole('button', { name: 'ES' })).toHaveAttribute('aria-pressed', 'true')
      expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'false')
    })

    it('clicking EN swaps the active language to English', async () => {
      window.localStorage.setItem('lang', 'es')
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: 'EN' }))

      expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true')
      expect(screen.getByRole('button', { name: 'ES' })).toHaveAttribute('aria-pressed', 'false')
    })

    it('is keyboard-operable: tabbing to the button and pressing Enter swaps language', async () => {
      window.localStorage.setItem('lang', 'es')
      const user = userEvent.setup()
      renderNav(items)

      const enButton = screen.getByRole('button', { name: 'EN' })
      enButton.focus()
      expect(enButton).toHaveFocus()

      await user.keyboard('{Enter}')

      expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true')
    })
  })
})
