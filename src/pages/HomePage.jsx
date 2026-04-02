import { CustomCursor } from '../components/CustomCursor.jsx'
import { NavBar } from '../components/NavBar.jsx'
import { Hero } from '../components/Hero.jsx'
import { StatsBar } from '../components/StatsBar.jsx'
import { Skills } from '../components/Skills.jsx'
import { Process } from '../components/Process.jsx'
import { Projects } from '../components/Projects.jsx'
import { Industries } from '../components/Industries.jsx'
import { Contact } from '../components/Contact.jsx'
import { Footer } from '../components/Footer.jsx'
import { useNavShadow } from '../components/hooks/useNavShadow.js'
import { useScrollReveal } from '../components/hooks/useScrollReveal.js'

export function HomePage() {
  useScrollReveal()
  useNavShadow()

  return (
    <>
      <CustomCursor />
      <NavBar />

      <Hero />
      <hr className="full-divider" />

      <StatsBar />
      <hr className="full-divider" />

      <Skills />
      <hr className="full-divider" />

      <Process />
      <hr className="full-divider" />

      <Projects />
      <hr className="full-divider" />

      <Industries />
      <hr className="full-divider" />

      <Contact />
      <Footer />
    </>
  )
}

