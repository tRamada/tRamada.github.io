import { motion } from 'framer-motion';
import { stack } from '../data/stack';
import SectionHeading from '../components/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Stack() {
  return (
    <section id="stack" className="stack section" aria-label="Tech stack">
      <div className="container">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with day to day." />

        <div className="stack__categories">
          {stack.map((category, ci) => (
            <motion.div
              key={category.category}
              className="stack__category"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ staggerChildren: 0.06, delayChildren: ci * 0.1 }}
            >
              <motion.h3 className="stack__category-title" variants={fadeUp}>
                {category.category}
              </motion.h3>
              <div className="stack__items">
                {category.items.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="stack__item"
                      variants={fadeUp}
                      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    >
                      <Icon className="stack__icon" size={24} aria-hidden="true" />
                      <span className="stack__label">{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
