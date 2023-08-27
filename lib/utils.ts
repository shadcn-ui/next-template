import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isNavActive(href: string, path: string) {
  return href === '/' ? path === '/' : path.includes(href);
}

export function extractHSLValues(input: string) {
  const matches = input.match(
    /hsla?\((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*[\d.]+)?\)/
  );
  const hslValues = `${matches?.[1]} ${matches?.[2]}% ${matches?.[3]}%`;
  return hslValues;
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
