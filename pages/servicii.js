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
import Check from '@/components/svg/check.svg';
import Sprinklers from '@/components/svg/sprinkler2.svg';
import FadeIn from 'react-fade-in';

const ServiciuBox = styled.div`
  ${tw`bg-gray-100 shadow-lg mx-4 md:mx-0 p-6 md:p-12 rounded-xl items-center mt-12 flex flex-col md:flex-row md:justify-between`}
  ${(props) => (props.inverse ? tw`md:flex-row-reverse` : '')}
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
                <div tw="flex-1 flex flex-row-reverse">
                  <div>
                    <div tw="mt-3 md:mt-0 max-w-xl">
                      Ne ocupam de intreg spectrul gradinilor sau a spatiilor
                      verzi - de la proiectare pana la implementare si
                      amenajare. Oferim consultanta grauita inainte de a incepe
                      lucrul efectiv.
                    </div>
                    <div tw="mt-2">
                      <div>Care sunt etaapele parsurse?</div>
                      <div
                        tw="grid mt-2"
                        style={{ gridTemplateColumns: '25px 1fr' }}
                      >
                        <Item left={1}>
                          Pregatirea terenului (eliberare, erbicidare, frezare,
                          nivelare)
                        </Item>
                        <Item left={2}>Instalarea sistemelor de irigatii</Item>
                        <Item left={3}>
                          Delimitarea zonelor de plantare de cele cu gazon
                        </Item>
                        <Item left={4}>
                          Plantare folri, arbori si arbusti decorativi
                        </Item>
                        <Item left={5}>
                          Instalare folie mulcire si acoperirea acesteia cu
                          scoarta sau pietris decorativ
                        </Item>
                        <Item left={6}>
                          Insamantare sau montarea rulourilor de gazon
                        </Item>
                        <Item left={7}>
                          Fertilizarea rulourilor sau a semintelor
                        </Item>
                      </div>
                    </div>
                  </div>
                </div>
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
                <div tw="flex-1">
                  <div tw="mt-3 md:mt-0 max-w-xl">
                    Pentru cei dinspre Dvs cărora timpul sau cunoștințele nu le
                    permit sa-și întrețină grădina noi Deținem utilajele și
                    know-how-ul pentru a o face in locul dumneavoastră.
                  </div>
                  <div tw="mt-2">
                    <div>Ce va oferim?</div>
                    <div
                      tw="grid mt-2"
                      style={{ gridTemplateColumns: '25px 1fr' }}
                    >
                      <Item>Erbicidare selectiva buruieni</Item>
                      <Item>Tuns garduri vii</Item>
                      <Item>Intretinere lunara spatii verzi</Item>
                      <Item>Intretinere lunara pentru plante de interior</Item>
                      <Item>Fasonare si toaletare arbori</Item>
                      <Item>Taieri specifice pentru pomi fructiferi</Item>
                      <Item>
                        Stropirea pomilor contra daunatorilor si a bolilor
                      </Item>
                      <Item>Asistenta tehnica</Item>
                      <Item>Udare plante</Item>
                      <Item>Manipulare pamant fertil</Item>
                      <Item>
                        Manipulare pamant nefertil sau resturi vegetale
                      </Item>
                      <Item>Transport resturi</Item>
                      <Item>Tuns gazon</Item>
                      <Item>Fertilizare gazon</Item>
                      <Item>Tratament pentru boli gazon</Item>
                      <Item>Nivelare (topdresing)</Item>
                    </div>
                  </div>
                </div>
              </ServiciuBox>
              <ServiciuBox>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Grass width="5rem" height="5rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">Gazon</div>
                </div>
                <div tw="flex-1 flex flex-row-reverse">
                  <div>
                    <div tw="mt-3 md:mt-0 max-w-xl">
                      Va stam la dispoziție cu servicii de înființare peluze de
                      gazon prin însămânțare sau montaj rulouri. De asemenea
                      oferim servicii de scarificare, fertilizare,
                      supraînsămânțare sau tratamente pentru bolile ce pot
                      apărea.
                    </div>
                    <div tw="mt-2">
                      <div>Ce va oferim?</div>
                      <div
                        tw="grid mt-2"
                        style={{ gridTemplateColumns: '25px 1fr' }}
                      >
                        <Item>Gazonare prin insamantare</Item>
                        <Item>Montare rulouri gazon</Item>
                        <Item>Aerisire si scarificare gazon</Item>
                        <Item>Suprainsamantare gazon</Item>
                        <Item>Tuns gazon</Item>
                        <Item>Tratament pentru boli gazon</Item>
                        <Item>Intretinere lunara gazon</Item>
                        <Item>Tratamente fitosanitare</Item>
                      </div>
                    </div>
                  </div>
                </div>
              </ServiciuBox>
              <ServiciuBox inverse>
                <div>
                  <div tw="flex justify-center text-green-500">
                    <Sprinklers width="6rem" height="6rem" />
                  </div>
                  <div tw="font-bold text-xl mt-2">Sisteme de irigatii</div>
                </div>
                <div tw="flex-1">
                  <div tw="mt-3 md:mt-0 max-w-xl">
                    <strong>Irigatiile</strong> au un rol esential pentru
                    infiintarea si intretinerea suprafetelor cu gazon sau a
                    plantelor din gradina dumneavoastra.
                  </div>
                  <div tw="mt-2">
                    <div>Ce va oferim?</div>
                    <div
                      tw="grid mt-2"
                      style={{ gridTemplateColumns: '25px 1fr' }}
                    >
                      <Item>
                        Consultanta <strong>GRATUITA</strong> in alegerea
                        sistemului potrivit pentru gradina dumneavoastra.
                      </Item>
                      <Item>Proiectarea sistemului</Item>
                      <Item>Instalarea sistemului</Item>
                    </div>
                    <div tw="mt-2">
                      Sistemul poate fi cotrolat de un programator clasic sau
                      unul wifi controlabil de pe smarthphone.
                    </div>
                    <div tw="mt-2">
                      Irigarea se poate efectua prin aspersie, picurare
                      subterana sau supraterana in functie specificitatea
                      gradinii.
                    </div>
                    <div tw="mt-2">
                      Sistemul poate fi instalat chiar daca exista un gazon
                      infiintat fara ca gazonul sa sufere prea mult in urma
                      instalarii.
                    </div>
                    <div
                      tw="mt-2 p-4 bg-green-500 rounded-xl"
                      style={{ maxWidth: 'max-content' }}
                    >
                      Clientii care contracteaza un sistem de irigatii pana la
                      <span tw="font-bold"> 01.03.2021</span> beneficiaza de
                      senzor de ploaie <span tw="font-bold">GRATUIT</span>.
                    </div>
                    <div tw="mt-2">
                      Pentru mai multe detalii va rugam sa ne contactati la
                      telefon.
                    </div>
                  </div>
                </div>
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
