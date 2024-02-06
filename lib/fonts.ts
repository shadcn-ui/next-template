import { Space_Grotesk as FontMono, Inter as FontSans } from 'next/font/google';
import { fontFamily as fm } from 'tailwindcss/defaultTheme';

const fontVariables = ['--font-sans', '--font-mono'];

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
export const fontFamily: { [key: string]: string[] } = fontVariables.reduce(
  (p, c) => {
    return {
      ...p,
      [c.split('--font-')[1] as string]: [`var(${c})`, ...fm.sans],
    };
  },
  {}
);
