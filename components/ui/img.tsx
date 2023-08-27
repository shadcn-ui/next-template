import { readFile } from 'fs/promises';
import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { VariantProps, cva } from 'class-variance-authority';
import { getPlaiceholder } from 'plaiceholder';

import { cn } from '@/lib/utils';

export const imgVariants = cva(
  [' relative aspect-square w-full overflow-hidden'],
  {
    variants: {
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        custom: 'rounded-[40px]',
        full: 'rounded-full',
      },
    },
  }
);

export interface ImgProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imgVariants> {
  src: string;
  alt?: string;
  imageClassName?: string;
  loading?: 'lazy' | 'eager';
}

export default async function Img({
  className,
  rounded,
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
    <div className={cn(imgVariants({ rounded, className }))} {...props}>
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
