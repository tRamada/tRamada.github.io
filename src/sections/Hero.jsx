import { motion } from 'framer-motion';
import { HiOutlineArrowDown, HiOutlineMail } from 'react-icons/hi';
import { personal } from '../data/personal';
import Button from '../components/Button';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="hero section" aria-label="Introduction">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow" />
      </div>

      <motion.div
        className="hero__content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero__greeting" variants={item}>
          Hey, I&rsquo;m
        </motion.p>

        <motion.h1 className="hero__name" variants={item}>
          {personal.name}<span className="hero__dot">.</span>
        </motion.h1>

        <motion.p className="hero__headline" variants={item}>
          {personal.headline}
        </motion.p>

        <motion.div className="hero__cta" variants={item}>
          <Button href="#projects">
            <HiOutlineArrowDown size={18} />
            View Work
          </Button>
          <Button variant="ghost" href="#contact">
            <HiOutlineMail size={18} />
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
