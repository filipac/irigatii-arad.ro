import { Footer } from 'components/Footer';
import GlobalStyle from 'components/GlobalStyles';
import { Menubar } from 'components/MenuBar';
import { QuoteModal } from 'components/QuoteModal';
// import { QuoteModal } from 'components/QuoteModal';
import { Container } from 'components/styled/Container';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import { TopBar } from 'components/TopBar';
import Head from 'next/head';
import tw from 'twin.macro';

export default function DespreNoi() {
  return (
    <div>
      <Head>
        <title>Despre Noi | Irigatii Arad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <img
          tw="absolute top-0 right-0 -z-10 max-w-xs md:top-32 lg:top-0 lg:max-w-xl xl:max-w-xl 2xl:max-w-6xl"
          src="/assets/images/bg-green.svg"
        />
        <GlobalStyle />
        <TopBar />
        <Menubar />

        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}
