import { act, render, screen, within } from '@testing-library/react'
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

  describe('mobile menu', () => {
    const items: NavItem[] = [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ]

    it('renders a hamburger button hidden at lg and up', () => {
      renderNav(items)

      const button = screen.getByRole('button', { name: /open menu/i })
      expect(button).toHaveClass('lg:hidden')
    })

    it('hides the desktop link list below lg and shows it at lg and up', () => {
      renderNav(items)

      expect(screen.getByRole('list')).toHaveClass('hidden', 'lg:flex')
    })

    it('is closed by default: aria-expanded is false and no dialog is rendered', () => {
      renderNav(items)

      expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute('aria-expanded', 'false')
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('opens a fullscreen panel with the same links when the hamburger is tapped', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))

      const dialog = screen.getByRole('dialog')
      expect(dialog).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
      expect(within(dialog).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#hero')
      expect(within(dialog).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
      expect(within(dialog).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    })

    it('exposes aria-controls on the button pointing at the panel id', async () => {
      const user = userEvent.setup()
      renderNav(items)

      const button = screen.getByRole('button', { name: /open menu/i })
      await user.click(button)

      const dialog = screen.getByRole('dialog')
      expect(button).toHaveAttribute('aria-controls', dialog.id)
    })

    it('closes the menu when a link inside the panel is clicked', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      await user.click(within(screen.getByRole('dialog')).getByRole('link', { name: 'About' }))

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: /open menu/i })).toHaveFocus()
    })

    it('closes the menu when Escape is pressed and returns focus to the hamburger', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      await user.keyboard('{Escape}')

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      expect(screen.getByRole('button', { name: /open menu/i })).toHaveFocus()
    })

    it('closes the menu on hashchange (route change)', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      act(() => {
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      })

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('closes the menu on popstate', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      act(() => {
        window.dispatchEvent(new PopStateEvent('popstate'))
      })

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('locks body scroll while open and restores it when closed', async () => {
      const user = userEvent.setup()
      renderNav(items)

      expect(document.body.style.overflow).not.toBe('hidden')

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      expect(document.body.style.overflow).toBe('hidden')

      await user.keyboard('{Escape}')
      expect(document.body.style.overflow).not.toBe('hidden')
    })

    it('auto-closes when the viewport grows to lg and up', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))
      expect(screen.getByRole('dialog')).toBeInTheDocument()

      window.innerWidth = 1200
      act(() => {
        window.dispatchEvent(new Event('resize'))
      })

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('traps focus within the open panel: Tab from the last link cycles to the close button', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))

      const closeButton = screen.getByRole('button', { name: /close menu/i })
      const dialog = screen.getByRole('dialog')
      const links = within(dialog).getAllByRole('link')
      links[links.length - 1].focus()

      await user.tab()

      expect(closeButton).toHaveFocus()
    })

    it('traps focus within the open panel: Shift+Tab from the close button cycles to the last link', async () => {
      const user = userEvent.setup()
      renderNav(items)

      await user.click(screen.getByRole('button', { name: /open menu/i }))

      const closeButton = screen.getByRole('button', { name: /close menu/i })
      const dialog = screen.getByRole('dialog')
      closeButton.focus()

      await user.tab({ shift: true })

      const links = within(dialog).getAllByRole('link')
      expect(links[links.length - 1]).toHaveFocus()
    })

    it('has a hit area of at least 44x44px on the hamburger button', () => {
      renderNav(items)

      const button = screen.getByRole('button', { name: /open menu/i })
      expect(button.className).toMatch(/(h-11|min-h-11)/)
      expect(button.className).toMatch(/(w-11|min-w-11)/)
    })
  })
})
