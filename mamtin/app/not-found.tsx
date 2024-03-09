'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Brand } from '@/components/brand';

export default function CatchPage() {
  const pathname = usePathname();

  return (
    <section className="fixed inset-0 flex min-h-full flex-col items-center justify-center">
      <Brand />
      <br />
      <p>
        <strong className="capitalize">{pathname.split('/').pop()}</strong>{' '}
        under Construction
      </p>
      <Link className="mt-6 text-xs hover:text-primary" href="/">
        Back to home
      </Link>
    </section>
  );
}
