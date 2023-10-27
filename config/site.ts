export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js',
  icon: '/favicon.ico',
  description: 'Minimal Next.js Template',

  nav: [
    { title: 'home', href: '/' },
    { title: 'images', href: '/images' },
  ],
  underConstruction: [{ title: 'about', href: '/about' }],
};
