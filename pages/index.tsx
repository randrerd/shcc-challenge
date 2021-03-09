import Head from 'next/head';
import Main from '@/components/Main';
import Header from '@/components/Header';
import Player from '@/components/Player';

export default function Home() {
  return (
    <>
      <Head>
        <title>De Nieuwste Looks | Tommy Hilfiger</title>
      </Head>
      <Header />
      <Main />
      <Player />
    </>
  );
}
