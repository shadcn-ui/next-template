/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import NextImageComponent from 'next/image';
import { cleanSrc } from '@sohanemon/utils';

import { ImgProps } from '@/types/image.types';
import { shimmer, svgToBase64 } from '@/lib/utils';

function Image({
  src,
  width,
  height,
  alt,
  blurDataURL,
  placeholder,
  sizes,
  ...props
}: ImgProps) {
  return (
    <NextImageComponent
      alt={alt || 'Picture Element'}
      height={height || width || 300}
      placeholder={placeholder as any}
      src={cleanSrc(src as string)}
      width={width || 300}
      sizes={
        sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      }
      {...props}
    />
  );
}

export const Img = ({ placeholder, ...props }: ImgProps) => {
  const imgComp: Record<string, React.ReactNode> = {
    shimmer: (
      <Image
        {...props}
        placeholder={`data:image/svg+xml;base64,${svgToBase64(
          shimmer(props.width || 300, props.height || props.width || 300)
        )}`}
      />
    ),
  };
  return (
    imgComp[placeholder!] || <Image placeholder={placeholder} {...props} />
  );
};
