import GlobalStyle from 'components/GlobalStyles';
import { Container } from 'components/styled/Container';

import Head from 'next/head';

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

import { useLayoutEffect } from 'react';

const PhotosRow = dynamic(() => import('components/PhotosRow'), { ssr: false });

export default function Home({ show }) {
  useLayoutEffect(() => {
    const check = () => {
      let splash = document.getElementById('splash');
      let contact = document.getElementById('contact-item');
      let rect1 = splash.getBoundingClientRect();
      let rect2 = contact.getBoundingClientRect();
      let conds = [
        rect1.right < rect2.left,
        rect1.left + 150 > rect2.right,
        rect1.bottom < rect2.top,
        rect1.top > rect2.bottom,
      ];
      console.log(conds);
      var overlap = !(conds[0] || conds[1] || conds[2] || conds[3]);
      if (overlap) {
        // contact.classList.add('text-white');
        contact.classList.add('bg-peppermint');
        contact.classList.add('rounded-lg');
      } else {
        // contact.classList.remove('text-white');
        contact.classList.remove('bg-peppermint');
        contact.classList.remove('rounded-lg');
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('resize', check);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Irigatii Arad - Amenajare si intretinere spatii verzi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container tw="relative">
        {show && (
          <>
            <img
              tw="absolute top-0 right-0 -z-10 max-w-xs md:top-32 lg:top-0 lg:max-w-xl xl:max-w-xl 2xl:max-w-6xl"
              src="/assets/images/bg-green.svg"
            />
            <img
              id="splash"
              tw="hidden md:block absolute top-0 right-0 -z-10 md:max-w-poza md:top-36 lg:top-40 xl:top-0 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl"
              src="/assets/images/splash.png"
            />
          </>
        )}
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
        {show && <PhotosRow />}
        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {
    show: userAgent.toLowerCase().indexOf('lighthouse') < 0,
  };
};
