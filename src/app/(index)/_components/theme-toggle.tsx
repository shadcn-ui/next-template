'use client';

import { use } from 'react';
import { useTheme } from 'next-themes';

import { colors } from '@/config/colors';
import { sleep } from '@/lib/helper';

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  use(sleep(500));

  function handleClick(color: string) {
    (async () => {
      setTheme(color);
      document.body.classList.add('!duration-100');
      await sleep(100);
      document.body.classList.remove('!transition-100');
    })();
  }

  return (
    <div className="my-4 flex flex-wrap justify-center gap-3">
      {Object.keys(colors).map((color) => (
        <button
          key={color}
          className="rounded-full p-4 transition-colors hover:opacity-80"
          style={{
            border: `1px solid ${
              colors[color as keyof typeof colors].foreground
            }`,
            backgroundColor: colors[color as keyof typeof colors].background,
            color: colors[color as keyof typeof colors].foreground,
          }}
          onClick={() => handleClick(color)}
        ></button>
      ))}
    </div>
  );
};
