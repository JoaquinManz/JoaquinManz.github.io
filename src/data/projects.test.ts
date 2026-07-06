import { describe, expect, it } from 'vitest'
import { projectsData } from './projects'

describe('projectsData', () => {
  it('provides both es and en translations with the same number of projects', () => {
    expect(Object.keys(projectsData).sort()).toEqual(['en', 'es'])
    expect(projectsData.en.projects).toHaveLength(projectsData.es.projects.length)
  })

  it('translates the heading for the en locale', () => {
    expect(projectsData.es.heading).toBe('Proyectos')
    expect(projectsData.en.heading).toBe('Projects')
  })

  it('wires a real screenshot image for every project in both languages', () => {
    for (const project of [...projectsData.es.projects, ...projectsData.en.projects]) {
      expect(project.image, `${project.name} is missing an image`).toBeTruthy()
      expect(project.image).toMatch(/^\/img\//)
    }
  })

  it('keeps project names, tech stack, links and images identical across languages', () => {
    projectsData.es.projects.forEach((project, index) => {
      const enProject = projectsData.en.projects[index]
      expect(enProject.name).toBe(project.name)
      expect(enProject.tech).toEqual(project.tech)
      expect(enProject.links).toEqual(project.links)
      expect(enProject.image).toBe(project.image)
    })
  })

  it('translates the project description for the en locale', () => {
    const esProject = projectsData.es.projects.find((project) => project.name === 'Rabbit Ecommerce')
    const enProject = projectsData.en.projects.find((project) => project.name === 'Rabbit Ecommerce')

    expect(enProject?.description).not.toBe(esProject?.description)
  })
})
