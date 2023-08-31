import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@sohanemon/utils';

import { Icons } from './icons';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      <Icons.logo />
    </Link>
  );
}
