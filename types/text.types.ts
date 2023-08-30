import { ComponentPropsWithRef, ElementType, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

import { textVariants } from '@/components/ui/text';

export type TextVariantsType = VariantProps<typeof textVariants>;

export interface TextProps
  extends ComponentPropsWithRef<'h4'>,
    Omit<TextVariantsType, 'size' | 'weight' | 'color'> {
  as?: ElementType;
  variant?: `${NonNullable<TextVariantsType['size']>}/${NonNullable<
    TextVariantsType['weight']
  >}/${NonNullable<TextVariantsType['color']>}`;
}
