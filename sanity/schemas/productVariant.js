export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Weight in pounds',
      name: 'poundWeight',
      type: 'number',
    },
    {
      title: 'You Pay',
      description: 'The price you pay for each product',
      name: 'yourPrice',
      type: 'number',
    },
    {
      title: 'Suggested Retail Price',
      description: 'Suggested price you can charge for this product',
      name: 'retailPrice',
      type: 'number',
    },
    {
      title: 'Minimum Order Quantity',
      description: 'Minimum quantity you can order for this product',
      name: 'minimumOrderQuantity',
      type: 'number',
    },
    {
      title: 'Taxable',
      name: 'taxable',
      type: 'boolean',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
