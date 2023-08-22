'use client';

import { usePathname } from 'next/navigation';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
  initial = 'hidden',
}: {
  children: React.ReactNode;
  initial?: string;
}) {
  const path = usePathname();
  return (
    <Motion
      className=""
      initial={initial}
      transition={{ duration: 0.4 }}
      key={path}
    >
      {children}
    </Motion>
  );
}
