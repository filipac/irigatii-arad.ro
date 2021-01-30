import styled from 'styled-components';
import Farming from '@/components/svg/farming.svg';
// import Harvest from '@/components/svg/harvest.svg';
import Mower from '@/components/svg/mower.svg';
import Grass from '@/components/svg/grass.svg';
import Sprinklers from '@/components/svg/sprinklers.svg';
import Tools from '@/components/svg/gardening-tools.svg';
import tw from 'twin.macro';

const DivideServicii = styled.div`
  position: relative;
  .custom-shape-divider-top-1611976731 {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-top-1611976731 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 158px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1611976731 .shape-fill {
    fill: #f4f4f4;
  }
`;

export const Servicii = () => {
  return (
    <>
      <DivideServicii tw="pb-24">
        <div className="custom-shape-divider-top-1611976731">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div tw="mx-auto justify-center items-center flex flex-col text-center pt-16">
          <div>
            <h1 tw="text-green-600 uppercase text-4xl border-b border-green-500">
              Servicii oferite
            </h1>
          </div>
          <div tw="mt-8 w-full px-4 lg:px-0 lg:w-3/4 grid relative grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-0 gap-x-16">
            <div tw="p-12 bg-green-500 rounded-3xl">
              <div tw="flex justify-center text-white">
                <Farming width="5rem" height="5rem" />
              </div>
              <div tw="font-bold text-xl mt-2">
                Proiectare si amenajare gradini / spatii verzi
              </div>
              <div tw="mt-2 text-left">
                Ne ocupam de intreg spectrul gradinilor sau a spatiilor verzi -
                de la proiectare pana la implementare si amenajare. Oferim
                consultanta grauita inainte de a incepe lucrul efectiv.
              </div>
            </div>
            <div tw="p-12 bg-green-500 rounded-3xl">
              <div tw="flex justify-center text-white">
                <Mower width="5rem" height="5rem" />
              </div>
              <div tw="font-bold text-xl mt-2">
                Intretinere gradini / spatii verzi
              </div>
              <div tw="mt-2 text-left">
                Dispunem de toate mijloacele necesare pentru a intretine gradina
                sau spatiul tau verde. Salvezi timp si lasi profesionistii sa
                iti intretina spatiul tau.
              </div>
            </div>
            <div tw="hidden lg:flex col-span-2 justify-center items-center">
              <div tw="py-1">
                <Tools width="4rem" height="4rem" />
              </div>
            </div>
            <div tw="p-12 bg-green-500 rounded-3xl">
              <div tw="flex justify-center text-white">
                <Grass width="5rem" height="5rem" />
              </div>
              <div tw="font-bold text-xl mt-2">Gazon</div>
              <div tw="mt-2 text-left">
                Ca e primavara, vara sau toamna, noi iti putem planta sau
                instala un gazon perfect. Daca se alege metoda rulourilor,
                vorbim si despre iarna :).
              </div>
            </div>
            <div tw="p-12 bg-green-500 rounded-3xl">
              <div tw="flex justify-center text-white">
                <Sprinklers width="6rem" height="6rem" />
              </div>
              <div tw="font-bold text-xl mt-2">Sisteme de irigatii</div>
              <div tw="mt-2 text-left">
                <span tw="font-bold">
                  Un spatiu verde frumos amenajat fara un sistem bun de irigatii
                  este precum o masina Tesla trecuta pe GPL
                </span>
                . Avem expertiza necesare pentru a valorifica fiecare colt de
                teren atunci cand instalam un sistem de irigatii. Desigur,
                automatizarea nu trebuie sa lipseasca.
              </div>
            </div>
          </div>
        </div>
      </DivideServicii>
    </>
  );
};
