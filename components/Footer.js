import tw from 'twin.macro';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div tw="mt-16 w-full bg-brown-900 py-8 px-8 md:px-0 flex flex-col text-center items-center justify-center text-white">
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
  );
};
