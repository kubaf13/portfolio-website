import { createGlobalStyle } from 'styled-components';

import type { Theme } from './types';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    * {
        box-sizing: border-box;;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.jetBrainsFont};
    }

    body {
        background-color: #266DCE;
        background-image: linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
        background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
        background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
        color: white;
    }

    h1, h2, h3 {
        font-family: ${({ theme }) => theme.fonts.longCangFont};
    }

    h1 {
        font-size: 45px;

        @media ${({ theme }) => theme.media.tablet} {
            font-size: 60px;
        }
    }
`;

export default GlobalStyle;
