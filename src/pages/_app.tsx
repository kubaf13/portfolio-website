import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
);

export default App;
