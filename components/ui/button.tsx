import { Fragment, HTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { buttonVariants } from './variants/button-variants';

type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantsType, 'size' | 'intent'> {
  asChild?: boolean;
  href?: string;
  target?: '_blank';
  variant?: `${NonNullable<ButtonVariantsType['size']>}/${NonNullable<
    ButtonVariantsType['intent']
  >}`;
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default/default',
      asChild = false,
      target,
      href,
      ...props
    },
    ref
  ) => {
    const [size, intent] = variant?.split('/') as [
      ButtonVariantsType['size'],
      ButtonVariantsType['intent']
    ];
    const Comp = asChild ? Slot : 'button';
    const LinkComp = href ? Link : Fragment;
    const anchorProps = href ? { href, target } : {};
    return (
      // @ts-ignore
      <LinkComp {...anchorProps}>
        <Comp
          className={cn(buttonVariants({ intent, size, className }))}
          ref={ref}
          {...props}
        />
      </LinkComp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
