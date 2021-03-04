import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '@/components/Header';
import Main from '@/components/Main';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
