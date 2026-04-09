import { motion } from 'framer-motion';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="about section" aria-label="About me">
      <div className="container">
        <SectionHeading title="About" subtitle="A bit about who I am and what I do." />

        <div className="about__grid">
          <motion.div
            className="about__bio"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1 }}
          >
            {personal.about.map((paragraph, i) => (
              <motion.p key={i} variants={fadeUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="about__stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {personal.stats.map((stat, i) => (
              <motion.div key={i} className="about__stat" variants={fadeUp}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
