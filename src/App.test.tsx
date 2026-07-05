import { render, screen } from '@testing-library/react'
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
  it('renders the nav and all eight sections in order with matching ids', () => {
    render(<App />)

    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', `#${item.id}`)
    }

    expect(document.querySelector('section#hero')).not.toBeNull()
    expect(document.querySelector('section#about')).not.toBeNull()
    expect(document.querySelector('section#skills')).not.toBeNull()
    expect(document.querySelector('section#experience')).not.toBeNull()
    expect(document.querySelector('section#education')).not.toBeNull()
    expect(document.querySelector('section#secu')).not.toBeNull()
    expect(document.querySelector('section#projects')).not.toBeNull()
    expect(document.querySelector('section#contact')).not.toBeNull()

    expect(screen.getByText(heroData.name)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: aboutData.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: skillsData.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: experienceData.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: educationData.heading })).toBeInTheDocument()
    expect(screen.getByText(secuData.name)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: projectsData.heading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: contactData.heading })).toBeInTheDocument()
  })

  it('renders sections in the same order as navItems (except hero has no visible label section repeat)', () => {
    render(<App />)

    const sectionIds = Array.from(document.querySelectorAll('section')).map((el) => el.id)

    expect(sectionIds).toEqual(navItems.map((item) => item.id))
  })
})
