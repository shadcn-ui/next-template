import plugin from 'tailwindcss/plugin';

export const colors = plugin(function ({ addBase }) {
  addBase({
    ':root': {
      '--background': '227 95% 5%',
      '--foreground': '0 0% 100%',
      '--muted': '223 5% 70%',
      '--muted-foreground': 'var(--foreground)',
      '--primary': '209 100% 50%',
      '--primary-foreground': 'var(--foreground)',
      '--secondary': '228 26% 15%',
      '--secondary-foreground': 'var(--foreground)',
      '--accent': 'var(--primary)',
      '--accent-foreground': 'var(--background)',
      '--destructive': '0 100% 50%',
      '--destructive-foreground': '210 40% 98%',
      '--card': '229 43% 10%',
      '--card-foreground': 'var(--foreground)',
      '--popover': 'var(--card)',
      '--popover-foreground': 'var(--card-foreground)',
      '--border': '230 16% 22%',
      '--input': '214.3 31.8% 91.4%',
      '--ring': '215 20.2% 65.1%',
    },
  });
});
