import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import CustomTheme from '../styles/theme';
import Fonts from '../styles/Fonts';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
