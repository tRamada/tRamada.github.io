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
  { name: 'JavaScript', short: 'JS', color: '#f7df1e', level: 90, logo: jsLogo },
  { name: 'React', short: 'R', color: '#61dafb', level: 65, logo: reactLogo },
  { name: 'CSS3', short: 'CSS', color: '#2965f1', level: 80, logo: cssLogo },
  { name: 'HTML5', short: 'HTML', color: '#e44d26', level: 90, logo: htmlLogo }
    ]
  },
  {
    category: 'Backend & Runtime',
    items: [
  { name: 'Node.js', short: 'N', color: '#83cd29', level: 75, logo: nodeLogo },
  { name: 'Git', short: 'GIT', color: '#f14e32', level: 82, logo: gitLogo }
    ]
  },
  {
    category: 'Tooling',
    items: [
  { name: 'Vite', short: 'V', color: '#ffd62e', level: 60, logo: viteLogo }
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
      <h2>My Skills</h2>
      <p className="skills-intro">Technologies, runtimes & tools. Hover for proficiency.</p>
      <div className="skills-groups">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.category}>
            <h3 className="group-title">{group.category}</h3>
            <ul className="skills-grid animated-list">
              {group.items.map(s => (
                <li
                  key={s.name}
                  className="skill"
                  style={{ '--dot': s.color, '--level': s.level }}
                  title={`${s.name} – ${levelLabel(s.level)} (${s.level}%)`}
                >
                  <span className="logo" aria-hidden="true">
                    {s.logo ? <img src={s.logo} alt="" loading="lazy" /> : <span className="abbr">{s.short}</span>}
                  </span>
                  <span className="meta">
                    <span className="name">{s.name}</span>
                    <span className="meter" aria-hidden="true">
                      <span className="fill" />
                    </span>
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
