'use client';

import { ResponsiveIndicator } from '@sohanemon/utils/components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ResponsiveIndicator />
    </>
  );
}
