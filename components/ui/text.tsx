import { HTMLAttributes, forwardRef } from 'react';
import { type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { textVariants } from './variants/text-variants';

type TextVariantsType = VariantProps<typeof textVariants>;

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    Omit<TextVariantsType, 'size' | 'weight'> {
  variant?: `${NonNullable<TextVariantsType['size']>}/${NonNullable<
    TextVariantsType['weight']
  >}`;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { className, textColor, variant = 'default/default', intent, ...props },
    ref
  ) => {
    const [size, weight] = variant?.split('/') as [
      TextVariantsType['size'],
      TextVariantsType['weight']
    ];
    return (
      <p
        className={cn(
          textVariants({ textColor, size, weight, intent, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, textVariants };
