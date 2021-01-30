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
import { Servicii } from 'components/Servicii';
import dynamic from 'next/dynamic';
import { Footer } from 'components/Footer';
import { ParallaxBanner } from 'react-scroll-parallax';
import { StyledQuote } from 'components/StyledQuote';
import classNames from 'classnames';

const PhotosRow = dynamic(() => import('components/PhotosRow'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Irigatii Arad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <img
          tw="absolute top-0 right-0 -z-10 max-w-xs md:top-32 lg:top-0 lg:max-w-xl xl:max-w-xl 2xl:max-w-6xl"
          src="/assets/images/bg-green.svg"
        />
        <img
          tw="hidden md:block absolute top-0 right-0 -z-10 md:max-w-poza md:top-36 lg:top-40 xl:top-0 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          src="/assets/images/splash.png"
        />
        <GlobalStyle />
        <TopBar />
        <Menubar />
        <Hero />
        <StyledQuote
          tw="relative"
          className={classNames({
            'mt-12 pt-6 2xl:mt-48 2xl:pt-16': true,
          })}
        >
          {/* {typeof window !== 'undefined' && ( */}
          <ParallaxBanner
            className="lg:h-500 auto-height"
            layers={[
              {
                image: '/assets/img/sprinkler-head.jpg',
                amount: 0.5,
              },
            ]}
            style={{
              minHeight: '500px',
            }}
          >
            <Quote>
              <div tw="flex-1 flex flex-col items-center justify-center z-10 py-8 md:py-0 text-white">
                <h1
                  tw="text-3xl text-center md:text-left md:text-6xl"
                  className="text-shadow-lg"
                >
                  Contacteaza-ne
                </h1>
                <div tw="mt-2 mb-4 md:mb-0 text-2xl" className="text-shadow-md">
                  Raspundem cat mai prompt.
                </div>
              </div>
            </Quote>
          </ParallaxBanner>
          {/* )} */}
        </StyledQuote>
        <Servicii />
        <PhotosRow />
        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}
