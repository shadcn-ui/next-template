import { HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantsType, 'size' | 'intent'> {
  asChild?: boolean;
  href?: string;
  target?: '_blank';
  full?: boolean;
  variant?: `${NonNullable<ButtonVariantsType['size']>}/${NonNullable<
    ButtonVariantsType['intent']
  >}`;
}
