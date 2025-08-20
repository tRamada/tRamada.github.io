import './experience.css'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="item">
          <span className="year">2025</span>
          <h3>Frontend Developer <small>@ Freelance</small></h3>
          <p>Delivering performant React interfaces and component libraries for small teams.</p>
        </div>
        <div className="item">
          <span className="year">2024</span>
          <h3>Personal Projects</h3>
          <p>Built side projects exploring accessibility, animations and design tooling.</p>
        </div>
        <div className="item">
          <span className="year">2023</span>
          <h3>Learning Journey</h3>
          <p>Dived deep into JavaScript, React, CSS architecture and performance optimization.</p>
        </div>
      </div>
    </section>
  )
}

export default Experience
