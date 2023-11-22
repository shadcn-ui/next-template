import { ComponentPropsWithRef } from 'react';
import Image from 'next/image';

export type ImgProps = {
  alt?: string;
  placeholder?: 'blur' | 'color' | 'shimmer' | 'empty' | `data:image/${string}`;
} & Omit<ComponentPropsWithRef<typeof Image>, 'placeholder' | 'alt'>;
