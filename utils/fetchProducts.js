const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
  );
  const data = await response.json();
  return data;
};

export default fetchProducts;
