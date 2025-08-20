import './home.css'

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Hey, I'm <span className="accent">Tiago</span></h1>
        <p className="tagline">Building fast, accessible & delightful digital products.</p>
        <p className="intro">I focus on React, design systems, performance and clean, maintainable code. I enjoy turning complex problems into elegant interfaces.</p>
        <div className="hero-ctas">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn ghost">Contact</a>
        </div>
        <ul className="social">
          <li><a href="https://github.com/tRamada" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><img src="https://github.com/favicon.ico" alt="GitHub" /></a></li>
          <li><a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><img src="https://www.linkedin.com/favicon.ico" alt="LinkedIn" /></a></li>
        </ul>
        <div className="scroll-hint" aria-hidden="true"><span />Scroll</div>
      </div>
    </section>
  )
}

export default Home
