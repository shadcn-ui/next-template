import type { Config } from 'tailwindcss';

import { base } from './base';
import { colors } from './colors';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [colors, theme, base, utilities],
} satisfies Config;

export default themePreset;
