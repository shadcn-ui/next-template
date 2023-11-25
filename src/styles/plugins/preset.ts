import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';
import animations from 'tailwindcss-animate';
import { createThemes } from 'tw-colors';

import { colors } from '../../config/colors';
import { base } from './base';
import { theme } from './theme';
import { utilities } from './utilities';

const themePreset = {
  content: [],
  plugins: [
    theme,
    base,
    utilities,
    containerQueries,
    animations,
    createThemes(colors),
  ],
} satisfies Config;

export default themePreset;
