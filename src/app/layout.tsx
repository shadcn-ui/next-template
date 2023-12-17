import { Providers } from '@/context/providers';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';

import '@/styles/custom.css';
import '@/styles/globals.css';
import { cn } from '@sohanemon/utils';

export const metadata = siteConfig.metadata;
export const viewport = siteConfig.viewport;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html suppressHydrationWarning className="scroll-pt-16" lang="en">
        <head />
        <body
          className={cn(
            'flex min-h-screen flex-col font-sans',
            fontSans.variable
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
