import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { buttonVariants } from './variants/button-variants';

type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantsType, 'size' | 'intent'> {
  asChild?: boolean;
  variant?: `${NonNullable<ButtonVariantsType['size']>}/${NonNullable<
    ButtonVariantsType['intent']
  >}`;
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default/default', asChild = false, ...props },
    ref
  ) => {
    const [size, intent] = variant?.split('/') as [
      ButtonVariantsType['size'],
      ButtonVariantsType['intent']
    ];
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
