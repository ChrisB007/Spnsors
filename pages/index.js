import Head from 'next/head';
import { Hero, HowItWorks, Services, HomeProds } from '../components';
import fetchProducts from '../utils/fetchProducts';

export default function Home({ productsData }) {
  return (
    <div className="homebody relative overflow-hidden">
      <Head>
        <title>Spnsors</title>
        <meta
          name="description"
          content="A better way to create and manage Merch for social media channels"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          {/* Hero section */}
          <Hero />
        </section>

        <section className="flex whatwedo flex-col justify-center text-center">
          {/* How it works and services */}
          <div className="bg-transparent">
            <HowItWorks />
          </div>
          <div>
            <Services />
          </div>
        </section>
        <section className="flex whatwedo flex-col justify-center text-center max-w-7xl mx-auto">
          {/* Products */}
          <div className="bg-white">
            <HomeProds productsData={productsData} />
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const productsData = await fetchProducts();

  return {
    props: {
      productsData,
    },
  };
}
