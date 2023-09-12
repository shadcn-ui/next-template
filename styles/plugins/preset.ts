import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';
import { createThemes } from 'tw-colors';

import { colors } from '../../config/colors';
import { base } from './base';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: ['./node_modules/@sohanemon/utils/dist/**/*.{js,ts,jsx,tsx}'],
  plugins: [theme, base, utilities, createThemes(colors), containerQueries],
} satisfies Config;

export default themePreset;
