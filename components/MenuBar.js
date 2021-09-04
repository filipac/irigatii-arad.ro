import Link from '@/components/Link';

import { useModalState } from 'state/contactModal';

import Image from 'next/image';

import tw from 'twin.macro';

import styled from 'styled-components';

import { Menu } from './Menu';

const LogoA = styled.a`
  & > div,
  img {
    // max-width: 300px !important;
    // max-height: 100px !important;
  }
`;

export const Menubar = () => {
  const { show } = useModalState();
  return (
    <div tw="container mx-auto pt-2">
      <div tw="flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/">
            <LogoA>
              <Image
                src="/assets/images/logo-arad-gardens.png"
                alt="Arad Gardens"
                width={300}
                layout={'fixed'}
                height={120}
                quality={100}
              />
            </LogoA>
          </Link>
        </div>
        <div>
          <Menu>
            <li>
              <Link href="/">
                <a>Acasa</a>
              </Link>
            </li>
            <li>
              <Link href="/despre-noi">
                <a>Despre noi</a>
              </Link>
            </li>
            <li>
              <Link href="/servicii">
                <a>Servicii</a>
              </Link>
            </li>
            <li>
              <Link href="/galerie-foto">
                <a>Galerie Foto</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </Menu>
        </div>
        <div tw="w-full text-center px-3 md:w-auto md:px-0">
          <div tw="w-full text-center px-3 md:w-auto md:px-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                show();
              }}
              tw="mt-8 md:mt-0 inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white block border-b-2 border-r-2 hover:scale-110 border-black inset-1 font-bold rounded-lg"
            >
              Cere o oferta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
