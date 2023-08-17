const plugin = require('tailwindcss/plugin');

export const customPlugin = plugin(function ({ addComponents }) {
  addComponents({
    '.content-auto': {
      'content-visibility': 'auto',
    },
    '.content-hidden': {
      'content-visibility': 'hidden',
    },
    '.content-visible': {
      'content-visibility': 'visible',
    },
  });
});
