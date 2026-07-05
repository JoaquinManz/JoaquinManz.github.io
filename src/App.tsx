import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { navItems } from './data/nav'
import { heroData } from './data/hero'
import { aboutData } from './data/about'
import { skillsData } from './data/skills'
import { experienceData } from './data/experience'
import { projectsData } from './data/projects'
import { contactData } from './data/contact'

function App() {
  return (
    <>
      <Nav items={navItems} />
      <main className="mx-auto flex max-w-4xl flex-col gap-24 px-6 pt-24 pb-16">
        <section id="hero" className="scroll-mt-24">
          <Hero data={heroData} />
        </section>
        <section id="about" className="scroll-mt-24">
          <About data={aboutData} />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills data={skillsData} />
        </section>
        <section id="experience" className="scroll-mt-24">
          <Experience data={experienceData} />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects data={projectsData} />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact data={contactData} />
        </section>
      </main>
    </>
  )
}

export default App
