import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNavActive(href: string, path: string) {
  return href === '/' ? path === '/' : path?.includes(href);
}

function hexToHSL(hex: string): string {
  const hexMatches = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  if (!hexMatches) {
    throw new Error('Invalid HEX color format.');
  }

  const [, r, g, b] = hexMatches.map((c) => parseInt(c, 16) / 255);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  const s =
    l === 1
      ? 0
      : l === 0
      ? 0
      : max === min
      ? 0
      : l > 0.5
      ? d / (2 - max - min)
      : d / (max + min);
  const h = d
    ? (max === r
        ? (g - b) / d + (g < b ? 6 : 0)
        : max === g
        ? (b - r) / d + 2
        : (r - g) / d + 4) / 6
    : 0;
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
    l * 100
  )}%)`;
}

function HSLtoString(input: string) {
  const matches = input.match(
    /hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*[\d.]+)?\)/
  );
  const hslValues = `${matches?.[1]} ${matches?.[2]}% ${matches?.[3]}%`;
  return hslValues;
}

export function extractHSLValues(input: string): string {
  if (input.startsWith('#')) {
    return HSLtoString(hexToHSL(input));
  }
  return HSLtoString(input);
}

export function kebabCase(camelCase: string) {
  return camelCase.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  );
}

export function cssColorVariable(colors: any) {
  const temp = {};
  Object.keys(colors).map((key: string) => {
    // @ts-ignore
    temp[('--' + kebabCase(key)) as any] = extractHSLValues(colors[key]);
  });
  return temp;
}
