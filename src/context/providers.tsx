'use client';

import { TailwindIndicator } from '@sohanemon/utils/components';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <TransitionProvider as={'main'} className="flex-1" initial="top"> */}
      <ThemeProvider defaultTheme="system">
        {children}
        <TailwindIndicator />
      </ThemeProvider>
      {/* </TransitionProvider> */}
    </>
  );
}
