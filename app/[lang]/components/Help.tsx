import { getDictionary } from "../../../get-dictionary";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import HelpImg from "../../../public/Help.jpg";
import Image from "next/image";
type Locale = /*unresolved*/ any;
export default async function HelpPage({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className='relative bg-gray-50 '>
      <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
        <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
          <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
            <Image
              className='absolute inset-0 h-full w-full bg-gray-50 object-cover'
              fill={true}
              src={HelpImg}
              alt=''
            />
          </div>
        </div>
        <div className='px-6 lg:contents'>
          <div className='mx-auto max-w-2xl pb-6 pt-6 sm:pb-6 sm:pt-6 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-6 xl:w-1/2'>
            <p className='text-base font-semibold leading-7 text-indigo-600'>
              Regenviro
            </p>
            <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              We Are Here To Help!
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-700'>
              We are in touch to offer you the most suitable solutions and to
              talk about cooperation opportunities. Our team of experts is here
              to help you improve your industrial processes and contribute to
              sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
