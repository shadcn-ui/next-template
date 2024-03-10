'use client';

import { ResponsiveIndicator } from '@sohanemon/utils/components';

import { isSSR } from '@/lib/utils';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {isSSR || <ResponsiveIndicator />}
    </>
  );
}
