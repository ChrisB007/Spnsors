import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/solid';

const Hero = () => {
  return (
    <div className="hero-img pt-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black sm:pt-16 lg:pt-8 lg:pb-14 lg:h-[750px] lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-red-500 rounded-full">
                  We&apos;re Fundraising
                </span>
                <span className="ml-4 text-sm">Download our pitch deck</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold merch text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block drop-shadow-md">
                  {' '}
                  <span className="underline underline-offset-4">
                    Merching
                  </span>{' '}
                  Creators, Podcasters and their channels with
                </span>
                <span className="merch block text-white drop-shadow-md">
                  Unique products
                </span>
              </h1>
              <h2 className="mt-3 merch font-bold text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We source Unique products from all over the world for you to
                offer your loyal subscribers.
              </h2>
              <ul className="mt-3 pb-3 pl-3 merch list-disc text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <li>Merch your subscribers with more than {`'T-shirts'`}</li>
                <li>Merch Quality products</li>
                <li>Handcrafted collections</li>
                <li>One of a Kind products</li>
                <li>Find product by your channel categories</li>
                <li>Customize to fit your brand</li>
                <li>Secure exclusive deals</li>
              </ul>
            </div>
          </div>
          <div className="small-hide mt-12 mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <span className="">
              <Image
                className="imginset w-full object-cover lg:absolute rounded-full lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/logme.jpg"
                alt="image"
                width={425}
                height={425}
              />
            </span>
            <span className="">
              <Image
                className="w-full lg:absolute object-cover rounded-full lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/shipper.jpg"
                alt="image"
                width={200}
                height={200}
              />
              <Image
                className="w-full justify-between lg:absolute object-cover rounded-full lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/images/fun.jpg"
                alt="image"
                width={60}
                height={60}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
