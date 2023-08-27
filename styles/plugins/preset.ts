import type { Config } from 'tailwindcss';

import { base } from './base';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [theme, base, utilities],
} satisfies Config;

export default themePreset;
