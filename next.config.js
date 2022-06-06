/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STOREFRONT_DOMAIN:
      process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
};

module.exports = nextConfig;
