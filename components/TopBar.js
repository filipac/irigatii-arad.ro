import tw from 'twin.macro';

export const TopBar = () => {
  return (
    <div tw="bg-brown-900  p-4">
      <div tw="container mx-auto w-full bg-brown-900 flex">
        <div tw="text-white flex flex-row">
          <div>
            <span tw="font-bold">Telefon:</span> 0721 123 456
          </div>
          <div>
            <span tw="font-bold ml-2">Email:</span> flavius@arad-irigatii.ro
          </div>
        </div>
      </div>
    </div>
  );
};
