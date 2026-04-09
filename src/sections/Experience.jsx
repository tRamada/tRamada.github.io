import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import SectionHeading from '../components/SectionHeading';
import Tag from '../components/Tag';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="experience section" aria-label="Experience">
      <div className="container">
        <SectionHeading title="Experience" subtitle="Where I've been and what I've learned." />

        <div className="timeline">
          {experience.map((entry, i) => (
            <motion.div
              key={i}
              className="timeline__item"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="timeline__marker" aria-hidden="true" />
              <article className="timeline__content">
                <span className="timeline__period">{entry.period}</span>
                <h3 className="timeline__role">{entry.role}</h3>
                <p className="timeline__company">{entry.company}</p>
                <p className="timeline__desc">{entry.description}</p>
                <div className="timeline__tags">
                  {entry.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
