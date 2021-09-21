import Hero from 'components/home/hero';
import Testmonials from 'components/home/testemonials';
import Services from 'components/home/services';
import Features from 'components/home/features';
import Collabs from 'components/home/collabs';

export default function SplitScreen() {
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
