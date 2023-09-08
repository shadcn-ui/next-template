import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import colors, { colorVariables } from '../../config/colors';

export const theme = plugin(
  ({ addBase }) => {
    addBase({
      ':root': colorVariables,
    });
  },
  {
    darkMode: ['class'],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors,
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
        },
        keyframes: {
          slideDown: {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          slideUp: {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
          slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        },
      },
    },
  }
);
