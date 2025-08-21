import { useState, useMemo } from 'react'
import './projects.css'

// Extended project metadata for richer presentation
const projects = [
  {
    title: 'Password Generator',
    blurb: 'Generate strong passwords with ease.',
    stack: ['HTML','JavaScript','CSS'],
    tags: ['frontend','ui'],
    repo: 'https://github.com/tRamada/PG-Website',
    demo: '#',
    year: 2023
  },
  {
    title: 'Mutega Toolbox',
    blurb: 'Toolbox for managing/accessing Mutega tools all in one place.',
    stack: ['React','Node', 'Express', 'JavaScript'],
    tags: ['frontend','fullstack'],
    repo: '#',
    demo: 'https://toolbox.mutega.se',
    year: 2025
  },
  {
    title: 'Move-To-OU',
    blurb: 'Automate the User/Users move between OU path from Active Directory (Windows Server)',
    stack: ['PowerShell'],
    tags: ['productivity','automation', 'backend'],
    repo: '#',
    demo: '#',
    year: 2022
  },
  {
    title: 'AutoPack',
    blurb: 'Online solution designed to streamline the packaging of Windows Classic applications for Microsoft Intune.',
    stack: ['Node', 'Express', 'JavaScript'],
    tags: ['packaging', 'windows', 'intune', 'automation', 'fullstack'],
    repo: '#',
    demo: 'https://autopack.mutega.se',
    year: 2024
  }
]

const allTags = Array.from(new Set(projects.flatMap(p => p.tags))).sort();

function Projects() {
  const [activeTag, setActiveTag] = useState('all');
  const filtered = useMemo(() => activeTag === 'all' ? projects : projects.filter(p => p.tags.includes(activeTag)), [activeTag]);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="projects-intro">Some things I’ve built or explored. Filter by focus.</p>
      <div className="project-filters" role="tablist" aria-label="Project filters">
        <button
          className={activeTag === 'all' ? 'active' : ''}
          onClick={() => setActiveTag('all')}
          role="tab"
          aria-selected={activeTag === 'all'}
        >All</button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={activeTag === tag ? 'active' : ''}
            onClick={() => setActiveTag(tag)}
            role="tab"
            aria-selected={activeTag === tag}
          >{tag}</button>
        ))}
      </div>
      <div className="cards animated-list">
        {filtered.map(p => (
          <article key={p.title} className="project-card" data-tags={p.tags.join(' ')}>
            <div className="thumb" aria-hidden="true">
              <div className="spark" />
              <span className="year">{p.year}</span>
            </div>
            <header>
              <h3>{p.title}</h3>
              <div className="stack">
                {p.stack.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </header>
            <p className="blurb">{p.blurb}</p>
            <div className="actions">
              <a href={p.demo} className="mini-btn" aria-label={'Demo for ' + p.title}>Demo</a>{' '}
              <a href={p.repo} className="mini-btn outline" aria-label={'Repo for ' + p.title}>Code</a>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <p className="empty" role="status">No projects for <strong>{activeTag}</strong> yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
