import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNavActive(href: string, path: string) {
  return href === '/' ? path === '/' : path?.includes(href);
}

function hexToHSLFormatted(hexColor: string): string {
  const [r, g, b] = hexColor.match(/\w\w/g)?.map((c) => parseInt(c, 16) / 255)!;
  const maxVal = Math.max(r, g, b),
    minVal = Math.min(r, g, b);
  const lightness = (maxVal + minVal) / 2;
  const delta = maxVal - minVal;
  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
  let hue =
    delta !== 0
      ? maxVal === r
        ? ((g - b) / delta + (g < b ? 6 : 0)) * 60
        : maxVal === g
        ? ((b - r) / delta + 2) * 60
        : ((r - g) / delta + 4) * 60
      : 0;
  if (hue < 0) hue += 360;
  return `${Math.round(hue)} ${Math.round(saturation * 100)}% ${Math.round(
    lightness * 100
  )}%`;
}

function extractHSLValues(input: string): string {
  if (input.includes('#')) return hexToHSLFormatted(input);
  const matches = input.match(
    /hsla?\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*[\d.]+)?\)/
  );
  if (!matches) throw new Error(`Invalid HSL format: ${input}`);
  return `${matches[1]} ${matches[2]}% ${matches[3]}%`;
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
