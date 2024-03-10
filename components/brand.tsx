import { cn } from '@sohanemon/utils';
import Link from 'next/link';
import type { HtmlHTMLAttributes } from 'react';

type CompType = {};

export function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', className)}>
      LOGO
    </Link>
  );
}
