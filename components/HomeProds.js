import { Category } from './index';
const HomeProds = ({ productsData }) => {
  const { categories } = productsData;

  return (
    <>
      <section className="bg-white">
        <h1 className="text-4xl font-bold mb-2 text-black">
          Merch by category
        </h1>
        <div>
          <Category categories={categories} />
        </div>
      </section>
    </>
  );
};

export default HomeProds;
