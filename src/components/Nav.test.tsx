import { render, screen, within } from '@testing-library/react'
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

    expect(screen.getAllByRole('link')).toHaveLength(4)
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

  it('keeps gap-2 on the nav links list (1024px pill-wrap regression guard)', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
    ]

    renderNav(items)

    expect(screen.getByRole('list')).toHaveClass('gap-2')
  })

  it('lays out the pill container as a 3-column grid at lg so the language toggle no longer shifts link centering', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
    ]

    renderNav(items)

    const pillContainer = screen.getByRole('list').parentElement
    expect(pillContainer).toHaveClass('lg:grid', 'lg:grid-cols-[auto_1fr_auto]', 'lg:justify-normal')
  })

  it('renders the language toggle as a sibling of the nav links list, not as a child li', () => {
    const items: NavItem[] = [{ id: 'hero', label: 'Home' }]

    renderNav(items)

    const list = screen.getByRole('list')
    const listItems = within(list).getAllByRole('listitem')
    for (const item of listItems) {
      expect(within(item).queryByRole('button', { name: 'ES' })).not.toBeInTheDocument()
      expect(within(item).queryByRole('button', { name: 'EN' })).not.toBeInTheDocument()
    }

    const toggleGroup = screen.getByRole('group', { name: 'Language' })
    const toggleWrapper = toggleGroup.parentElement
    expect(toggleWrapper).toHaveClass('ml-2', 'border-l', 'border-border', 'pl-2')
    expect(list.contains(toggleWrapper)).toBe(false)
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

  describe('mobile menu removal (superseded by MobileBottomNav)', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ]

    it('does not render a hamburger "Open menu" button', () => {
      renderNav(items)

      expect(screen.queryByRole('button', { name: /open menu/i })).not.toBeInTheDocument()
    })

    it('does not render a fullscreen dialog panel', () => {
      renderNav(items)

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('hides the desktop link list below lg and shows it at lg and up', () => {
      renderNav(items)

      expect(screen.getByRole('list')).toHaveClass('hidden', 'lg:flex')
    })

    it('renders the language toggle without hiding it below lg (visible at all breakpoints)', () => {
      renderNav(items)

      const toggleGroup = screen.getByRole('group', { name: 'Language' })
      const toggleWrapper = toggleGroup.parentElement
      expect(toggleWrapper?.className).not.toMatch(/(^|\s)hidden(\s|$)/)
      expect(toggleWrapper?.className).not.toMatch(/lg:flex/)
    })
  })
})
