import NextImage from 'next/image';
import { cleanSrc } from '@sohanemon/utils';

import { ImgProps } from '@/types/image.types';

export function Img({ src, width, height, alt, sizes, ...props }: ImgProps) {
  return (
    <NextImage
      alt={alt || 'Picture Element'}
      height={height || width || 300}
      src={cleanSrc(src as string)}
      width={width || 300}
      sizes={
        sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      }
      {...props}
    />
  );
}
