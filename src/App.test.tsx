import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { heroData } from './data/hero'
import { aboutData } from './data/about'
import { skillsData } from './data/skills'
import { experienceData } from './data/experience'
import { educationData } from './data/education'
import { secuData } from './data/secu'
import { projectsData } from './data/projects'
import { contactData } from './data/contact'
import { navItems } from './data/nav'

describe('App', () => {
  beforeEach(() => {
    window.localStorage.setItem('lang', 'es')
  })

  it('renders the nav and all eight sections in order with matching ids', () => {
    render(<App />)

    const desktopNav = screen.getAllByRole('navigation')[0]

    for (const item of navItems.es) {
      expect(within(desktopNav).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        `#${item.id}`,
      )
    }

    expect(document.querySelector('section#hero')).not.toBeNull()
    expect(document.querySelector('section#about')).not.toBeNull()
    expect(document.querySelector('section#skills')).not.toBeNull()
    expect(document.querySelector('section#experience')).not.toBeNull()
    expect(document.querySelector('section#education')).not.toBeNull()
    expect(document.querySelector('section#secu')).not.toBeNull()
    expect(document.querySelector('section#projects')).not.toBeNull()
    expect(document.querySelector('section#contact')).not.toBeNull()

    expect(screen.getByText(heroData.es.name)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: aboutData.es.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: skillsData.es.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: experienceData.es.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: educationData.es.heading })).toBeInTheDocument()
    expect(screen.getByText(secuData.es.name)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: projectsData.es.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: contactData.es.heading })).toBeInTheDocument()
  })

  it('renders sections in the same order as navItems (except hero has no visible label section repeat)', () => {
    render(<App />)

    const sectionIds = Array.from(document.querySelectorAll('section')).map((el) => el.id)

    expect(sectionIds).toEqual(navItems.es.map((item) => item.id))
  })

  it('swaps all section content to English when the EN toggle is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: aboutData.es.heading })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'EN' }))

    const desktopNav = screen.getAllByRole('navigation')[0]
    expect(within(desktopNav).getByRole('link', { name: navItems.en[0].label })).toHaveAttribute(
      'href',
      `#${navItems.en[0].id}`,
    )
    expect(screen.getByRole('heading', { name: aboutData.en.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: skillsData.en.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: experienceData.en.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: educationData.en.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: projectsData.en.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: contactData.en.heading })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: aboutData.es.heading })).not.toBeInTheDocument()
  })

  it('renders the mobile bottom nav with a link for each nav item', () => {
    render(<App />)

    const bottomNav = screen.getByRole('navigation', { name: 'Section navigation' })

    for (const item of navItems.es) {
      expect(within(bottomNav).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        `#${item.id}`,
      )
    }
  })

  it('pads main with extra bottom space so mobile content clears the fixed bottom nav', () => {
    render(<App />)

    const main = document.querySelector('main')
    expect(main).toHaveClass('pb-28', 'lg:pb-16')
    expect(main).not.toHaveClass('pb-16')
  })
})
