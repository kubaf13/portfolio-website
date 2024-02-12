import Header from '@atoms/Header';
import Footer from '@molecules/Footer';
import MaintenanceTemplate from '@templates/MaintenanceTemplate';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>iFlisek</title>
      <meta name="description" content="See you soon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <Header />
      <MaintenanceTemplate />
    </main>
    <Footer />
  </>
);

export default Home;
