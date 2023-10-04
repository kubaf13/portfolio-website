import { Head, Html, Main, NextScript } from 'next/document';
import type { ReactElement } from 'react';

const Document = (): ReactElement => (
  <Html lang="en">
    <Head>
      <link
        rel="preload"
        href="/fonts/JetBrainsMono-Regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/fonts/LongCang-Regular.woff2"
        as="font"
        type="font/woff2"
      />
      <link rel="stylesheet" href="/fonts/fonts.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
