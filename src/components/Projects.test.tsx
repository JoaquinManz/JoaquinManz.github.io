import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'
import type { ProjectsData } from '../data/types'

describe('Projects', () => {
  it('renders card name, description, tech, and links; shows a CSS stand-in with imageAlt when image is absent', () => {
    const data: ProjectsData = {
      heading: 'Projects',
      projects: [
        {
          name: 'Portfolio Site',
          description: 'A personal portfolio built with React.',
          tech: ['React', 'Tailwind'],
          links: [{ label: 'Repo', href: 'https://github.com/example/portfolio', kind: 'repo' }],
          imageAlt: 'Screenshot of Portfolio Site',
        },
      ],
    }

    render(<Projects data={data} />)

    expect(screen.getByText('Portfolio Site')).toBeInTheDocument()
    expect(screen.getByText('A personal portfolio built with React.')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Tailwind')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Repo' })).toHaveAttribute(
      'href',
      'https://github.com/example/portfolio',
    )
    const stub = screen.getByRole('img', { name: 'Screenshot of Portfolio Site' })
    expect(stub.tagName).not.toBe('IMG')
  })

  it('renders a real <img> when image is provided and multiple links (triangulation)', () => {
    const data: ProjectsData = {
      heading: 'Projects',
      projects: [
        {
          name: 'Task Tracker',
          description: 'A Kanban board app.',
          tech: ['Vue', 'Firebase'],
          links: [
            { label: 'Repo', href: 'https://github.com/example/tracker', kind: 'repo' },
            { label: 'Demo', href: 'https://tracker.example.com', kind: 'demo' },
          ],
          imageAlt: 'Screenshot of Task Tracker',
          image: '/tracker.png',
        },
      ],
    }

    render(<Projects data={data} />)

    const image = screen.getByRole('img', { name: 'Screenshot of Task Tracker' })
    expect(image.tagName).toBe('IMG')
    expect(image).toHaveAttribute('src', '/tracker.png')
    expect(screen.getByRole('link', { name: 'Demo' })).toHaveAttribute(
      'href',
      'https://tracker.example.com',
    )
  })

  it('opens repo and demo links safely in a new tab', () => {
    const data: ProjectsData = {
      heading: 'Projects',
      projects: [
        {
          name: 'Task Tracker',
          description: 'A Kanban board app.',
          tech: ['Vue', 'Firebase'],
          links: [
            { label: 'Repo', href: 'https://github.com/example/tracker', kind: 'repo' },
            { label: 'Demo', href: 'https://tracker.example.com', kind: 'demo' },
          ],
          imageAlt: 'Screenshot of Task Tracker',
        },
      ],
    }

    render(<Projects data={data} />)

    const repoLink = screen.getByRole('link', { name: 'Repo' })
    expect(repoLink).toHaveAttribute('target', '_blank')
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer')

    const demoLink = screen.getByRole('link', { name: 'Demo' })
    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
