import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const navigation = [
  { name: 'About us', href: '#' },
  { name: 'Creators Bootcamp', href: '#' },
  { name: 'Shop', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const Nav = () => {
  const { data: session } = useSession();
  return (
    <Popover as="header" className="relative">
      <div className="bg-white sticky top-0">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 "
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">Sponsors</span>
                <img className="h-7 w-auto" src="/images/sponsors.png" alt="" />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400  focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-slate-600 hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden mt-2 md:flex md:items-center md:space-x-6">
            {session ? (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="text-base font-medium text-slate-600 hover:text-gray-300"
              >
                Log out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => signIn()}
                className="text-base font-medium text-slate-600 hover:text-gray-300"
              >
                Log in
              </button>
            )}
            <a
              href="#"
              className="inline-flex items-center mb-2 px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
            >
              Request Demo
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-7 w-auto" src="/images/sponsors.png" alt="" />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-4  px-5">
                <a
                  href="#"
                  className="block text-center w-full py-4 px-4 mb-2 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Request Demo
                </a>
              </div>
              <div className="mt-6 px-5">
                {session ? (
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="text-base font-medium text-slate-600 hover:text-gray-300"
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => signIn()}
                    className="text-base font-medium text-slate-600 hover:text-gray-300"
                  >
                    Log in
                  </button>
                )}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Nav;
