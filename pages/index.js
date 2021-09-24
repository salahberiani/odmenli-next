import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useStore from 'store';
import Hero from 'components/home/hero';
import Testmonials from 'components/home/testemonials';
import Services from 'components/home/services';
import Features from 'components/home/features';
import Collabs from 'components/home/collabs';

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
      <Hero></Hero>
      <Services></Services>
      <Features></Features>
      <Collabs></Collabs>
      <Testmonials></Testmonials>
    </>
  );
}
