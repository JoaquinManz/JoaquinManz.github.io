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
      photoAlt: 'Portrait of Ada Lovelace',
      githubHref: 'https://github.com/ada',
      linkedinHref: 'https://linkedin.com/in/ada',
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
      photoAlt: 'Portrait of Grace Hopper',
      githubHref: 'https://github.com/grace',
      linkedinHref: 'https://linkedin.com/in/grace',
    }

    render(<Hero data={data} />)

    expect(screen.getByText('Grace Hopper')).toBeInTheDocument()
    expect(screen.getByText('Compiler Pioneer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'See my work' })).toHaveAttribute('href', '#projects')
  })

  it('renders GitHub and LinkedIn links, and a photo fallback with role="img" when photo is absent', () => {
    const data: HeroData = {
      name: 'Ada Lovelace',
      title: 'Software Engineer',
      tagline: 'Building thoughtful software.',
      ctaLabel: 'Get in touch',
      ctaHref: '#contact',
      photoAlt: 'Portrait of Ada Lovelace',
      githubHref: 'https://github.com/ada',
      linkedinHref: 'https://linkedin.com/in/ada',
    }

    render(<Hero data={data} />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/ada',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/ada',
    )
    const stub = screen.getByRole('img', { name: 'Portrait of Ada Lovelace' })
    expect(stub.tagName).not.toBe('IMG')
  })

  it('renders a real <img> when a photo is provided (triangulation)', () => {
    const data: HeroData = {
      name: 'Grace Hopper',
      title: 'Compiler Pioneer',
      tagline: 'Debugging the world, one bug at a time.',
      ctaLabel: 'See my work',
      ctaHref: '#projects',
      photo: '/photo.jpg',
      photoAlt: 'Portrait of Grace Hopper',
      githubHref: 'https://github.com/grace',
      linkedinHref: 'https://linkedin.com/in/grace',
    }

    render(<Hero data={data} />)

    const image = screen.getByRole('img', { name: 'Portrait of Grace Hopper' })
    expect(image.tagName).toBe('IMG')
    expect(image).toHaveAttribute('src', '/photo.jpg')
  })

  it('marks the CTA as a downloadable file and external profile links as safe new-tab links', () => {
    const data: HeroData = {
      name: 'Ada Lovelace',
      title: 'Software Engineer',
      tagline: 'Building thoughtful software.',
      ctaLabel: 'Get in touch',
      ctaHref: '#contact',
      photoAlt: 'Portrait of Ada Lovelace',
      githubHref: 'https://github.com/ada',
      linkedinHref: 'https://linkedin.com/in/ada',
    }

    render(<Hero data={data} />)

    expect(screen.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('download')

    const githubLink = screen.getByRole('link', { name: 'GitHub' })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
