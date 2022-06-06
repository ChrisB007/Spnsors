import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const slugQuery = groq`*[_type == "category"]{
  slug{
  current,
}
} | order(_createdAt desc)`;

export default async function handler(req, res) {
  try {
    const slug = await sanityClient.fetch(slugQuery);
    res.status(200).json({ slug });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
