import './experience.css'

const experiences = [
  {
    period: '2025',
    role: 'Frontend Developer',
    org: 'Freelance',
    type: 'work',
    desc: 'Delivering performant React interfaces and design systems for small companies & startups with focus on UX and accessibility.',
    stack: ['React','CSS','Accessibility']
  },
  {
    period: '2022 – Now',
    role: "Bachelor's Degree",
    org: 'Software Engineering',
    type: 'education',
    desc: 'Building strong foundations in algorithms, data structures, software architecture & collaborative development.',
    stack: ['Java','Algorithms','Architecture']
  },
  {
    period: '2019 – 2022',
    role: 'Programming Course',
    org: 'Comprehensive Program',
    type: 'education',
    desc: 'Completed intensive multi-language curriculum covering core web technologies & modern tooling.',
    stack: ['HTML','CSS','JavaScript']
  }
]

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <p className="experience-intro">A quick journey through roles & learning. Each step sharpened different problem‑solving skills.</p>
      <ul className="exp-timeline animated-list" aria-label="Experience timeline">
        {experiences.map((exp, i) => (
          <li key={exp.period + exp.role} className={`exp-item type-${exp.type}`}>            
            <div className="exp-card">
              <span className="period" aria-label="period">{exp.period}</span>
              <h3>{exp.role} {exp.org && <small>@ {exp.org}</small>}</h3>
              <p className="desc">{exp.desc}</p>
              <ul className="tags" aria-label="tech & focus">
                {exp.stack.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
