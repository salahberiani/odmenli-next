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
        <title>أضمنلي</title>
        <meta
          name="description"
          content="نظرا للاحتيالات التجارية التي تحدث عبر مواقع الشبكة العنكبوتية بشكل متكرر وكبير وللقظاء عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن حدوث المبادلات التجارية دون الوقوع في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات مزيفة"
        />
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
