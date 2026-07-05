import type { SkillsData } from './types'

export const skillsData: SkillsData = {
  heading: 'Skills',
  categories: [
    {
      category: 'Frontend',
      skills: [
        { name: '[SKILL_FRONTEND_1]', level: 'advanced' },
        { name: '[SKILL_FRONTEND_2]', level: 'intermediate' },
        { name: '[SKILL_FRONTEND_3]', level: 'advanced' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: '[SKILL_BACKEND_1]', level: 'intermediate' },
        { name: '[SKILL_BACKEND_2]', level: 'beginner' },
      ],
    },
  ],
}
