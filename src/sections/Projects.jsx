import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import { projects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';
import Tag from '../components/Tag';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function Projects() {
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags)];
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="projects section" aria-label="Projects">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Things I've built — some for fun, some for real." />

        <div className="projects__filters" role="tablist" aria-label="Filter projects">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`projects__filter ${activeFilter === tag ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(tag)}
              role="tab"
              aria-selected={activeFilter === tag}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          className="projects__grid"
          layout
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.08 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
                variants={cardVariants}
                layout
                exit="exit"
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              >
                <div className="projects__card-header">
                  <HiOutlineCode size={20} className="projects__card-icon" aria-hidden="true" />
                  <span className="projects__card-year">{project.year}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>

                <div className="projects__card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}>
                      <HiOutlineCode size={18} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                      <HiOutlineExternalLink size={18} /> Demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
