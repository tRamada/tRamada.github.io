import './skills.css'
import jsLogo from '../../assets/logos/js.png'
import reactLogo from '../../assets/logos/react.png'
import nodeLogo from '../../assets/logos/node.png'
import cssLogo from '../../assets/logos/css.png'
import htmlLogo from '../../assets/logos/html.png'
import gitLogo from '../../assets/logos/git.png'
import viteLogo from '../../assets/logos/vite.png'

// Grouped skills with proficiency (0-100) & category for improved layout and context
const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', short: 'JS', level: 90, logo: jsLogo },
      { name: 'React', short: 'R', level: 65, logo: reactLogo },
      { name: 'CSS3', short: 'CSS', level: 80, logo: cssLogo },
      { name: 'HTML5', short: 'HTML', level: 90, logo: htmlLogo }
    ]
  },
  {
    category: 'Backend & Runtime',
    items: [
      { name: 'Node.js', short: 'N', level: 75, logo: nodeLogo },
      { name: 'Git', short: 'GIT', level: 82, logo: gitLogo }
    ]
  },
  {
    category: 'Tooling',
    items: [
      { name: 'Vite', short: 'V', level: 60, logo: viteLogo }
    ]
  }
]

function levelLabel(level){
  if(level >= 90) return 'Expert';
  if(level >= 80) return 'Advanced';
  if(level >= 70) return 'Proficient';
  if(level >= 55) return 'Intermediate';
  return 'Familiar';
}

function Skills() {
  return (
    <section id="skills">
      <header className="skills-header">
        <h2>My Skills</h2>
        <p className="skills-intro">Core stack and tools I use to ship fast, accessible interfaces.</p>
      </header>
      <div className="skills-groups">
        {skillGroups.map(group => (
          <div
            className="skill-group"
            key={group.category}
            data-accent={group.category === 'Frontend' ? 'a' : group.category === 'Backend & Runtime' ? 'b' : 'c'}
          >
            <div className="group-head">
              <h3 className="group-title">{group.category}</h3>
            </div>
            <ul className="skills-grid animated-list">
              {group.items.map(s => (
                <li
                  key={s.name}
                  className="skill"
                  title={`${s.name} – ${levelLabel(s.level)} (${s.level}%)`}
                >
                  <span className="logo" aria-hidden="true">
                    {s.logo ? <img src={s.logo} alt="" loading="lazy" /> : <span className="abbr">{s.short}</span>}
                  </span>
                  <span className="meta">
                    <span className="name">{s.name}</span>
                    <span className="level-label" aria-hidden="true">{levelLabel(s.level)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
