import { ThemeProvider } from '@/context/theme-provider';
import TransitionProvider from '@/context/transition-provider';

import '@/styles/custom.css';
import '@/styles/globals.css';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const GoToTop = dynamic(() => import('@/components/goto-top'));
const Navbar = dynamic(() => import('@/components/navbar'));

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
      <html lang="en" suppressHydrationWarning>
        <head className="revert" />
        <body
          className={cn(
            'bg-background min-h-screen font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div className="flex-1">
                <TransitionProvider>{children}</TransitionProvider>
              </div>
            </div>
            <TailwindIndicator />
            <GoToTop />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
