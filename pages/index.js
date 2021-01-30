import GlobalStyle from 'components/GlobalStyles';
import { Container } from 'components/styled/Container';
import Head from 'next/head';
import tw, { styled } from 'twin.macro';
import Image from 'next/image';
import Gardening from '@/components/svg/undraw_Gardening_eaf3.svg';
import CompanyPic from '@/components/svg/undraw_Building_re_xfcm.svg';
import PersonPic from '@/components/svg/undraw_male_avatar_323b.svg';
// import LawnMower from '@/components/svg/lawn-mower.svg';
import Sprinkler from '@/components/svg/sprinkler.svg';
import { useState } from 'react';
import classNames from 'classnames';
import { useModalState } from 'state/contactModal';

const Menu = styled.ul`
  ${tw`flex items-center`}

  li {
    &:first-of-type {
      ${tw`pl-0`}
    }
    ${tw`pl-2 m-2`}
    a {
      &.current,
      &:hover {
        ${tw`text-black bg-green-500 rounded-lg -translate-y-1 scale-110`}
      }
      ${tw`block font-bold tracking-wide text-lg uppercase p-2`}
      ${tw`transition ease-in-out duration-500 transform`}
    }
  }
`;

const TopBar = () => {
  return (
    <div tw="bg-brown-900  p-4">
      <div tw="container mx-auto w-full bg-brown-900 flex">
        <div tw="text-white flex flex-col md:flex-row">
          <div>
            <span tw="font-bold">Telefon:</span> 0721 123 456
          </div>
          <div>
            <span tw="font-bold md:ml-2">Email:</span> flavius@arad-irigatii.ro
          </div>
        </div>
      </div>
    </div>
  );
};

const Menubar = () => {
  const { show } = useModalState();
  return (
    <div tw="container mx-auto pt-2">
      <div tw="flex justify-between items-center">
        <div>
          <Image
            src="/assets/images/logo-arad-irigatii.png"
            alt="Picture of the author"
            width={250}
            height={100}
          />
        </div>
        <div>
          <Menu>
            <li>
              <a href="#" className="current">
                Acasa
              </a>
            </li>
            <li>
              <a href="#">Despre noi</a>
            </li>
            <li>
              <a href="#">Servicii</a>
            </li>
          </Menu>
        </div>
        <div>
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                show();
              }}
              tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white block border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 border-black inset-1 font-bold rounded-lg"
            >
              Cere o oferta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div tw="container mx-auto mt-24">
      <div>
        <h1 tw="text-5xl font-bold">
          Clientii nostri
          <br />
          sunt foarte multumiti.
        </h1>
        <div className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Praesent nisi urna, mattis sit amet gravida in, tincidunt a ex.
        </div>
        <div className="mt-4">
          <div>
            <a
              href="#"
              tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 border-black inset-1 font-bold rounded-lg"
            >
              Vezi portofoliul nostru
            </a>
          </div>
        </div>
        <div tw="mt-8 flex">
          <div tw="max-w-lg">
            <div tw="font-bold text-xl">Cine suntem?</div>
            <div tw="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisi urna, mattis sit amet gravida in, tincidunt a ex. Donec
              convallis mi vitae lacus gravida fringilla.
            </div>
            <div tw="mt-2 uppercase text-green-500">
              <a href="#">Citeste mai mult</a>
            </div>
          </div>
          <div tw="max-w-lg">
            <div tw="font-bold text-xl">Ce facem?</div>
            <div tw="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              nisi urna, mattis sit amet gravida in, tincidunt a ex. Donec
              convallis mi vitae lacus gravida fringilla.
            </div>
            <div tw="mt-2 uppercase text-green-500">
              <a href="#">Citeste mai mult</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledQuote = styled.div`
  .contact-box {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  }
`;

const TypeBtn = styled.div`
  ${tw`cursor-pointer py-4 border-transparent flex items-center text-gray-500`}
  transition: 200ms;
  ${(props) => props.active && tw`border-b-2 border-green-600 text-green-600`}

  .undraw_male_avatar_323b_svg__fill-current {
    ${tw`fill-current`}
    transition: 200ms;
  }
`;

const Input = styled.input`
  ${tw`border border-gray-300 px-2 py-4 w-full rounded-xl`}
`;

