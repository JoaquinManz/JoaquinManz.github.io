export interface NavItem { id: string; label: string }
export interface SocialLink { label: string; href: string }

export interface HeroData { name: string; title: string; tagline: string; ctaLabel: string; ctaHref: string }
export interface AboutData { heading: string; paragraphs: string[]; portraitAlt: string; portrait?: string }

export interface Skill { name: string; level?: 'beginner' | 'intermediate' | 'advanced' }
export interface SkillCategory { category: string; skills: Skill[] }
export interface SkillsData { heading: string; categories: SkillCategory[] }

export interface ExperienceEntry { role: string; company: string; period: string; location?: string; highlights: string[] }
export interface ExperienceData { heading: string; entries: ExperienceEntry[] }

export interface ProjectLink { label: string; href: string; kind: 'repo' | 'demo' | 'external' }
export interface Project { name: string; description: string; tech: string[]; links: ProjectLink[]; imageAlt: string; image?: string }
export interface ProjectsData { heading: string; projects: Project[] }

export interface ContactData { heading: string; message: string; email: string; socials: SocialLink[] }
