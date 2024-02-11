import { VariantLabels, Variants } from 'framer-motion';

const defaultVariants = {
  left: { x: -300, opacity: 0 },
  right: { x: 300, opacity: 0 },
  top: { y: -300, opacity: 0 },
  bottom: { y: 100, opacity: 0 },
  shrinked: { scaleX: 0, transformOrigin: 'left' },
  collapsed: { scaleY: 0, transformOrigin: 'top' },
  hidden: { opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1, scale: 1, scaleX: 1, scaleY: 1 },
} satisfies Variants;

const fullPosition = {
  'left-full': { x: '-99%', opacity: 0 },
  'right-full': { x: '99%', opacity: 0 },
  'top-full': { y: '-99%', opacity: 0 },
  'bottom-full': { y: '99%', opacity: 0 },
} satisfies Variants;

export const motionVariants = {
  ...defaultVariants,
  ...fullPosition,
} as const satisfies Variants;

export type MotionVariantsType =
  | keyof typeof motionVariants
  | Omit<VariantLabels, keyof (keyof typeof motionVariants)>;
