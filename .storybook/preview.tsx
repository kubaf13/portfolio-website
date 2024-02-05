// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Preview } from '@storybook/react';
import theme from '../src/styles/theme';
import React from 'react';
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { GlobalStyle, ThemeProvider } from '@/styles';


export const decorators = [
  (storyFn: () => React.ReactNode) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme}/>
      {storyFn()}
    </ThemeProvider>
  ),
];

export const preview: Preview = {
  parameters: {
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // @ts-ignore
      storySort: (a, b) => {
        if (a[1].kind === 'Components/Welcome') {
          return -1;
        }

        return a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, { numeric: true });
      },
    },
    decorators,
  },
};
