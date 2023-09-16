import { forwardRef } from 'react';
import { cn } from '@sohanemon/utils';

import { TextProps } from '@/types/text.types';
import { textVariants } from '@/config/variants/typography';

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as, size, intent, center, ...props }, ref) => {
    const Comp = as || 'p';
    return (
      <Comp
        ref={ref}
        className={cn(
          { 'text-center mx-auto ': center },
          textVariants({ size, intent, className })
        )}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text as P };
