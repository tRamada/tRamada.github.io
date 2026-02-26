import './home.css'

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="kicker">Software Engineer</p>
          <h1>
            Hey, I'm <span className="accent">Tiago</span>
          </h1>
          <p className="tagline">Building fast, accessible & delightful digital products.</p>
          <p className="intro">I focus on React, design systems, performance and clean, maintainable code — turning complex problems into elegant interfaces.</p>

          <div className="hero-badges" aria-label="Focus areas">
            <span className="badge">Frontend</span>
            <span className="badge">React</span>
            <span className="badge">Design Systems</span>
            <span className="badge">Performance</span>
          </div>

          <div className="hero-ctas">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn ghost">Contact</a>
          </div>

          <ul className="social" aria-label="Social links">
            <li>
              <a href="https://github.com/tRamada" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.81 1.22 1.81 1.22 1.04 1.8 2.72 1.28 3.38.98.11-.75.41-1.28.75-1.57-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.98 0 1.96.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.8 1.2 1.83 1.2 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9.75h3.96v10.5H3V9.75Zm7.34 0H14.1v1.46h.05c.42-.8 1.45-1.64 2.98-1.64 3.19 0 3.78 2.1 3.78 4.84v5.84h-3.96v-5.18c0-1.24-.02-2.84-1.73-2.84-1.73 0-1.99 1.36-1.99 2.75v5.27h-3.96V9.75Z"/></svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>

        <aside className="hero-card" aria-label="Quick highlights">
          <div className="hero-card-top">
            <div className="avatar" aria-hidden="true">
              <span className="avatar-ring" />
              <span className="avatar-initials">TR</span>
            </div>
            <div className="hero-card-title">
              <p className="name">Tiago Ramada</p>
              <p className="subtitle">React • UI Engineering • DX</p>
            </div>
          </div>

          <ul className="hero-highlights" aria-label="Highlights">
            <li>
              <span className="h-label">Based in</span>
              <span className="h-value">Portugal (Remote-friendly)</span>
            </li>
            <li>
              <span className="h-label">Currently</span>
              <span className="h-value">Building side projects & sharpening fundamentals</span>
            </li>
            <li>
              <span className="h-label">Focus</span>
              <span className="h-value">Performance, accessibility, clean UI architecture</span>
            </li>
          </ul>

          <div className="hero-mini-ctas">
            <a className="mini-link" href="#experience">Timeline</a>
            <a className="mini-link" href="#skills">Skills</a>
            <a className="mini-link" href="#projects">Projects</a>
          </div>
        </aside>
      </div>

      <div className="scroll-hint" aria-hidden="true"><span />Scroll</div>
    </section>
  )
}

export default Home
