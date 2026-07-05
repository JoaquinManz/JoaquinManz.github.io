import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import type { HeroData } from '../data/types'

describe('Hero', () => {
  it('renders name, title, tagline, and a CTA link with the correct href', () => {
    const data: HeroData = {
      name: 'Ada Lovelace',
      title: 'Software Engineer',
      tagline: 'Building thoughtful software.',
      ctaLabel: 'Get in touch',
      ctaHref: '#contact',
    }

    render(<Hero data={data} />)

    expect(screen.getByText('Ada Lovelace')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Building thoughtful software.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '#contact')
  })

  it('renders different data correctly (triangulation)', () => {
    const data: HeroData = {
      name: 'Grace Hopper',
      title: 'Compiler Pioneer',
      tagline: 'Debugging the world, one bug at a time.',
      ctaLabel: 'See my work',
      ctaHref: '#projects',
    }

    render(<Hero data={data} />)

    expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
    expect(screen.getByText('Compiler Pioneer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See my work' })).toHaveAttribute('href', '#projects')
  })
})
