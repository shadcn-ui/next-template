import { Poppins as FontSans } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
});
