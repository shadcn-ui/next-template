import { forwardRef } from 'react';

import { TextProps, TextVariantsType } from '@/types/text.types';
import { cn } from '@/lib/utils';

import { textVariants } from './variants/text.variants';

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    { className, as, variant = 'default/default/default', intent, ...props },
    ref
  ) => {
    const [size, weight, color] = intent
      ? []
      : (variant?.split('/') as [
          TextVariantsType['size'],
          TextVariantsType['weight'],
          TextVariantsType['color']
        ]);
    console.log(size, weight, color);
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
