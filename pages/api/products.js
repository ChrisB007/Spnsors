import { sanityClient } from '../../sanity';
import { groq } from 'next-sanity';

const categoriesQuery = groq`*[_type == "category"]{
  _id,
  _type,
  description,
  title,
  images[]{
    asset{
    _ref
  }
  },
  products[] ->{
    _createdAt,
    title,
     _id,
    body{
    en[]{
      children[]{
        text
      }
    }
  },
defaultProductVariant{
  images[]{
    asset{
    _ref
  }
  },
minimumOrderQuantity,
retailPrice,
title,
yourPrice
},
tags[]
  },
slug{
  current
},

} | order(_createdAt desc)`;

export default async function handler(req, res) {
  try {
    const categories = await sanityClient.fetch(categoriesQuery);
    res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
