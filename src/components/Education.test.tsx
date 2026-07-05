import { render, screen } from '@testing-library/react'
import { Education } from './Education'
import type { EducationData } from '../data/types'

describe('Education', () => {
  it('renders every entry with title, institution, period, and highlights', () => {
    const data: EducationData = {
      heading: 'Education',
      entries: [
        {
          title: 'BSc in Computer Science',
          institution: 'MIT',
          period: '2018 - 2022',
          highlights: ['Graduated with honors'],
        },
      ],
    }

    render(<Education data={data} />)

    expect(screen.getByText('BSc in Computer Science')).toBeInTheDocument()
    expect(screen.getByText('MIT')).toBeInTheDocument()
    expect(screen.getByText('2018 - 2022')).toBeInTheDocument()
    expect(screen.getByText('Graduated with honors')).toBeInTheDocument()
  })

  it('renders multiple entries, including one without highlights, without crashing (triangulation)', () => {
    const data: EducationData = {
      heading: 'Education',
      entries: [
        {
          title: 'Web Development Bootcamp',
          institution: 'Le Wagon',
          period: '2017',
        },
        {
          title: 'High School Diploma',
          institution: 'Lincoln High',
          period: '2014 - 2017',
          location: 'Boston, USA',
          highlights: ['Class president'],
        },
      ],
    }

    render(<Education data={data} />)

    expect(screen.getByText('Web Development Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Le Wagon')).toBeInTheDocument()
    expect(screen.getByText('High School Diploma')).toBeInTheDocument()
    expect(screen.getByText('Boston, USA')).toBeInTheDocument()
    expect(screen.getByText('Class president')).toBeInTheDocument()
  })
})
