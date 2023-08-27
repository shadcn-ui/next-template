import { Fragment, forwardRef } from 'react';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';

import { ButtonProps, ButtonVariantsType } from '@/types/button';
import { cn } from '@/lib/utils';

import { buttonVariants } from './variants/button-variants';

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
          className={cn(buttonVariants({ intent, size, className }), {
            'w-full': props.full,
          })}
          ref={ref}
          {...props}
        />
      </LinkComp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
