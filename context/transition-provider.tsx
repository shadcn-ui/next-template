'use client';

import { ElementType } from 'react';
import { usePathname } from 'next/navigation';

import { Motion } from '@/components/motion';

export default function TransitionProvider(props: {
  children: React.ReactNode;
  className?: string;
  initial?: string;
  as?: ElementType;
}) {
  const path = usePathname();
  return <Motion key={path} transition={{ duration: 0.4 }} {...props} />;
}
