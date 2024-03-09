import type { ImgHTMLAttributes } from 'react';
import type { ImageProps } from 'next/image';

export type ImgProps = {
  alt?: string;
  placeholder?: 'blur' | 'color' | 'shimmer' | 'empty' | `data:image/${string}`;
} & Omit<ImageProps, 'height' | 'width' | 'srcSet'> &
  Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width' | 'srcSet'>;
