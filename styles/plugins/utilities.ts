import plugin from 'tailwindcss/plugin';

export const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.scrollbar-hidden::-webkit-scrollbar': { display: 'none' },
    '.scrollbar-hidden': { msOverflowStyle: 'none', scrollbarWidth: 'none' },
    'html.dark.revert': { filter: 'invert(1) hue-rotate(180deg)' },
  });
});
