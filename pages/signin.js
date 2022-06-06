import { signIn, getProviders } from 'next-auth/react';

export default function Login({ providers }) {
  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96 lg:mt-64">
            <div className="flex justify-center">
              <h4 className="mt-6 text-3xl font-bold text-gray-900">
                Creators Access
              </h4>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="flex flex-row justify-center items-center">
                    <div>
                      {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                          <button
                            className="w-full h-10 bg-zinc-100 mb-3 px-4 rounded w-[400px]"
                            onClick={() =>
                              signIn(provider.id, {
                                callbackUrl: `/dashboard`,
                              })
                            }
                          >
                            Sign in with {provider.name}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-contain "
            src="/images/login.jpg"
            alt="login"
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
