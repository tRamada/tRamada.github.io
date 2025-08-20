import { useState, useMemo } from 'react'
import './projects.css'

// Extended project metadata for richer presentation
const projects = [
  {
    title: 'Portfolio Platform',
    blurb: 'Reusable component system + dark/light theming.',
    stack: ['React','Design Tokens','CSS'],
    tags: ['frontend','ui'],
    repo: '#',
    demo: '#',
    year: 2024
  },
  {
    title: 'Realtime Chat App',
    blurb: 'Typing indicators, presence & secure auth.',
    stack: ['WebSockets','Auth','Node'],
    tags: ['realtime','backend','fullstack'],
    repo: '#',
    demo: '#',
    year: 2024
  },
  {
    title: 'Task Tracker',
    blurb: 'Drag & drop kanban with persistence.',
    stack: ['React DnD','State Mgmt'],
    tags: ['productivity','frontend'],
    repo: '#',
    demo: '#',
    year: 2023
  },
  {
    title: 'Metrics Dashboard',
    blurb: 'Cached API aggregation & charts.',
    stack: ['APIs','Charts','Perf'],
    tags: ['data','frontend'],
    repo: '#',
    demo: '#',
    year: 2023
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
