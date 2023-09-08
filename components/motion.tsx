// @ts-nocheck
'use client';

import { ComponentPropsWithRef, ElementType, forwardRef, useId } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Variants, motion } from 'framer-motion';

import { defaultVariants } from '@/lib/motion-variants';

interface MotionProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  asChild?: boolean;
  variants?: Variants;
  always?: boolean;
}

const Component = forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as || 'div';
    return <Comp ref={ref} {...props} />;
  }
);

Component.displayName = 'Motion';
const MotionComponent = motion(Component);
MotionComponent.displayName = 'MotionComponent';

const withVariants =
  (Comp: typeof Component): typeof MotionComponent =>
  // eslint-disable-next-line react/display-name
  ({
    ref,
    transition,
    always,
    whileInView,
    variants,
    ...props
  }: ComponentPropsWithRef<typeof MotionComponent>) => {
    const id = useId();
    return (
      <Comp
        key={id}
        ref={ref}
        variants={{ ...defaultVariants, ...variants }}
        whileInView={!props.animate && (whileInView || 'visible')}
        viewport={{ once: !always }}
        transition={{
          duration: 0.3,
          ...transition,
        }}
        {...props}
      />
    );
  };

const Motion = withVariants(MotionComponent);

export default Motion;
