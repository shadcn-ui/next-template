'use client';

import { usePathname } from 'next/navigation';
import Motion from '@sohanemon/motion';

export default function TransitionProvider({
  children,
  initial = 'hidden',
}: {
  children: React.ReactNode;
  initial?: string;
}) {
  const path = usePathname();
  return (
    <Motion initial={initial} transition={{ duration: 0.4 }} key={path}>
      {children}
    </Motion>
  );
}
