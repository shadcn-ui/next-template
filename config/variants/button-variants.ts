import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-foreground hover:bg-primary/80',
      },
      size: {
        default: 'h-10 py-2 px-4',
      },
    },
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
  }
);
