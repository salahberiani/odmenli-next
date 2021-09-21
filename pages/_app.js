import { ChakraProvider, Box } from '@chakra-ui/react';
import { RtlProvider } from 'components/rtl-provider';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import dynamic from 'next/dynamic';
const FbChat = dynamic(() => import('components/fbChat'), { ssr: false });

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <RtlProvider>
        <Navbar></Navbar>
        <Box bg="gray.50">
          <Component {...pageProps} />
        </Box>
        <Footer></Footer>
        <FbChat></FbChat>
      </RtlProvider>
    </ChakraProvider>
  );
}
export default MyApp;
