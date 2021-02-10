import classNames from 'classnames';
import { Footer } from 'components/Footer';
import GlobalStyle from 'components/GlobalStyles';
import { Menubar } from 'components/MenuBar';
import { Quote } from 'components/Quote';
import { QuoteModal } from 'components/QuoteModal';
// import { QuoteModal } from 'components/QuoteModal';
import { Container } from 'components/styled/Container';
import { StyledQuote } from 'components/StyledQuote';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import { TopBar } from 'components/TopBar';
import Head from 'next/head';
import { ParallaxBanner } from 'react-scroll-parallax';
import tw from 'twin.macro';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact | Irigatii Arad</title>
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

        <div tw="container mx-auto flex items-center flex-col mt-12 px-6 md:px-0">
          <h1 tw="text-4xl font-bold">Contact</h1>
          <div tw="mt-4">
            Daca doresti sa iei legatura cu noi, completeaza formularul de mai
            jos si noi te vom contacta.
          </div>
          <div tw="mt-2">
            De asemenea, ne poti scrie pe retelele sociale pe care le regasesti
            mai jos sau ne poti suna la numarul de telefon{' '}
            <strong tw="font-bold">+40 (756) 804 311</strong> .
          </div>
        </div>

        <StyledQuote
          className={classNames({
            'mt-2 2xl:mt-12 2xl:pt-16': true,
          })}
        >
          {/* {typeof window !== 'undefined' && ( */}
          <Quote
            insideBox={
              <div tw="pb-4 text-center">
                <h1 tw="font-bold text-2xl">Vreau sa fiu contactat</h1>
                <div tw="text-base mt-2">Promitem sa raspundem prompt</div>
              </div>
            }
          />
          {/* )} */}
        </StyledQuote>

        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}
