import tw from 'twin.macro';

export const TopBar = () => {
  return (
    <div tw="bg-brown-900  p-4">
      <div tw="container mx-auto w-full bg-brown-900 flex">
        <div tw="text-xs md:text-base text-white flex flex-row">
          <div>
            <span tw="font-bold">Telefon:</span> +40 (756) 804 311
          </div>
          <div>
            <span tw="font-bold ml-2">Email:</span> flavius@arad-gardens.ro
          </div>
        </div>
      </div>
    </div>
  );
};
