import Link from 'next/link';
import tw from 'twin.macro';

export const Hero = () => {
  return (
    <div tw="container mx-auto mt-12 md:mt-24 px-12 lg:px-6 xl:px-0">
      <div>
        <h1 tw="text-3xl md:text-5xl font-bold">
          Gradina dumneavoastra
          <br />
          pe maini bune!
        </h1>
        <div className="mt-2">
          Va stam la dispozitie cu o gama larga de servicii pentru gradina si
          spatiile dumneavoastra verzi. Avem o expertiza larga incat sa acoperim
          cele mai stricte necesitati.
        </div>
        <div className="mt-4">
          <div>
            <Link href="/servicii">
              <a
                href="/servicii"
                tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 border-black inset-1 font-bold rounded-lg"
              >
                Vezi serviciile noastre
              </a>
            </Link>
          </div>
        </div>
        <div tw="mt-8 flex flex-col xl:flex-row">
          <div tw="max-w-lg">
            <div tw="font-bold text-xl">Cine suntem?</div>
            <div tw="mt-2 text-gray-600">
              Suntem o companie tanara aparuta din pasiunea pentru spatii verzi,
              gradini si gradinarit.
            </div>
            <div tw="mt-2 uppercase text-green-500">
              <Link href="/despre-noi">
                <a>Citeste mai mult</a>
              </Link>
            </div>
          </div>
          <div tw="max-w-lg mt-2 xl:mt-0">
            <div tw="font-bold text-xl">Ce facem?</div>
            <div tw="mt-2 text-gray-600">
              Oferim servicii de proiectare, executie si intretinere de gradini
              si spatii verzi cu toate etapele ce implica acestea.
            </div>
            <div tw="mt-2 uppercase text-green-500">
              <Link href="/servicii">
                <a>Citeste mai mult</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
