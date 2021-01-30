import tw from 'twin.macro';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div tw="mt-16 w-full bg-brown-900 py-8 flex justify-center text-white">
      <div>
        Copyright &copy; {year} Irigatii Arad. Freshly backed by{' '}
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
