'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

import { Icons } from './icons';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="icon/ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="hidden h-[1.5rem] w-[1.3rem] dark:block" />
      <Icons.moon className="h-5 w-5 dark:hidden " />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
