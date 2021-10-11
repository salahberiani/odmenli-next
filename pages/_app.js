import { useState, useEffect, useCallback } from 'react';

import { ChakraProvider, Box, Spinner, Flex, Heading } from '@chakra-ui/react';
import { RtlProvider } from 'components/rtl-provider';
import Navbar from 'components/navbar';
import Footer from 'components/footer';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';

import theme from 'theme';
import useStore from 'store';
import * as ga from '../lib/ga';

const FbChat = dynamic(() => import('components/fbChat'), { ssr: false });

import '../styles/globals.css';

const Loading = () => {
  return (
    <Flex bg="white" h="100vh" justifyContent="center" alignItems="center" direction="column">
      <Spinner color="green.400" size="xl" />
    </Flex>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const token = useStore((state) => state.auth?.token);
  const logout = useStore((state) => state.logout);

  const checkToken = useCallback(() => {
    if (token) {
      let decodedToken = jwt_decode(token);
      console.log('Decoded Token', decodedToken);
      let currentDate = new Date();

      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        console.log('Token expired.');
        logout();
        router.push({
          pathname: '/login',
        });
      } else {
        console.log('Valid token');
      }
    }
  }, [logout, token, router]);
  useEffect(() => {
    checkToken();
  }, [checkToken]);

  const authCheck = useCallback(
    (url) => {
      const publicPaths = [
        '/login',
        '/register',
        '/howwework',
        '/about',
        '/',
        '/price',
        '/conditions',
      ];
      const path = url.split('?')[0];
      if (!isLoggedIn && !publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
        });
      } else {
        setAuthorized(true);
      }
    },
    [isLoggedIn, router]
  );
  useEffect(() => {
    authCheck(router.asPath);

    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [authCheck, router.events, router.asPath]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <RtlProvider>
        <Box bg="gray.50">
          <motion.div
            key={router.route}
            initial="pageInit"
            animate="pageAnimate"
            variants={{
              pageInit: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            {authorized ? (
              <>
                <Navbar></Navbar>
                <Box pt="100px" minH="100vh">
                  <Component {...pageProps} />
                </Box>
                <Footer></Footer>
              </>
            ) : (
              <Loading></Loading>
            )}
            {/* <Flex justifyContent="center" alignItems="center">
              <Heading>الموقع مازال تحت التطوير</Heading>
            </Flex> */}
          </motion.div>
        </Box>
        {typeof window !== 'undefiend' && <FbChat></FbChat>}
      </RtlProvider>
    </ChakraProvider>
  );
}
export default MyApp;
