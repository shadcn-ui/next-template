import { ComponentPropsWithRef, ElementType } from 'react';
import { textVariants } from '@/src/config/variants/typography';
import { VariantProps } from 'class-variance-authority';

export type TextVariantsType = VariantProps<typeof textVariants>;

export interface TextProps
  extends ComponentPropsWithRef<'h4'>,
    TextVariantsType {
  as?: ElementType;
  center?: boolean;
}
