import type { ProjectsData } from './types'

export const projectsData: ProjectsData = {
  heading: 'Projects',
  projects: [
    {
      name: 'Rabbit Ecommerce',
      description: 'Ecommerce full stack con React, Node.js, MongoDB y APIs RESTful.',
      tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      links: [{ label: 'Repo', href: '[REPO_URL_RABBIT_ECOMMERCE]', kind: 'repo' }],
      imageAlt: 'Screenshot of Rabbit Ecommerce',
    },
    {
      name: 'Data Finance',
      description:
        'Sitio de finanzas responsive construido en React.js, con componentes reutilizables y diseño adaptable.',
      tech: ['React.js'],
      links: [{ label: 'Repo', href: '[REPO_URL_DATA_FINANCE]', kind: 'repo' }],
      imageAlt: 'Screenshot of Data Finance',
    },
    {
      name: 'Studio Ghibli App',
      description:
        'Aplicación en Vue.js que consume la API pública de Studio Ghibli, con renderizado dinámico y manejo de datos asíncronos.',
      tech: ['Vue.js'],
      links: [{ label: 'Repo', href: '[REPO_URL_STUDIO_GHIBLI_APP]', kind: 'repo' }],
      imageAlt: 'Screenshot of Studio Ghibli App',
    },
    {
      name: 'Geritch Restaurant',
      description: 'Landing page para restaurante con animaciones CSS y diseño responsive.',
      tech: ['HTML5', 'CSS3'],
      links: [{ label: 'Repo', href: '[REPO_URL_GERITCH_RESTAURANT]', kind: 'repo' }],
      imageAlt: 'Screenshot of Geritch Restaurant',
    },
  ],
}
