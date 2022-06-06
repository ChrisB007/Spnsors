import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function HowItWorks() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-rose-800">
      <div className="h-56 bg-red-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="/images/three.jpg"
          alt="how it works"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-white">
            What we do
          </h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
            Collaborating with Podcasters and Creators to offer custom merches
            on their channels
          </p>
          <p className="mt-3 text-lg text-white">
            Sell custom merchandises that compliments your brand, based on your
            channel&apos;s category.
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                Talk to Us
                <ExternalLinkIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
