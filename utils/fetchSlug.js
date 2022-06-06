const fetchSlug = async () => {
  const fetchSlug = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/slugs`,
  );
  const data = await fetchSlug.json();
  return data;
};

export default fetchSlug;
