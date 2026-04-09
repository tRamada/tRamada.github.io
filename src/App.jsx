import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Stack from './sections/Stack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import './styles/global.css';
import './styles/components/button.css';
import './styles/components/tag.css';
import './styles/components/card.css';
import './styles/components/section-heading.css';
import './styles/sections/navbar.css';
import './styles/sections/hero.css';
import './styles/sections/about.css';
import './styles/sections/stack.css';
import './styles/sections/projects.css';
import './styles/sections/experience.css';
import './styles/sections/contact.css';

const sectionIds = ['hero', 'about', 'stack', 'projects', 'experience', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
