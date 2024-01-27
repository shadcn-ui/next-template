'use client';

import { TailwindIndicator } from '@sohanemon/utils/components';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider defaultTheme="system">
        {children}
        <TailwindIndicator />
      </ThemeProvider>
    </>
  );
}
