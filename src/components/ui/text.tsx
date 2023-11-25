import { forwardRef } from 'react';
import { textVariants } from '@/src/config/variants/typography';
import { TextProps } from '@/src/types/text.types';
import { cn } from '@sohanemon/utils';

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

export { Text };
