import { Space_Grotesk as FontMono, Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});
const fontMono = FontMono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
});

export const fonts = [fontSans.variable, fontMono.variable].join(' ');

// add to font variable in tailwind/typography.ts
