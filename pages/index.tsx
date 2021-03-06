import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Main from '@/components/Main';
import { isMobile, isBrowser } from 'react-device-detect';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>De Nieuwste Looks | Tommy Hilfiger</title>
      </Head>
      <Header />
      <Main />
    </>
  );
}
