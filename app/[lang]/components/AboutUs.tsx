import Image from "next/image";
import { RecyclingIcon, MiningIcon, GemStoneIcon } from "../components/icons";
import { getDictionary } from "../../../get-dictionary";
import { IncomingMessage } from "http";
import AboutUsImg from "../../../public/AboutUsImg.avif";
type Props = {
  lang: "tr" | "fr" | "en";
};

type Dictionary = {
  homePage: {
    aboutUs: {
      title: string;
      description: string;
      p1: {
        p1Strong: string;
      };
    };
  };
};
export default async function Example({ lang }: Props): Promise<JSX.Element> {
  if (lang !== "tr" && lang !== "fr" && lang !== "en") {
    throw new Error(`Invalid lang value: ${lang}`);
  }
  const dictionary = await getDictionary(lang);
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
        <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
          <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
            <Image
              className='absolute inset-0 h-full w-full bg-gray-50 object-cover'
              src={AboutUsImg}
              alt=''
            />
          </div>
        </div>
        <div className='px-6 lg:contents'>
          <div className='mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2'>
            <p className='text-base font-semibold leading-7 text-indigo-600'>
              Regenviro
            </p>
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              {dictionary.homePage.aboutUs.title}
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-700'>
              {dictionary.homePage.aboutUs.description}
            </p>
            <div className='mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <RecyclingIcon
                    className='mt-1 h-5 w-5 flex-none text-green-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      {dictionary.homePage.aboutUs.p1.p1Strong}
                    </strong>
                    {dictionary.homePage.aboutUs.p1.p1Normal}
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <MiningIcon
                    className='mt-1 h-5 w-5 flex-none text-yellow-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      {dictionary.homePage.aboutUs.p2.p2Strong}
                    </strong>
                    {dictionary.homePage.aboutUs.p2.p2Normal}
                  </span>
                </li>
                <li className='flex gap-x-3'>
                  <GemStoneIcon
                    className='mt-1 h-7 w-7 flex-none text-red-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      {dictionary.homePage.aboutUs.p3.p3Strong}
                    </strong>{" "}
                    {dictionary.homePage.aboutUs.p3.p3Normal}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
