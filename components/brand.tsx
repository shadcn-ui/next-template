import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@sohanemon/utils';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link href={'/'} {...props} className={cn('', {}, className)}>
      LOGO
    </Link>
  );
}
