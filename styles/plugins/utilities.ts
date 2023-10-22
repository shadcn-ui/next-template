import plugin from 'tailwindcss/plugin';

export const utilities = plugin(({ addUtilities }) => {
  addUtilities({
    '.scrollbar-hidden::-webkit-scrollbar': { display: 'none' },
    '.scrollbar-hidden': { msOverflowStyle: 'none', scrollbarWidth: 'none' },
    '.scrollbar-thin::-webkit-scrollbar': { width: '4px' },
    '.center-x': { '@apply ml-[50%] mt-4 -translate-x-1/2': {} },
    '.center-y': { '@apply mt-[50%] mt-4 -translate-y-1/2': {} },
    '.link': { '@apply text-primary underline-offset-2 hover:underline': {} },
    '.container-mini': { '@apply mx-auto max-w-3xl px-2': {} },
  });
});