const QuoteModalRoot = styled.div`
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const QuoteModal = () => {
  const { state: show, hide: close } = useModalState();
  return (
    <QuoteModalRoot>
      <div
        className={classNames(
          'main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated faster',
          { 'hidden fadeOut': !show },
          { fadeIn: show }
        )}
        style={{ background: 'rgba(0,0,0,.7)' }}
      >
        <div className=" modal-container bg-transparent w-11/12 md:max-w-xl mx-auto rounded  z-50 overflow-y-auto">
          <div className="modal-content py-1 text-left px-6">
            {/* <!--Title--> */}
            <div className="flex justify-between items-center pb-1">
              <p className="text-2xl font-bold">&nbsp;</p>
              <div
                className="modal-close cursor-pointer z-50"
                onClick={(e) => {
                  close();
                }}
              >
                <svg
                  className="fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>
            {/* <!--Body--> */}
            <div className="mt-2">
              <Quote slim />
            </div>
          </div>
        </div>
      </div>
    </QuoteModalRoot>
  );
};

const Quote = ({ slim = false }) => {
  const [type, setType] = useState('companie');
  return (
    <StyledQuote
      tw="relative"
      className={classNames({
        'mt-96 pt-32 pb-16': !slim,
      })}
    >
      <svg
        tw="absolute bottom-0 left-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 2051 862"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2050.28 465.647C2028.12 465.53 1534.72 460.366 1025.53 233.15C504.5 0.649902 0 0.649902 0 0.649902V862H2050.28V465.647Z"
          fill="#F4F4F4"
        ></path>
      </svg>
      <div tw="flex items-center justify-center max-w-6xl mx-auto">
        {!slim && (
          <div tw="pr-6">
            <Gardening width="12rem" height="auto" />
          </div>
        )}
        <div
          tw="bg-white pb-12 rounded-2xl flex-1 flex flex-col items-center pt-6"
          className="contact-box"
        >
          <div tw="text-2xl font-bold">Contacteaza-ne</div>
          <div tw="mt-2">Raspundem cat mai prompt.</div>
          <div tw="flex shadow rounded px-4">
            <TypeBtn
              active={type == 'companie'}
              tw=""
              onClick={(e) => {
                e.preventDefault();
                setType('companie');
              }}
            >
              <div>
                <CompanyPic width={50} height={50} />
              </div>
              <div>Sunt o companie</div>
            </TypeBtn>
            <TypeBtn
              tw="ml-2"
              active={type == 'persoana'}
              onClick={(e) => {
                e.preventDefault();
                setType('persoana');
              }}
            >
              <div
                className={classNames({
                  'text-transparent': type != 'persoana',
                  'text-green-500': type == 'persoana',
                })}
              >
                <PersonPic width={70} height={50} />
              </div>
              <div>Sunt persoana fizica</div>
            </TypeBtn>
          </div>
          <div tw="w-full px-10 mt-6 grid grid-cols-2 gap-6">
            <div>
              <Input placeholder="nume" />
            </div>
            <div>
              <Input placeholder="prenume" />
            </div>
            <div>
              <Input placeholder="numar de telefon" />
            </div>
            <div>
              <Input placeholder="e-mail (optional)" />
            </div>
            <div tw="col-span-2">
              <label tw="text-gray-500 text-sm">
                <input
                  type="checkbox"
                  tw=" h-5 w-5 text-green-600"
                  className="form-checkbox"
                />{' '}
                <span tw="ml-1">
                  Sunt ca datele sa fie procesate pentru a fi contactat.
                </span>
              </label>
            </div>
            <div tw="col-span-2">
              <Input
                type="submit"
                value="Trimite"
                tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 border-black inset-1 font-bold rounded-lg"
              />
            </div>
          </div>
        </div>
        {!slim && (
          <div tw="pl-6">
            {/* <LawnMower width="12rem" /> */}
            <Sprinkler width="12rem" height="auto" />
          </div>
        )}
      </div>
    </StyledQuote>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <img
          tw="absolute top-0 right-0 -z-10 max-w-6xl"
          src="/assets/images/bg-green.svg"
        />
        <img
          tw="absolute top-0 right-0 -z-10 max-w-2xl"
          src="/assets/images/splash.png"
        />
        <GlobalStyle />
        <TopBar />
        <Menubar />
        <Hero />
        <Quote />
        <QuoteModal />
      </Container>
    </div>
  );
}
