import { ElementType, HTMLAttributes, forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { textVariants } from './variants/text-variants';

type TextVariantsType = VariantProps<typeof textVariants>;

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    Omit<TextVariantsType, 'size' | 'weight' | 'color'> {
  as?: ElementType;
  variant?: `${NonNullable<TextVariantsType['size']>}/${NonNullable<
    TextVariantsType['weight']
  >}/${NonNullable<TextVariantsType['color']>}`;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as, variant = 'default/default', intent, ...props }, ref) => {
    const [size, weight, color] = variant?.split('/') as [
      TextVariantsType['size'],
      TextVariantsType['weight'],
      TextVariantsType['color']
    ];
    const Comp = as || 'p';
    return (
      <Comp
        className={cn(textVariants({ color, size, weight, intent, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, textVariants };
