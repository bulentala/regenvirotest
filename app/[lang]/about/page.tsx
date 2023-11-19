import ImgLeftSection from "./components/ImgLeftSection";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import Hero from "./components/Hero";
import News from "./components/News";
const AboutPage = () => {
  return (
    <div className=''>
      <Hero title={"ABOUT"} />
      <div className='bg-white px-6 py-20 lg:px-8 '>
        <div className='mx-auto max-w-5xl text-base leading-7 text-gray-700 '>
          <p className='text-base font-semibold leading-7 text-indigo-600'>
            Regenviro
          </p>
          <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            What Does REG mean? 
          </h1>
          <p className='mt-6 text-xl leading-8'>
            REG is an acronym for Recycling of Aggregates. 
          </p>
          <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
            What do we understand from the recycling of Aggregates?
          </h2>

          <div className='mt-10 max-w-5xl'>
            <p className=''>
              We provide wet processing systems to remove contaminants from
              aggregates to increase their value. The process aims to produce
              ASTM C33 or EN12620 complaint aggregates. 
            </p>
            <p className='mt-8'>
              Such aggregates usually come from the following sources: 
            </p>
            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Rejects of crushing plant 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Fine sand from dry rivers or mountain deposits. 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Dredged sand
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Material coming from drilling or tunnel boring operations. 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Material coming from excavations. 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Material coming from demolition buildings and other
                    aggregate-based structures. 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Wet concrete left in the concrete mixers
                  </strong>
                </span>
              </li>
            </ul>
            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              What are the usual contaminants?
            </h2>

            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Silt, Clay, and Soil are the most common group.
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Lightweights: Generally, Wood, Plastics, Lignite, and
                    similar 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Water soluble chemicals: Usually salt. 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Other chemicals that can be treated with the addition of
                    non-corrosive liquids.
                  </strong>
                </span>
              </li>
            </ul>
            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              How do we achieve this? 
            </h2>
            <ul role='list' className='mt-8 max-w-xl space-y-8 text-gray-600'>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Wet Processing Equipment
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Water Recycling Equipment 
                  </strong>
                </span>
              </li>
              <li className='flex gap-x-3'>
                <CheckCircleIcon
                  className='mt-1 h-5 w-5 flex-none text-indigo-600'
                  aria-hidden='true'
                />
                <span>
                  <strong className='font-semibold text-gray-900'>
                    Remote sensing and Monitoring Equipment. 
                  </strong>
                </span>
              </li>
            </ul>

            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              So what are aggregates? 
            </h2>

            <p className='mt-6'>
              Aggregates are the most mined resource in the world. They
              constitute the core material for all construction. They are cheap
              and available in multiple forms. Their availability makes them one
              of the unseen fundamental parts of our modern world. 
            </p>
            <p className='mt-6'>
              More formally, aggregates are all kinds of materials with specific
              minimum compressive strength, size distribution, shape, and
              chemically inert materials. 
            </p>
            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              What is ReG trying to do? 
            </h2>
            <p className='mt-6'>
              Aggregates are relatively inexpensive materials. Market forces the
              manufacturers to go for the lowest-cost production methods
              regardless of overall value for society. Our mission is to make
              the recycling of aggregates the most profitable option for
              manufacturers. The aim is to reduce waste and increase plant
              efficiency while minimal capital expenditure. 
            </p>
            <p className='mt-6'>
              What is built for the recycling of aggregates can also be applied
              in the production of virgin aggregates. Our efforts will allow
              manufacturers to utilize previously wasted resources as
              land-fill. 
            </p>
            <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
              Our Product Line: 
            </h2>
            <p className='mt-6'>
              Our primary product line is sand and rock washers. The aim is to
              remove contaminants from sand and rock particles to produce
              in-spec aggregates from all feed materials. These contaminants
              range from silt and clay to plastics, lignite, wood, and roots to
              water-soluble chemicals. Our core products do a thorough scrubbing
              and washing of equipment. 
            </p>
            <p className='mt-6'>
              Our secondary product line is water recycling equipment. No sand
              or rock washer will perform without enough clean water. There is
              not enough clean water anymore. A solution will only be complete
              with proper water recycling. 
            </p>
            <p className='mt-6'>
              Our final line is our Sentient series cloud-based remote
              monitoring equipment.
            </p>

            {/* <figure className='mt-10 border-l border-indigo-600 pl-9'>
              <blockquote className='font-semibold text-gray-900'>
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote>
              <figcaption className='mt-6 flex gap-x-4'>
                <img
                  className='h-6 w-6 flex-none rounded-full bg-gray-50'
                  src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div className='text-sm leading-6'>
                  <strong className='font-semibold text-gray-900'>
                    Maria Hill
                  </strong>{" "}
                  – Marketing Manager
                </div>
              </figcaption>
            </figure> */}
            {/* <p className='mt-10'>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p> */}
          </div>
          {/* <figure className='mt-16'>
            <img
              className='aspect-video rounded-xl bg-gray-50 object-cover'
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3'
              alt=''
            />
            <figcaption className='mt-4 flex gap-x-2 text-sm leading-6 text-gray-500'>
              <InformationCircleIcon
                className='mt-0.5 h-5 w-5 flex-none text-gray-300'
                aria-hidden='true'
              />
              Faucibus commodo massa rhoncus, volutpat.
            </figcaption>
          </figure> */}
          {/* <div className='mt-16 max-w-2xl'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
              Everything you need to get up and running
            </h2>
            <p className='mt-6'>
              Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
              varius orci dapibus volutpat cras. In amet eu ridiculus leo
              sodales cursus tristique. Tincidunt sed tempus ut viverra
              ridiculus non molestie. Gravida quis fringilla amet eget dui
              tempor dignissim. Facilisis auctor venenatis varius nunc, congue
              erat ac. Cras fermentum convallis quam.
            </p>
            <p className='mt-8'>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div> */}
        </div>
      </div>
      <ImgLeftSection />
      <News />
    </div>
  );
};

export default AboutPage;
