import { Fragment, forwardRef } from 'react';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@sohanemon/utils';

import { ButtonProps } from '@/types/button.types';
import { buttonVariants } from '@/config/variants/button-variants';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      target,
      href,
      query,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const LinkComp = href || query ? Link : Fragment;
    const anchorProps =
      href || query
        ? {
            href: `${href || ''}${
              query ? '?' + new URLSearchParams(query) : ''
            }`,
            target,
          }
        : {};
    return (
      // @ts-ignore
      <LinkComp {...anchorProps}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      </LinkComp>
    );
  }
);
Button.displayName = 'Button';

export { Button };
