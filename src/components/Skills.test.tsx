import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import type { SkillsData } from '../data/types'

describe('Skills', () => {
  it('renders every category name and every skill name within it', () => {
    const data: SkillsData = {
      heading: 'Skills',
      categories: [
        { category: 'Frontend', skills: [{ name: 'React' }, { name: 'TypeScript' }] },
        { category: 'Backend', skills: [{ name: 'Node.js' }] },
      ],
    }

    render(<Skills data={data} />)

    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders a different set of categories and skills (triangulation)', () => {
    const data: SkillsData = {
      heading: 'Skills',
      categories: [
        { category: 'DevOps', skills: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Terraform' }] },
      ],
    }

    render(<Skills data={data} />)

    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes')).toBeInTheDocument()
    expect(screen.getByText('Terraform')).toBeInTheDocument()
  })
})
