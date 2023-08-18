import { cssColorVariable } from '../lib/utils';

const colors = {
  background: 'hsla(225, 28.57%, 97.25%, 1)',
  foreground: 'hsla(225, 8%, 10%, 1)',
  muted: 'hsla(226.15, 20.63%, 87.65%, 1)',
  mutedForeground: 'hsla(225, 7%, 36%, 1)',
  primary: 'hsla(163, 83%, 33%, 1)',
  primaryForeground: 'hsla(0, 0%, 100%, 1)',
  secondary: 'hsla(346.8, 77.2% 49.8%, 1)',
  secondaryForeground: 'hsla(355.7, 100%, 97.3%, 1)',
  accent: 'hsla(240, 4.8%, 95.9%, 1)',
  accentForeground: 'hsla(240, 5.9%, 10%, 1)',
  destructive: 'hsla(240, 4.8%, 95.9%, 1)',
  destructiveForeground: 'hsla(240, 3.8%, 46.1%, 1)',
  card: 'hsla(0, 0%, 100%, 1)',
  cardForeground: 'hsla(240, 5.9%, 10%, 1)',
  popover: 'hsla(0, 84.2%, 60.2%, 1)',
  popoverForeground: 'hsla(0, 0%, 98%, 1)',
  border: 'hsla(226, 21%, 88%, 1)',
  input: 'hsla(240, 5.9%, 90%, 1)',
  ring: 'hsla(346.8, 77.2%, 49.8%, 1)',
};

export default cssColorVariable(colors);
