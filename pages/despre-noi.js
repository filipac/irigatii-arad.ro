import { Footer } from 'components/Footer';
import GlobalStyle from 'components/GlobalStyles';
import { Menubar } from 'components/MenuBar';
import { QuoteModal } from 'components/QuoteModal';
// import { QuoteModal } from 'components/QuoteModal';
import { Container } from 'components/styled/Container';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import { TopBar } from 'components/TopBar';
import Head from 'next/head';
import Link from 'next/link';
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

        <div tw="container mx-auto flex flex-col items-center">
          <div tw="mt-8 md:mt-1 flex items-center justify-center flex-col">
            <h1 tw="text-4xl font-bold">Despre noi</h1>
            <h2 tw="mt-2">Facem totul din pasiune!</h2>
          </div>

          <div tw="flex flex-col md:flex-row md:justify-between mt-12 max-w-5xl px-6 md:px-0">
            <div tw="flex-1">
              <div>
                <img
                  src="/assets/img/taiat-iarba.jpg"
                  tw="rounded-3xl w-full"
                />
              </div>
              <div tw="mt-8">
                <div tw="font-bold text-xl">Cine suntem?</div>
                <div>
                  Suntem o companie tanara aparuta din pasiunea pentru spatii
                  verzi, gradini si gradinarit.
                </div>
              </div>
            </div>
            <div tw="md:ml-32 mt-16 md:mt-0 flex-1">
              <div>
                <img
                  src="/assets/img/despre-noi-2.jpg"
                  tw="rounded-3xl w-full"
                />
              </div>
              <div tw="mt-8">
                <div tw="font-bold text-xl">Ce facem?</div>
                <div>
                  Serviciile oferite sunt de proiectare, executie si intretinere
                  de gradini si spatii verzi cu toate etapele ce implica
                  acestea.
                </div>
                <div tw="mt-2 uppercase text-green-500">
                  <Link href="/servicii">
                    <a>Vezi toate serviciile</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}
