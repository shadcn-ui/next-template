import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    variant: {
      heading: 'text-5xl',
    },
    size: {},
  },
});
