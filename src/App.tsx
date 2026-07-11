import { Nav } from './components/Nav'
import { MobileBottomNav } from './components/MobileBottomNav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Secu } from './components/Secu'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { navItems } from './data/nav'
import { heroData } from './data/hero'
import { aboutData } from './data/about'
import { skillsData } from './data/skills'
import { experienceData } from './data/experience'
import { educationData } from './data/education'
import { secuData } from './data/secu'
import { projectsData } from './data/projects'
import { contactData } from './data/contact'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

function AppContent() {
  const { lang } = useLanguage()

  return (
    <>
      <Nav items={navItems[lang]} />
      <main className="mx-auto flex max-w-4xl flex-col gap-24 px-6 pt-24 pb-28 lg:pb-16">
        <section id="hero" className="scroll-mt-24">
          <Hero data={heroData[lang]} />
        </section>
        <section id="about" className="scroll-mt-24">
          <About data={aboutData[lang]} />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills data={skillsData[lang]} />
        </section>
        <section id="experience" className="scroll-mt-24">
          <Experience data={experienceData[lang]} />
        </section>
        <section id="education" className="scroll-mt-24">
          <Education data={educationData[lang]} />
        </section>
        <section id="secu" className="scroll-mt-24">
          <Secu data={secuData[lang]} />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects data={projectsData[lang]} />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact data={contactData[lang]} />
        </section>
      </main>
      <MobileBottomNav items={navItems[lang]} />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
