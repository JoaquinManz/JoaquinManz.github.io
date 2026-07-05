import { render, screen } from '@testing-library/react'
import { About } from './About'
import type { AboutData } from '../data/types'

describe('About', () => {
  it('renders every paragraph and a CSS stand-in with portraitAlt as accessible label when portrait is absent', () => {
    const data: AboutData = {
      heading: 'About Me',
      paragraphs: ['First paragraph about me.', 'Second paragraph about me.'],
      portraitAlt: 'Portrait of Ada Lovelace',
    }

    render(<About data={data} />)

    expect(screen.getByText('First paragraph about me.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph about me.')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Portrait of Ada Lovelace' })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: 'Portrait of Ada Lovelace' })?.tagName).not.toBe('IMG')
  })

  it('renders a real <img> when a portrait is provided (triangulation)', () => {
    const data: AboutData = {
      heading: 'About Me',
      paragraphs: ['Only paragraph.'],
      portraitAlt: 'Portrait of Grace Hopper',
      portrait: '/portrait.jpg',
    }

    render(<About data={data} />)

    const image = screen.getByRole('img', { name: 'Portrait of Grace Hopper' })
    expect(image.tagName).toBe('IMG')
    expect(image).toHaveAttribute('src', '/portrait.jpg')
  })
})
