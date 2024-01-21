'use client';

import { TailwindIndicator } from '@sohanemon/utils/components';
import { ThemeProvider } from 'next-themes';

import { Cursor } from '@/components/cursor';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme="dark">
        {children}
        <TailwindIndicator />
        <Cursor />
      </ThemeProvider>
    </>
  );
}
