import { Variants } from 'framer-motion';

export const defaultVariants: Variants = {
  left: { x: -300, opacity: 0 },
  right: { x: 300, opacity: 0 },
  up: { y: -300, opacity: 0 },
  down: { y: 300, opacity: 0 },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};
