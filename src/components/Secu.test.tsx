import { render, screen } from '@testing-library/react'
import { Secu } from './Secu'
import type { SecuData } from '../data/types'

describe('Secu', () => {
  it('renders heading, name, summary, tech, highlights and link; shows a CSS stand-in with imageAlt when image is absent', () => {
    const data: SecuData = {
      heading: 'Featured Case Study',
      name: 'SECU System',
      summary: 'A scholarship management system.',
      role: 'UML modeling and repository management',
      tech: ['UML', 'PlantUML'],
      highlights: ['Compared MER and UML models to detect inconsistencies'],
      links: [{ label: 'Repo', href: 'https://git.utec.edu.uy/caso-de-estudio/secu', kind: 'repo' }],
      imageAlt: 'Diagram of the SECU system',
    }

    render(<Secu data={data} />)

    expect(screen.getByText('Featured Case Study')).toBeInTheDocument()
    expect(screen.getByText('SECU System')).toBeInTheDocument()
    expect(screen.getByText('A scholarship management system.')).toBeInTheDocument()
    expect(screen.getByText('UML modeling and repository management')).toBeInTheDocument()
    expect(screen.getByText('UML')).toBeInTheDocument()
    expect(screen.getByText('PlantUML')).toBeInTheDocument()
    expect(
      screen.getByText('Compared MER and UML models to detect inconsistencies'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Repo' })).toHaveAttribute(
      'href',
      'https://git.utec.edu.uy/caso-de-estudio/secu',
    )
    const stub = screen.getByRole('img', { name: 'Diagram of the SECU system' })
    expect(stub.tagName).not.toBe('IMG')
  })

  it('renders a real <img> when image is provided and multiple links (triangulation)', () => {
    const data: SecuData = {
      heading: 'Featured Case Study',
      name: 'Different System',
      summary: 'A different summary.',
      tech: ['Scrum'],
      highlights: ['Led sprint planning'],
      links: [
        { label: 'Repo', href: 'https://gitlab.com/example/secu', kind: 'repo' },
        { label: 'Docs', href: 'https://example.com/docs', kind: 'external' },
      ],
      imageAlt: 'Screenshot of Different System',
      image: '/secu.png',
    }

    render(<Secu data={data} />)

    const image = screen.getByRole('img', { name: 'Screenshot of Different System' })
    expect(image.tagName).toBe('IMG')
    expect(image).toHaveAttribute('src', '/secu.png')
    expect(screen.getByRole('link', { name: 'Docs' })).toHaveAttribute(
      'href',
      'https://example.com/docs',
    )
  })

  it('opens repo and docs links safely in a new tab', () => {
    const data: SecuData = {
      heading: 'Featured Case Study',
      name: 'Different System',
      summary: 'A different summary.',
      tech: ['Scrum'],
      highlights: ['Led sprint planning'],
      links: [
        { label: 'Repo', href: 'https://gitlab.com/example/secu', kind: 'repo' },
        { label: 'Docs', href: 'https://example.com/docs', kind: 'external' },
      ],
      imageAlt: 'Screenshot of Different System',
    }

    render(<Secu data={data} />)

    const repoLink = screen.getByRole('link', { name: 'Repo' })
    expect(repoLink).toHaveAttribute('target', '_blank')
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer')

    const docsLink = screen.getByRole('link', { name: 'Docs' })
    expect(docsLink).toHaveAttribute('target', '_blank')
    expect(docsLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
