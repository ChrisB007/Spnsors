import { Details } from '../../components';
import { sanityClient } from '../../sanity';

const productDetails = ({ productID }) => {
  const { _id } = productID;

  return (
    <div>
      {productID.map((product) => {
        const { _id, body, defaultProductVariant, title } = product;
        const { images, retailPrice, yourPrice } = defaultProductVariant;
        const { asset } = images[0];
        const { _ref } = asset;
        return (
          <>
            <Details product={product} />
          </>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { _id } = context.query;
  const idQuery = `*[_type == "product" && _id == "${_id}"]{
  ...
  } | order(_createdAt desc)`;
  const productID = await sanityClient.fetch(idQuery, { _id });

  return {
    props: { productID },
  };
}

export default productDetails;
