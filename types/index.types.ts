import type { ImageProps } from 'next/image';
import type { NextMiddleware } from 'next/server';
import type * as React from 'react';

export type PageProps = Readonly<{
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}>;

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export type NavType = { title: string; href: `/${string}` };

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
