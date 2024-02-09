export const isSSR = typeof window === 'undefined';

export const svgToBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const shimmer = (w: number | `${number}`, h: number | `${number}`) => {
  const color = { center: '#efefef', side: '#dfdfdf' };
  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${color.side}" offset="20%" />
      <stop stop-color="${color.center}" offset="50%" />
      <stop stop-color="${color.side}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${color.side}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;
};

export function convertToNormalCase(inputString: string) {
  const splittedString = inputString.split('.').pop();
  const string = splittedString || inputString;
  const words = string.replace(/([a-z])([A-Z])/g, '$1 $2').split(/_|\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}
