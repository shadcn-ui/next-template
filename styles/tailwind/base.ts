import plugin from 'tailwindcss/plugin';

export const base = plugin(({ addBase, addVariant, matchVariant, e }) => {
  const states = {
    selected: 'data-selected=true',
    open: 'data-state=open',
    on: 'data-state=on',
  };

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
    '*': { '@apply border-border min-w-0': {} },
  });
  addBase({
    html: {
      overflowX: 'clip',
      '--scroll-behavior': 'smooth !important',
      scrollBehavior: 'smooth !important',
    },
    body: {
      '@apply bg-background text-foreground min-h-screen antialiased overflow-x-clip selection:text-white selection:bg-primary':
        {},
      'font-feature-settings': `'rlig' 1, 'calt' 1`,
    },
    'input,textarea': {
      '@apply bg-transparent outline-none w-full': {},
    },
  });
  for (const [name, definition] of Object.entries(states)) {
    addVariant(name, `&[${definition}]`);
  }
  matchVariant('nth', (value) => {
    return `&:nth-child(${value})`;
  });
  addVariant('keyboard', (({ modifySelectors, separator }: any) => {
    modifySelectors(({ className }: { className: string }) => {
      return `body[data-keyboard='open'] .${e(
        `keyboard${separator}${className}`
      )}`;
    });
  }) as any);
});
