import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { RadioGroup } from '@headlessui/react';
import { urlFor } from '../sanity';

const reviews = { href: '#', average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Details({ product }) {
  const { title, body, defaultProductVariant, tags } = product;
  const { images, retailPrice, yourPrice } = defaultProductVariant;
  const { en } = body;

  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li key={''}>
                <div className="flex items-center">
                  <a
                    href={''}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {''}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  href={''}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {title}
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {images.map((image) => {
              const { asset } = image;
              const { _ref: imageUrl } = asset;

              return (
                <>
                  <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block mb-4 ">
                    <img
                      src={urlFor(imageUrl)}
                      alt={'product-image'}
                      className="w-full h-full object-center object-cover p-2"
                    />
                  </div>
                </>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h1>
            </div>

            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <div className="bg-slate-200 p-3 rounded-md">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">Buy for: ${yourPrice}</p>
                <p className="text-xl text-gray-900">
                  Sell for: ${retailPrice}
                </p>
                <p className="text-l text-gray-900">{`100 Min order`}</p>
              </div>

              {/*<div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={''}
                        className={classNames(
                          reviews.average > rating
                            ? 'text-gray-900'
                            : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0',
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{''} out of 5 stars</p>
                  <a
                    href={''}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>*/}

              <form className="mt-10">
                <button
                  type="submit"
                  className="mt-10 w-full bg-rose-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {en.map((item) => {
                      const { children } = item;
                      const [text] = children;
                      const { text: desc } = text;

                      return <>{desc}</>;
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights:
                </h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    <li>
                      Our designers work with you to flesh out your graphics
                    </li>
                    <li>Make it unique by engraving your Art/ Graphics</li>
                    <li>
                      Your subscribers/followers can customize even further with
                      a name to personalize.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{`You will be presented with three examples of graphics for you to choose from`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
