import { describe, expect, it } from 'vitest'
import { projectsData } from './projects'

describe('projectsData', () => {
  it('wires a real screenshot image for every project', () => {
    for (const project of projectsData.projects) {
      expect(project.image, `${project.name} is missing an image`).toBeTruthy()
      expect(project.image).toMatch(/^\/img\//)
    }
  })
})
