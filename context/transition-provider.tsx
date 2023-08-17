'use client';

import { usePathname } from 'next/navigation';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <Motion
      className=""
      initial="down"
      transition={{ duration: 0.4 }}
      key={path}
    >
      {children}
    </Motion>
  );
}
