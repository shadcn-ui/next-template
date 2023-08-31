import { cssColorVariable } from '../lib/utils';

const colors = {
  background: '#FBE791',
  foreground: '#ffffff',
  muted: 'hsla(226.15, 20.63%, 87.65%, 1)',
  mutedForeground: 'hsla(225, 7%, 36%, 1)',
  primary: '#00494F',
  primaryForeground: 'hsla(0, 0%, 100%, 1)',
  secondary: '#fbe791',
  secondaryForeground: '#00494f',
  accent: '#ffc00d',
  accentForeground: '#000000 ',
  destructive: 'hsla(240, 4.8%, 95.9%, 1)',
  destructiveForeground: 'hsla(240, 3.8%, 46.1%, 1)',
  card: 'hsla(0, 0%, 100%, 1)',
  cardForeground: '#00000060',
  popover: 'hsla(0, 84.2%, 60.2%, 1)',
  popoverForeground: 'hsla(0, 0%, 98%, 1)',
  border: 'hsla(226, 21%, 88%, 1)',
  input: 'hsla(240, 5.9%, 90%, 1)',
  ring: 'hsla(346.8, 77.2%, 49.8%, 1)',
};

export default cssColorVariable(colors);
