import type { Config } from 'tailwindcss';

import themePreset from './styles/plugins/preset';

const config = {
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'config/variants/*.{ts,tsx}',
    './node_modules/@sohanemon/utils/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [themePreset],
} satisfies Config;

export default config;
