import { Metadata, Viewport } from 'next';

import { NavType } from '@/types/index.types';

export type SiteConfig = typeof siteConfig;

const favicon = '/favicon.ico';

export const siteConfig: {
  metadata: Metadata;
  viewport: Viewport;
  nav: NavType[];
  underConstruction: NavType[];
} = {
  metadata: {
    title: {
      default: 'Next.JS',
      template: `%s - Next`,
    },

    description: 'Minimal Next.js Template',
    icons: {
      icon: favicon,
      shortcut: favicon,
      apple: favicon,
    },
  },
  viewport: {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
  },
  nav: [
    { title: 'home', href: '/home' },
    { title: 'images', href: '/images' },
  ],
  underConstruction: [{ title: 'about', href: '/about' }],
};
