import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted',
    },
    intent: {
      heading: 'text-5xl md:text-[80px] uppercase ',
      title: 'text-4xl font-bold uppercase',
    },
    size: {
      sm: 'text-xs md:text-sm',
      default: 'text-sm md:text-base',
      lg: 'text-base md:text-lg',
    },
    weight: {
      default: 'font-normal',
      light: 'font-light',
      medium: 'font-medium md:font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
    weight: 'default',
  },
});
