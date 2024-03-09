'use client';

import { isSSR } from "@/lib/utils";
import { ResponsiveIndicator } from "@sohanemon/utils/components";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
        {isSSR || <ResponsiveIndicator />}
    </>
  );
}
