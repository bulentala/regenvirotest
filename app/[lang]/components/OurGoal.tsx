import Image from "next/image";
import OurGoalImg from "../../../public/OurGoal.jpg";
import { getDictionary } from "../../../get-dictionary";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
type Locale = /*unresolved*/ any;
export default async function OurGoalPage({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className='relative bg-white'>
      <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
        <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
          <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
            <Image
              fill={true}
              className='absolute inset-0 h-full w-full bg-gray-50 object-cover'
              src={OurGoalImg}
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
              OUR GOAL
            </h1>
            <p className='mt-6 text-xl leading-8 text-gray-700'>
              As Regenviro, our main goal is to increase the performance of
              businesses by providing environmentally friendly, efficient and
              sustainable solutions in the industrial sector. We adopt a unique
              and innovative approach to each project, always prioritizing
              customer satisfaction. Together with our team of experts, we
              optimize industrial processes, increase energy efficiency and help
              reduce operating costs. Our goal is to support businesses to
              remain competitive while also making a positive contribution to
              environmental sustainability.
            </p>
            <div className='mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none'>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                <li className='flex gap-x-3'>
                  <CloudArrowUpIcon
                    className='mt-1 h-5 w-5 flex-none text-indigo-600'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='font-semibold text-gray-900'>
                      In this context,
                    </strong>{" "}
                    we aim to develop long-term solutions for the future and
                    take a leading position in the industry. We aim to provide
                    the best service to our customers by closely following the
                    current developments in the sector and using the latest
                    technologies. We owe our success to our ability to produce
                    solutions tailored to the needs of our customers, to
                    establish relationships based on cooperation and trust, and
                    to our sensitivity to the environment.
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
