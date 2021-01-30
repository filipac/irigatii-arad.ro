import { Footer } from 'components/Footer';
import GlobalStyle from 'components/GlobalStyles';
import { Menubar } from 'components/MenuBar';
import { QuoteModal } from 'components/QuoteModal';
// import { QuoteModal } from 'components/QuoteModal';
import { Container } from 'components/styled/Container';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import { TopBar } from 'components/TopBar';
import Head from 'next/head';
import styled from 'styled-components';
import tw from 'twin.macro';
import Farming from '@/components/svg/farming.svg';
// import Harvest from '@/components/svg/harvest.svg';
import Mower from '@/components/svg/mower.svg';
import Grass from '@/components/svg/grass.svg';
import Sprinklers from '@/components/svg/sprinkler2.svg';
import FadeIn from 'react-fade-in';

const ServiciuBox = styled.div`
  ${tw`w-full bg-gray-100 shadow-lg p-12 rounded-xl mt-12 flex`}
  ${(props) => (props.inverse ? tw`flex-row-reverse` : '')}
`;

export default function Servicii() {
  return (
    <div>
      <Head>
        <title>Servicii | Irigatii Arad</title>
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

        <div className="container mx-auto">
          <div tw="flex flex-col pb-48">
            <FadeIn>
              <ServiciuBox>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Farming width="5rem" height="5rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">
                    Proiectare si amenajare gradini / spatii verzi
                  </div>
                </div>
                <div tw="flex-1"></div>
              </ServiciuBox>
              <ServiciuBox inverse>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Mower width="5rem" height="5rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">
                    Intretinere gradini / spatii verzi
                  </div>
                </div>
                <div tw="flex-1"></div>
              </ServiciuBox>
              <ServiciuBox>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Grass width="5rem" height="5rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">Gazon</div>
                </div>
                <div tw="flex-1"></div>
              </ServiciuBox>
              <ServiciuBox inverse>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Sprinklers width="6rem" height="6rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">Sisteme de irigatii</div>
                </div>
                <div tw="flex-1"></div>
              </ServiciuBox>
            </FadeIn>
          </div>
        </div>

        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}
