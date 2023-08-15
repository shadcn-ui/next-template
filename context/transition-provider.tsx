'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Motion
        initial={{ x: -1000, opacity: 0 }}
        animate="visible"
        transition={{ delay: 0, duration: 0.4 }}
        exit={{ x: 1000, opacity: 0 }}
        key={path}
      >
        {children}
      </Motion>
    </AnimatePresence>
  );
}
