import tw from 'twin.macro';
import Telephone from '@/components/svg/telephone.svg';
import Email from '@/components/svg/email.svg';
import Fb from '@/components/svg/facebook-logo.svg';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div tw="mt-20 md:mt-40 lg:mt-80 relative">
      <svg
        tw="hidden md:block absolute -z-10 bottom-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 388"
        fill="none"
      >
        <path
          d="M1440 992.354L0 992.354L8.24033e-05 49.7697C8.24033e-05 49.7697 400 -62.2119 720 49.7698C1040 161.751 1440 49.7698 1440 49.7698L1440 992.354Z"
          fill="#F4F4F4"
        ></path>
      </svg>
      <div tw="flex flex-col md:flex-row md:items-center md:justify-between max-w-fit md:max-w-5xl mx-auto pb-12 px-12 lg:px-0">
        <div className="flex items-center">
          <div>
            <Telephone width="32" />
          </div>
          <div tw="ml-4">
            <p tw="font-bold">Suna-ne</p>
            <span>+40 (756) 804 311</span>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <div>
            <Email width="32" />
          </div>
          <div tw="ml-4">
            <p tw="font-bold">Trimite-ne mail</p>
            <span>flavius@arad-irigatii.ro</span>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <div>
            <Fb width="32" height="32" />
          </div>
          <div tw="ml-4">
            <p tw="font-bold">Facebook</p>
            <span>
              <a
                tw="cursor-pointer underline"
                href="https://www.facebook.com/irigatiiarad"
                target="_blank"
              >
                facebook.com/irigatiiarad
              </a>
            </span>
          </div>
        </div>
      </div>
      <div tw="w-full bg-brown-900 py-8 px-8 md:px-0 flex flex-col text-center items-center justify-center text-white">
        <div>Copyright &copy; {year} Irigatii Arad.</div>
        <div>
          Freshly backed by{' '}
          <a
            href="https://pacurar.net"
            target="_blank"
            tw="underline text-green-400"
          >
            Filip Pacurar - freelancer Arad.
          </a>
        </div>
      </div>
    </div>
  );
};
