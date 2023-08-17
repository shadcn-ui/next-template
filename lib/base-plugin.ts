import plugin from 'tailwindcss/plugin';

export const cssBasePlugin = plugin(function ({ addBase }) {
  addBase({
    ':root': {
      '--background': '227 95% 5%',
      '--foreground': '0 0% 100%',
      '--muted': '223 5% 70%',
      '--muted-foreground': 'var(--foreground)',
      '--popover': '0 0% 100%',
      '--popover-foreground': '222.2 47.4% 11.2%',
      '--border': '230 16% 22%',
      '--input': '214.3 31.8% 91.4%',
      '--card': '229 43% 10%',
      '--card-foreground': 'var(--foreground)',
      '--primary': '209 100% 50%',
      '--primary-foreground': 'var(--foreground)',
      '--secondary': '228 26% 15%',
      '--secondary-foreground': 'var(--foreground)',
      '--accent': 'var(--primary)',
      '--accent-foreground': 'var(--background)',
      '--destructive': '0 100% 50%',
      '--destructive-foreground': '210 40% 98%',
      '--ring': '215 20.2% 65.1%',
    },
  });
  addBase({
    '*': { '@apply border-border ring-ring': {} },
    '*:hover': { '@apply transition-all': {} },
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
  });
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
    input: {
      '@apply bg-transparent outline-none': {},
    },
  });
});
