import plugin from 'tailwindcss/plugin';

export const base = plugin(function ({ addBase }) {
  addBase({
    '::-webkit-scrollbar': { width: '5px', height: '5px' },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      '@apply bg-primary': {},
    },
    '::-webkit-scrollbar-thumb:hover': { '@apply bg-primary/70': {} },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
      '@apply bg-primary/20': {},
    },
    '*': { '@apply border-border ring-ring': {} },
    '*:hover': { '@apply transition-all': {} },
  });
  addBase({
    'html:where(.dark)': { filter: 'invert(1) hue-rotate(180deg)' },
    'html.dark picture,\nhtml.dark img,\nhtml.dark video': {
      filter: 'invert(1) hue-rotate(180deg)',
    },
  }),
    addBase({
      html: {
        overflowX: 'hidden',
        '--scroll-behavior': 'smooth !important',
        scrollBehavior: 'smooth !important',
      },
      body: {
        '@apply bg-background text-foreground overflow-x-hidden': {},
        'font-feature-settings': `'rlig' 1, 'calt' 1`,
      },
      'input,textarea': {
        '@apply bg-transparent outline-none': {},
      },
    });
});
