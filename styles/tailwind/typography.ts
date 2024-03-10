import { fontSize } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const fontVariables = ['--font-sans', '--font-mono'];

export const typography = plugin(
  ({ addUtilities }) => {
    addUtilities({
      'text-heading': { '@apply text-3xl font-bold leading-tight': {} },
    });
  },
  {
    theme: {
      fontSize: {
        ...fontSize,
        xs: 'clamp(0.64rem, 0.05vw + 0.63rem, 0.67rem)',
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
      },
      extend: {
        fontFamily: fontVariables.reduce(
          (p: { [key: string]: string[] }, c: string) => {
            const key = c.split('-font-')[1] as string;
            const newObj = Object.assign({}, p);
            newObj[key] = [`var(${c})`];
            return newObj;
          },
          {}
        ),
      },
    },
  }
);
