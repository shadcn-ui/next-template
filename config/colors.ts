import { cssColorVariable, tailwindColorObject } from '@sohanemon/utils';

const colors = {
  background: '#ffffff',
  foreground: '#223645',
  muted: '#FFFFFF',
  primary: '#00494F',
  secondary: '#223645',
  border: 'hsla(226, 21%, 88%, 1)',
  input: 'hsla(240, 5.9%, 90%, 1)',
  ring: 'hsla(346.8, 77.2%, 49.8%, 1)',
};

export const colorVariables = cssColorVariable(colors);

export default tailwindColorObject(colors);
