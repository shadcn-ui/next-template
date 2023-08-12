'use client';

import { ElementType, HtmlHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { Variants, motion } from 'framer-motion';

import { defaultVariants } from '@/config/variants';

interface MotionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  asChild?: boolean;
  variants?: Variants;
}

const Component = forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, as, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as || 'div';
    return <Comp ref={ref} {...props} />;
  }
);

Component.displayName = 'Motion';
const MotionComponent = motion(Component);

const withVariants =
  (Comp: typeof MotionComponent): typeof MotionComponent =>
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  (props: any) =>
    (
      <Comp
        variants={defaultVariants}
        animate={props.animate || 'visible'}
        transition={{
          delay: 0.1,
          duration: 0.5,
          type: 'spring',
          ...props.transition,
        }}
        {...props}
      />
    );

const Motion = withVariants(MotionComponent);

export default Motion;
