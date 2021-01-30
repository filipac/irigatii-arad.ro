import GlobalStyle from 'components/GlobalStyles';
import { Container } from 'components/styled/Container';
import Head from 'next/head';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import { TopBar } from 'components/TopBar';
import { Menubar } from 'components/MenuBar';
import { Hero } from 'components/Hero';
import { Quote } from 'components/Quote';
import { QuoteModal } from 'components/QuoteModal';
import tw from 'twin.macro';

const Servicii = () => {
  return <p>da</p>;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Irigatii Arad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <img
          tw="absolute top-0 right-0 -z-10 max-w-xs md:top-32 lg:max-w-xl xl:max-w-xl 2xl:max-w-6xl"
          src="/assets/images/bg-green.svg"
        />
        <img
          tw="hidden md:block absolute top-0 right-0 -z-10 md:max-w-poza md:top-40 lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          src="/assets/images/splash.png"
        />
        <GlobalStyle />
        <TopBar />
        <Menubar />
        <Hero />
        <Quote />
        {/* <Servicii /> */}
        <QuoteModal />
      </Container>
    </div>
  );
}
