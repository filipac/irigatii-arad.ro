import tw from 'twin.macro';

export const Hero = () => {
  return (
    <div tw="container mx-auto mt-24 px-12 lg:px-6 xl:px-0">
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
        <div tw="mt-8 flex flex-col xl:flex-row">
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
          <div tw="max-w-lg mt-2 xl:mt-0">
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
