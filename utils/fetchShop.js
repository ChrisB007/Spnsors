const domain = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function productData(query, variables = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    Accept: 'application/json',
  };
  try {
    const res = await fetch(domain, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
    return res.json();
  } catch (error) {
    console.error(error);
    throw new Error('Products not fetched');
  }
}

//async function productData(query) {
//  const options = {
//    endpoint: URL,
//    method: 'POST',
//    headers: {
//      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
//      'Content-Type': 'application/json',
//    },
//    body: JSON.stringify({ query }),
//  };

//  try {
//    const data = await fetch(domain, options).then((response) => {
//      return response.json();
//    });

//    return data;
//  } catch (error) {
//    console.log(error);
//    throw new Error('Products not fetched');
//  }
//}

//export async function getProductsInCollection() {
//  const query = `
//  {
//    collectionByHandle(handle: "food") {
//      title
//      products(first: 25) {
//        edges {
//          node {
//            id
//            title
//            handle
//            priceRange {
//              minVariantPrice {
//                amount
//              }
//            }
//            images(first: 5) {
//              edges {
//                node {
//                  originalSrc
//                  altText
//                }
//              }
//            }
//          }
//        }
//      }
//    }
//  }`;

//  const response = await productData(query);

//  const allProducts = response.data.collectionByHandle.products.edges
//    ? response.data.collectionByHandle.products.edges
//    : [];

//  return allProducts;
//}

//export async function getAllProducts() {
//  const gql = String.raw;

//  const query = gql`
//    {
//      products(first: 250) {
//        edges {
//          node {
//            handle
//            id
//          }
//        }
//      }
//    }
//  `;

//  const response = await productData(query);

//  const slugs = response.data?.products.edges
//    ? response.data?.products.edges
//    : [];

//  return slugs;
//}

//export async function getProduct(handle) {
//  const query = `
//  {
//    productByHandle(handle: "${handle}") {
//    	collections(first: 1) {
//      	edges {
//          node {
//            products(first: 5) {
//              edges {
//                node {
//                  priceRange {
//                    minVariantPrice {
//                      amount
//                    }
//                  }
//                  handle
//                  title
//                  id
//                  totalInventory
//                  images(first: 5) {
//                    edges {
//                      node {
//                        originalSrc
//                        altText
//                      }
//                    }
//                  }
//                }
//              }
//            }
//          }
//        }
//    	}
//      id
//      title
//      handle
//      description
//      images(first: 5) {
//        edges {
//          node {
//            originalSrc
//            altText
//          }
//        }
//      }
//      options {
//        name
//        values
//        id
//      }
//      variants(first: 25) {
//        edges {
//          node {
//            selectedOptions {
//              name
//              value
//            }
//            image {
//              originalSrc
//              altText
//            }
//            title
//            id
//            availableForSale
//            priceV2 {
//              amount
//            }
//          }
//        }
//      }
//    }
//  }`;

//  const response = await productData(query);

//  const product = response.data.productByHandle
//    ? response.data.productByHandle
//    : [];

//  return product;
//}

//export async function createCheckout(id, quantity) {
//  const query = `
//    mutation {
//      checkoutCreate(input: {
//        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
//      }) {
//        checkout {
//          id
//          webUrl
//        }
//      }
//    }`;

//  const response = await productData(query);

//  const checkout = response.data.checkoutCreate.checkout
//    ? response.data.checkoutCreate.checkout
//    : [];

//  return checkout;
//}

//export async function updateCheckout(id, lineItems) {
//  const lineItemsObject = lineItems.map((item) => {
//    return `{
//      variantId: "${item.id}",
//      quantity:  ${item.variantQuantity}
//    }`;
//  });

//  const query = `
//  mutation {
//    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
//      checkout {
//        id
//        webUrl
//        lineItems(first: 25) {
//          edges {
//            node {
//              id
//              title
//              quantity
//            }
//          }
//        }
//      }
//    }
//  }`;

//  const response = await productData(query);

//  const checkout = response.data.checkoutLineItemsReplace.checkout
//    ? response.data.checkoutLineItemsReplace.checkout
//    : [];

//  return checkout;
//}

//export async function recursiveCatalog(cursor = '', initialRequest = true) {
//  let data;

//  if (cursor !== '') {
//    const query = `{
//      products(after: "${cursor}", first: 250) {
//        edges {
//          cursor
//          node {
//            id
//            handle
//          }
//        }
//        pageInfo {
//          hasNextPage
//        }
//      }
//    }`;

//    const response = await productData(query);
//    data = response.data.products.edges ? response.data.products.edges : [];

//    if (response.data.products.pageInfo.hasNextPage) {
//      const num = response.data.products.edges.length;
//      const cursor = response.data.products.edges[num - 1].cursor;
//      console.log('Cursor: ', cursor);

//      return data.concat(await recursiveCatalog(cursor));
//    } else {
//      return data;
//    }
//  } else {
//    const query = `{
//      products(first: 250) {
//        edges {
//          cursor
//          node {
//            id
//            handle
//          }
//        }
//        pageInfo {
//          hasNextPage
//        }
//      }
//    }
//    `;

//    const response = await productData(query);
//    data = response.data.products.edges ? response.data.products.edges : [];

//    if (response.data.products.pageInfo.hasNextPage) {
//      const num = response.data.products.edges.length;
//      const cursor = response.data.products.edges[num - 1].cursor;

//      return data.concat(await recursiveCatalog(cursor));
//    } else {
//      return data;
//    }
//  }
//}
