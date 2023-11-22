import { ComponentPropsWithRef } from 'react';
import Image from 'next/image';

export type ImgProps = {
  inject?: boolean;
  alt?: string;
} & Omit<ComponentPropsWithRef<typeof Image>, 'alt'>;
