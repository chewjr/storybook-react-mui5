import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from '../src/stylesheet'; // whereever you have defined your material ui theme

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={muiTheme}>
      <Story />
    </ThemeProvider>
  ),
];
