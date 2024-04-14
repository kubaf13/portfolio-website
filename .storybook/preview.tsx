// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import type { Preview } from '@storybook/react';
import theme from '../src/styles/theme';
import React from 'react';
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { GlobalStyle, ThemeProvider } from '@/styles';
import { AppContextProvider } from '@/contexts/AppContext';
import CenteringContainer from '@atoms/CenteringContainer';


export const decorators = [
  (storyFn: () => React.ReactNode) => (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyle theme={theme}/>
          <CenteringContainer>
            {storyFn()}
          </CenteringContainer>
      </AppContextProvider>
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
      storySort: {
        order: ['*', ['Introduction', '*']],
      }
    },
    decorators,
  },
};
