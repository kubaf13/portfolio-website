import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export type ViewportName = 'desktop' | 'tablet' | 'mobile' | 'maxWidth';

export interface Theme {
  media: {
    [key in ViewportName]: string;
  };
  fonts: {
    headingFont: string;
    defaultFont: string;
  };
}
