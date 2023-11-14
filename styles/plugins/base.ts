import plugin from 'tailwindcss/plugin';

export const base = plugin(function ({ addBase, addVariant, matchVariant }) {
  const states = { selected: true, state: 'open' };
  addBase({
    '::-webkit-scrollbar': { width: '8px', height: '8px' },
    '::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      '@apply bg-primary': {},
    },
    '::-webkit-scrollbar-thumb:hover': { '@apply bg-primary/70': {} },
    '::-webkit-scrollbar-track': {
      borderRadius: '10px',
      '@apply bg-primary/20': {},
    },
    '*': { '@apply border-border': {} },
  });
  addBase({
    html: {
      overflowX: 'clip',
      '--scroll-behavior': 'smooth !important',
      scrollBehavior: 'smooth !important',
      'scrollbar-gutter': 'stable',
    },
    body: {
      '@apply bg-background text-foreground min-h-screen antialiased overflow-x-clip selection:text-white selection:bg-primary':
        {},
      'font-feature-settings': `'rlig' 1, 'calt' 1`,
    },
    'input,textarea': {
      '@apply bg-transparent outline-none': {},
    },
  });
  Object.keys(states).forEach((state) =>
    addVariant(
      state,
      `&[data-${state}="${states[state as keyof typeof states]}"]`
    )
  );
  matchVariant('nth', (value) => {
    return `&:nth-child(${value})`;
  });
});
