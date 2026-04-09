import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personal } from '../data/personal';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Contact() {
  return (
    <section id="contact" className="contact section" aria-label="Contact">
      <div className="container">
        <SectionHeading title="Contact" subtitle="Let's talk." />

        <motion.div
          className="contact__content"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p className="contact__text" variants={fadeUp}>
            I&rsquo;m currently {personal.availability.toLowerCase()}. If you have a project in mind,
            want to collaborate, or just want to say hi — reach out.
          </motion.p>

          <motion.div className="contact__email" variants={fadeUp}>
            <Button href={`mailto:${personal.email}`}>
              <HiOutlineMail size={20} />
              {personal.email}
            </Button>
          </motion.div>

          <motion.div className="contact__socials" variants={fadeUp}>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub profile"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn profile"
            >
              <FiLinkedin size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
