import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

export default function Product({ title, body, asset }) {
  const { _ref: prodImage } = asset;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 py-6 sm:px-6  lg:px-8 lg:py-16"
    >
      <li
        key={title}
        className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 lg:w-[20rem]"
      ></li>
    </ul>
  );
}
