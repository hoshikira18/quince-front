import { cache } from 'react';
import { medusaClient } from '@/lib/config';

export const getCollections = cache(async () => {
  return await medusaClient.collections
    .list()
    .then(({ collections, limit, offset, count }) => {
      return collections;
    });
});

export const getCategories = cache(async () => {
  return await medusaClient.productCategories
    .list({
      expand: 'products',
    })

    .then(({ product_categories, limit, offset, count }) => {
      return product_categories;
    });
});

export const getCategoryId = cache(async handle => {
  return await medusaClient.productCategories
    .list({
      handle: handle,
    })
    .then(({ product_categories, limit, offset, count }) => {
      return product_categories[0]?.id;
    });
});

export const getProducts = cache(async (limit, categories) => {
  return await medusaClient.products
    .list(
      {
        limit: limit || 12,
        category_id: categories ? categories : undefined,
      },
      {
        next: {
          tags: ['products'],
        },
      }
    )
    .then(({ products, limit, offset, count }) => {
      return {
        products,
        count,
      };
    });
});
