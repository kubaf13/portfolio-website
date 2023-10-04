import Head from 'next/head';
import type { ReactElement } from 'react';

import { CenteringContainer, Message, Tag } from '@/styles/shared';

import { Footer } from '../components/molecules/Footer/Footer';

const Home = (): ReactElement => (
  <>
    <Head>
      <title>iFlisek</title>
      <meta name="description" content="My personal website portfolio page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <CenteringContainer>
        <h1>see you soon</h1>
        <Message>
          <Tag>{'<span> '}</Tag>
          page on maintenance
          <Tag>{' </span>'}</Tag>
        </Message>
      </CenteringContainer>
    </main>
    <Footer />
  </>
);

export default Home;
