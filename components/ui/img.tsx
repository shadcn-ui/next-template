import { readFile } from 'fs/promises';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import { cn } from '@/lib/utils';

export interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  imageClassName?: string;
  loading?: 'lazy' | 'eager';
}

export default async function Img({
  className,
  imageClassName,
  ...props
}: ImgProps) {
  let buffer, src;

  if (props.src.startsWith('http')) {
    const res = await fetch(props.src);
    buffer = await res.arrayBuffer();
    src = props.src;
  } else {
    buffer = await readFile('.' + props.src);
    src = props.src.replace('/public/', '/');
  }

  const { base64 } = await getPlaiceholder(Buffer.from(buffer));

  return (
    <div
      className={cn('relative aspect-square w-full overflow-hidden', className)}
      {...props}
    >
      <Image
        src={src!}
        placeholder="blur"
        className={cn('object-cover', imageClassName)}
        alt={props.alt || ''}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={props.loading}
        blurDataURL={base64}
      />
    </div>
  );
}
