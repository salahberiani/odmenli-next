import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useStore from 'store';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Hero = dynamic(() => import('components/home/hero'));
const Testmonials = dynamic(() => import('components/home/testemonials'));
const Services = dynamic(() => import('components/home/services'));
const Features = dynamic(() => import('components/home/features'));
const Collabs = dynamic(() => import('components/home/collabs'));
const Questions = dynamic(() => import('components/home/questions'));

export default function SplitScreen() {
  const router = useRouter();
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  useEffect(() => {
    // redirect to home if already logged in
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);
  return (
    <>
      <Head>
        <title>odmenli | أضمنلي</title>
      </Head>
      <Hero></Hero>
      <Services></Services>
      <Features></Features>
      {/* <Collabs></Collabs> */}
      <Testmonials></Testmonials>
      <Questions></Questions>
    </>
  );
}
