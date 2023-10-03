import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #266DCE;
    background-image: linear-gradient(rgba(255,255,255,0.2) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255,255,255,0.2) 2px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
    background-size:100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;
    color: white;
    font-family: ${({ theme }) => theme.fonts.defaultFont};
  }
`;

export default GlobalStyle;
