import { readFile } from 'fs/promises';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import { cn } from '@/lib/utils';

interface ImgProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
}

export default async function Img({ className, ...props }: ImgProps) {
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
    <>
      <div className={cn('relative h-56 w-56', className)} {...props}>
        <Image
          src={src!}
          placeholder="blur"
          alt={props.alt || ''}
          fill
          blurDataURL={base64}
        />
      </div>
    </>
  );
}
