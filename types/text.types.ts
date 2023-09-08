import { ComponentPropsWithRef, ElementType } from 'react';
import { VariantProps } from 'class-variance-authority';

import { textVariants } from '@/components/ui/text';

export type TextVariantsType = VariantProps<typeof textVariants>;

export interface TextProps
  extends ComponentPropsWithRef<'h4'>,
    TextVariantsType {
  as?: ElementType;
}
