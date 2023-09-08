import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

import { base } from './base';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [theme, base, utilities, containerQueries],
} satisfies Config;

export default themePreset;
