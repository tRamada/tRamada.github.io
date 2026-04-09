import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', href, onClick, ...props }) {
  const className = `btn btn--${variant}`;

  const motionProps = {
    className,
    whileHover: { y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
    ...props,
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
