import Check from '@/components/svg/check.svg';

import classNames from 'classnames';

import { Footer } from 'components/Footer';
import GlobalStyle from 'components/GlobalStyles';
import { Menubar } from 'components/MenuBar';
import { Quote } from 'components/Quote';
import { QuoteModal } from 'components/QuoteModal';
import { Container } from 'components/styled/Container';
import { StyledQuote } from 'components/StyledQuote';
import { TopBar } from 'components/TopBar';

import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import Head from 'next/head';

import FadeIn from 'react-fade-in';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ParallaxBanner } from 'react-scroll-parallax';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import styled from 'styled-components';

import tw from 'twin.macro';

const images = [
  '/assets/img/4sep/188745684_2959725830923797_8086950685344603799_n.jpg',
  '/assets/img/4sep/188821139_221246412832466_4080326153782620790_n.jpg',
  '/assets/img/4sep/201672349_480306193030321_8936279979039468067_n.jpg',
  '/assets/img/4sep/203207685_201823218501859_8881689879128513079_n.jpg',
  '/assets/img/4sep/203668430_184777176806618_5733061360873511783_n.jpg',
  '/assets/img/4sep/203852350_339269240935317_1837225438702513808_n.jpg',
  '/assets/img/4sep/239091101_560161471791857_8055127736730821797_n.jpg',
  '/assets/img/4sep/240784174_1229218017543423_8845686144290408718_n.jpg',
  '/assets/img/4sep/240813221_4710958695582977_6769017495988001819_n.jpg',
  '/assets/img/4sep/240821562_1274922759635986_8315007593061519094_n.jpg',
  '/assets/img/4sep/240822921_527610918300343_4815406263426974024_n.jpg',
  '/assets/img/4sep/240846572_205449971484411_4430450549044368951_n.jpg',
  '/assets/img/4sep/240871750_2858344891146948_2814846347097267980_n.jpg',
  '/assets/img/4sep/240941957_372357571175523_1689236114199557942_n.jpg',
  '/assets/img/4sep/240943087_316111193599303_4043925420152441735_n.jpg',
  '/assets/img/4sep/240943087_822076755157429_3798175645867045092_n.jpg',
  '/assets/img/4sep/240945870_323681169505473_2540402549498814994_n.jpg',
  '/assets/img/4sep/240946288_384104546558251_1027740664633881852_n.jpg',
  '/assets/img/4sep/240951705_1242693396171761_2705317590784664490_n.jpg',
  '/assets/img/4sep/240951952_560959371998469_2021572934175866342_n.jpg',
  '/assets/img/4sep/240952202_1231277760653962_7041225390579341710_n.jpg',
  '/assets/img/4sep/240952895_176215754542122_6274047785407223323_n.jpg',
  '/assets/img/4sep/240953072_1267530430363478_1823738892103490800_n.jpg',
  '/assets/img/4sep/240954057_220356919934863_7901610788607836791_n.jpg',
  '/assets/img/4sep/240956339_4165678870211740_3733446978766474808_n.jpg',
  '/assets/img/4sep/240956343_332173741822014_5430396137338121662_n.jpg',
  '/assets/img/4sep/240959093_1274484866340328_5583924012172259659_n.jpg',
  '/assets/img/4sep/240963159_212875647478077_4923687849433025904_n.jpg',
  '/assets/img/4sep/240963565_1004235440118695_3308835632726512081_n.jpg',
  '/assets/img/4sep/240964294_4610005339033137_3447136637362844584_n.jpg',
  '/assets/img/4sep/240967881_1211910275952118_5630171500026679207_n.jpg',
  '/assets/img/4sep/240990249_325957865719776_6204083273464185104_n.jpg',
  '/assets/img/4sep/241019193_1249922725434917_6495592311261585741_n.jpg',
  '/assets/img/4sep/241026393_387258126326235_6112944323205648743_n.jpg',
  '/assets/img/4sep/241027941_541049603780690_7151219705505607297_n.jpg',
  '/assets/img/4sep/241038063_173805568192852_8962918536068593858_n.jpg',
];

export default function Servicii() {
  const columnsCountBreakPoints = { 350: 1, 1000: 2, 1100: 3 };
  return (
    <div>
      <Head>
        <title>Galerie Foto | Irigatii Arad</title>
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
          <div tw="flex flex-col pb-12">
            <FadeIn>
              <div tw="md:mt-12 mt-8">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <ResponsiveMasonry
                      columnsCountBreakPoints={columnsCountBreakPoints}
                    >
                      <Masonry gutter={4}>
                        {images.map((image) => (
                          <img src={image} />
                        ))}
                      </Masonry>
                    </ResponsiveMasonry>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </div>
            </FadeIn>
          </div>
        </div>

        <StyledQuote
          tw="relative"
          className={classNames({
            'mt-2 pt-6 pb-48': true,
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

        <Footer />
        <QuoteModal />
      </Container>
    </div>
  );
}

const Item = ({ children, left = null }) => {
  return (
    <>
      <div tw="self-center">
        {!left && <Check tw="w-5" />}
        {left && <div tw="w-5 font-bold text-xl text-center">{left}</div>}
      </div>
      <div tw="pl-2 self-center">{children}</div>
    </>
  );
};
