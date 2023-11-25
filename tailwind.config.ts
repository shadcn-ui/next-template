import type { Config } from 'tailwindcss';

import themePreset from './src/styles/plugins/preset';

const config = {
  content: [
    'src/**/*.{ts,tsx}',
    'config/variants/*.{ts,tsx}',
    './node_modules/@sohanemon/utils/dist/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [themePreset],
} satisfies Config;

export default config;
