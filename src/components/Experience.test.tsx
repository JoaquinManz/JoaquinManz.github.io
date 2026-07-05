import { render, screen } from '@testing-library/react'
import { Experience } from './Experience'
import type { ExperienceData } from '../data/types'

describe('Experience', () => {
  it('renders every entry with role, company, period, and highlights', () => {
    const data: ExperienceData = {
      heading: 'Experience',
      entries: [
        {
          role: 'Senior Engineer',
          company: 'Acme Corp',
          period: '2022 - Present',
          highlights: ['Led the platform migration', 'Mentored two engineers'],
        },
      ],
    }

    render(<Experience data={data} />)

    expect(screen.getByText('Senior Engineer')).toBeInTheDocument()
    expect(screen.getByText('Acme Corp')).toBeInTheDocument()
    expect(screen.getByText('2022 - Present')).toBeInTheDocument()
    expect(screen.getByText('Led the platform migration')).toBeInTheDocument()
    expect(screen.getByText('Mentored two engineers')).toBeInTheDocument()
  })

  it('renders multiple entries with different data (triangulation)', () => {
    const data: ExperienceData = {
      heading: 'Experience',
      entries: [
        {
          role: 'Junior Developer',
          company: 'Startup Inc',
          period: '2020 - 2022',
          highlights: ['Built the onboarding flow'],
        },
        {
          role: 'Intern',
          company: 'BigTech',
          period: '2019',
          highlights: ['Shipped an internal tool'],
        },
      ],
    }

    render(<Experience data={data} />)

    expect(screen.getByText('Junior Developer')).toBeInTheDocument()
    expect(screen.getByText('Startup Inc')).toBeInTheDocument()
    expect(screen.getByText('Intern')).toBeInTheDocument()
    expect(screen.getByText('BigTech')).toBeInTheDocument()
    expect(screen.getByText('Built the onboarding flow')).toBeInTheDocument()
    expect(screen.getByText('Shipped an internal tool')).toBeInTheDocument()
  })
})
