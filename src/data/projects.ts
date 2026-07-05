import type { ProjectsData } from './types'

export const projectsData: ProjectsData = {
  heading: 'Projects',
  projects: [
    {
      name: '[PROYECTO_1]',
      description: '[DESCRIPCION_PROYECTO_1]',
      tech: ['[TECH_1]', '[TECH_2]', '[TECH_3]'],
      links: [
        { label: 'Repo', href: '[GITHUB_URL_PROYECTO_1]', kind: 'repo' },
        { label: 'Demo', href: '[DEMO_URL_PROYECTO_1]', kind: 'demo' },
      ],
      imageAlt: 'Screenshot of [PROYECTO_1]',
    },
    {
      name: '[PROYECTO_2]',
      description: '[DESCRIPCION_PROYECTO_2]',
      tech: ['[TECH_1]', '[TECH_4]'],
      links: [
        { label: 'Repo', href: '[GITHUB_URL_PROYECTO_2]', kind: 'repo' },
      ],
      imageAlt: 'Screenshot of [PROYECTO_2]',
    },
    {
      name: '[PROYECTO_3]',
      description: '[DESCRIPCION_PROYECTO_3]',
      tech: ['[TECH_5]', '[TECH_6]'],
      links: [
        { label: 'Repo', href: '[GITHUB_URL_PROYECTO_3]', kind: 'repo' },
        { label: 'Live site', href: '[EXTERNAL_URL_PROYECTO_3]', kind: 'external' },
      ],
      imageAlt: 'Screenshot of [PROYECTO_3]',
    },
  ],
}
