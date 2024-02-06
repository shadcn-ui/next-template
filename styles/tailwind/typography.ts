import plugin from 'tailwindcss/plugin';

const fontVariables = ['--font-sans', '--font-mono'];

export const typography = plugin(({}) => {}, {
  theme: {
    fontSize: {
      '2xs': 'clamp(0.51rem, -0.02vw + 0.52rem, 0.5rem)',
      xs: 'clamp(0.64rem, 0.05vw + 0.63rem, 0.67rem)',
      sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
      base: 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
      lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
      xl: 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
      '2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
      '3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
      '4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
      '5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
      '6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      '7xl': 'clamp(5.96rem, 10.69vw + 3.29rem, 11.84rem)',
      '8xl': 'clamp(7.45rem, 15.14vw + 3.66rem, 15.78rem)',
      '9xl': 'clamp(9.31rem, 21.31vw + 3.99rem, 21.03rem)',
    },
    extend: {
      fontFamily: fontVariables.reduce(
        (p, c) => ({
          ...p,
          [c.split('-font-')[1] as string]: [`var(${c})`],
        }),
        {}
      ),
    },
  },
});
