import type { Preview } from "@storybook/react";
import { GlobalStyle }  from '../src/styles';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
