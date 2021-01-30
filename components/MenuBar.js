import { useModalState } from 'state/contactModal';
import Image from 'next/image';
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
            <li>
              <a href="#">Contact</a>
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
              tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white block border-b-2 border-r-2 hover:scale-110 border-black inset-1 font-bold rounded-lg"
            >
              Cere o oferta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
