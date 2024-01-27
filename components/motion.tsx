// @ts-nocheck
'use client';

import { ComponentPropsWithRef, ElementType, forwardRef, useId } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantLabels, Variants, motion } from 'framer-motion';

import {
  MotionVariantsType,
  motionVariants,
} from '@/config/variants/motion.variant';

interface MotionProps extends ComponentPropsWithRef<'div'> {
  as?: ElementType;
  asChild?: boolean;
  variants?: Variants;
  always?: boolean;
  initial?: MotionVariantsType | MotionVariantsType[];
  animate?: MotionVariantsType | MotionVariantsType[];
  exit?: MotionVariantsType | MotionVariantsType[];
}

const Component = forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, as = 'div', asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return <Comp ref={ref} {...props} />;
  }
);

Component.displayName = 'Motion';
const MotionComponent = motion(Component);

const withVariants =
  (Comp: typeof MotionComponent): typeof MotionComponent =>
  // eslint-disable-next-line react/display-name
  ({
    ref,
    transition,
    always,
    whileInView,
    ...props
  }: ComponentPropsWithRef<typeof MotionComponent>) => {
    const id = useId();
    return (
      <Comp
        key={id}
        ref={ref}
        variants={motionVariants}
        viewport={{ once: typeof always === 'undefined' ? true : false }}
        whileInView={props.animate ? undefined : whileInView || 'visible'}
        transition={{
          duration: 0.3,
          ...transition,
        }}
        {...props}
      />
    );
  };

export const Motion = withVariants(MotionComponent);

export const MotionDiv = motion.div;
