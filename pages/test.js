import Link from 'next/link';
import { sanityClient } from '../../sanity';
import { urlFor } from '../../sanity';
import { productData } from '../../utils/fetchShop';

const Slugs = ({ products }) => {
  //  const [products] = data;
  //  const { products: innerProduct } = products;
  return (
    <>
      <div>Hello</div>
      {/*<ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto px-4 py-6 sm:px-6  lg:px-8 lg:py-16"
      >
        {innerProduct.map((product) => {
          const { _id, body, defaultProductVariant, title } = product;
          const [images] = defaultProductVariant.images;
          const {
            minimumOrderQuantity: minOrder,
            retailPrice,
            yourPrice,
          } = defaultProductVariant;
          const { asset } = images;
          const { _ref: prodImage } = asset;
          const [children] = body.en;

          const texts = children.children;

          const desc = texts.map((text) => {
            return text.text;
          });

          const wholesalePrice = (yourPrice * 10) / 100 + yourPrice;
          const retPrice = (retailPrice * 20) / 100 + retailPrice;

          return (
            <>
              <Link href={`../products/${_id}`}>
                <a>
                  <li
                    key={`${_id}`}
                    className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                  >
                    <div className="flex-1 flex flex-col p-8">
                      <img src={urlFor(prodImage)} />
                      <h3 className="mt-6 text-gray-900 text-sm font-medium">
                        {title}
                      </h3>
                      <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm truncate ...">
                          {desc[0]}
                        </dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                          <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            Min order: {minOrder}
                          </span>
                          <p>Get etails</p>
                        </dd>
                      </dl>
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-1 flex-1 flex">
                          <p className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">{`You pay: $${wholesalePrice.toFixed(
                            2,
                          )}`}</p>
                        </div>
                        <div className="-ml-px w-1 flex-1 flex">
                          <p className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">{`Sell for: $${retPrice.toFixed(
                            2,
                          )}`}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </a>
              </Link>
            </>
          );
        })}
      </ul>*/}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: 'outdoors',
        },
        params: {
          slug: 'food',
        },
        params: {
          slug: 'kids',
        },
        params: {
          slug: 'beauty',
        },
        params: {
          slug: 'gaming',
        },
        params: {
          slug: 'travel',
        },
        params: {
          slug: 'learning',
        },
        params: {
          slug: 'sports',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.query;
  const { data } = await productData(prodQuery);

  //  const slugQuery = `*[_type == "category" && slug.current == "${slug}"]{
  //  _id,
  //  _type,
  //  description,
  //  title,
  //  images[]{
  //    asset{
  //    _ref
  //  }
  //  },
  //  products[] ->{
  //    _createdAt,
  //    title,
  //    _id,
  //    body{
  //    en[]{
  //      children[]{
  //        text
  //      }
  //    }
  //  },
  //defaultProductVariant{
  //  images[]{
  //    asset{
  //    _ref
  //  }
  //  },
  //minimumOrderQuantity,
  //retailPrice,
  //title,
  //yourPrice
  //},
  //tags[]
  //  },
  //slug{
  //  current
  //},

  //} | order(_createdAt desc)`;

  //  const data = await sanityClient.fetch(slugQuery, { slug });

  return {
    props: { products: data.products },
  };
}

const gql = String.raw;

const prodQuery = gql`
  query Products {
    collectionByHandle(handle: "food") {
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Slugs;
