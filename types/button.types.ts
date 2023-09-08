import { ComponentPropsWithRef } from 'react';
import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';

export type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    ButtonVariantsType {
  asChild?: boolean;
  href?: string;
  target?: '_blank';
  full?: boolean;
}
