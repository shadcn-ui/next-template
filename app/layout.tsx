import TransitionProvider from '@/context/transition-provider';

import '@/styles/custom.css';
import '@/styles/globals.css';
import { Metadata } from 'next';
import { cn } from '@sohanemon/utils';
import { TailwindIndicator } from '@sohanemon/utils/components';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { GoToTop } from '@/components/goto-top';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        suppressHydrationWarning
        className="scroll-pt-16"
        data-theme="default"
        lang="en"
      >
        <head />
        <body
          className={cn(
            'flex min-h-screen flex-col font-sans',
            fontSans.variable
          )}
        >
          <Navbar />
          <TransitionProvider as={'main'} className="flex-1" initial="hidden">
            {children}
          </TransitionProvider>
          <TailwindIndicator />
          <GoToTop />
        </body>
      </html>
    </>
  );
}
