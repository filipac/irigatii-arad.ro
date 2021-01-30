import { useModalState } from 'state/contactModal';
import Image from 'next/image';
import Link from '@/components/Link';
import { Menu } from './Menu';
import tw from 'twin.macro';

export const Menubar = () => {
  const { show } = useModalState();
  return (
    <div tw="container mx-auto pt-2">
      <div tw="flex flex-col md:flex-row justify-between items-center">
        <div>
          <Image
            src="/assets/images/logo-arad-irigatii.png"
            alt="Arad Irigatii"
            width={250}
            layout={'fixed'}
            height={100}
            quality={100}
          />
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
              <Link href="/contact">
                <a>Contact</a>
              </Link>
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
