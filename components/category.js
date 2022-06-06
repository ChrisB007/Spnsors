import { urlFor } from '../sanity';
import Link from 'next/link';

export default function Category({ categories }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 px-2"
    >
      {categories.map((data) => {
        const { _id, images, title, slug } = data;

        const image = images?.map((image) => {
          return image;
        });
        const imageAsset = image.map((image) => {
          return image.asset;
        });
        const [_ref] = imageAsset;
        const url = _ref._ref;
        const { current } = slug;

        return (
          <li key={_id} className="relative ">
            <Link
              href={`/subcategories/${current}`}
              as={`/subcategories/${current}`}
            >
              <a>
                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg lg:max-w-7xl bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <img src={urlFor(url).width(400).height(500).url()} />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for {title}</span>
                  </button>
                </div>
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {title}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
