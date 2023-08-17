import type { Config } from 'tailwindcss';

import { base } from './plugin/base';
import { colors } from './plugin/colors';
import { theme } from './plugin/theme';
import { utilities } from './plugin/utilities';

const config = {
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  plugins: [colors, theme, base, utilities],
} satisfies Config;

export default config;
