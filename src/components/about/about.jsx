import './about.css'

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-grid">
        <div className="about-blurb">
          <p>I’m a frontend-focused developer who loves crafting polished interfaces, micro-interactions and scalable component systems. I care about performance, accessibility and intuitive UX.</p>
          <p>Right now I’m deepening my knowledge of advanced React patterns, animation techniques and design tokens while shipping side projects.</p>
        </div>
        <ul className="stats">
          <li>
            <span className="num">2+</span>
            <span className="label">Years Learning & Building</span>
          </li>
          <li>
            <span className="num">15+</span>
            <span className="label">Personal Projects</span>
          </li>
          <li>
            <span className="num">100%</span>
            <span className="label">Passion & Curiosity</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About