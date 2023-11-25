import { Variants } from 'framer-motion';

export const defaultVariants: Variants = {
  left: { x: -300, opacity: 0 },
  right: { x: 300, opacity: 0 },
  top: { y: -300, opacity: 0 },
  bottom: { y: 100, opacity: 0 },
  shrinked: { scaleX: 0, transformOrigin: 'left' },
  collapsed: { scaleY: 0, transformOrigin: 'top' },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, scale: 1, scaleX: 1, scaleY: 1 },
};
