import * as React from 'react';
import type { ImageProps } from 'next/image';

type OmittedImageProps = 'height' | 'width' | 'srcSet' | 'placeholder' | 'alt';
type ModifiedImageProps = Partial<{
  alt: string;
  width: number;
  height: number;
  placeholder: 'blur' | 'color' | 'shimmer' | 'empty' | `data:image/${string}`;
}>;

export type ImgProps = ModifiedImageProps &
  Omit<ImageProps, OmittedImageProps> &
  Omit<React.ImgHTMLAttributes<HTMLImageElement>, OmittedImageProps>;
