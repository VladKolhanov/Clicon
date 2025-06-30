import { drizzle } from 'drizzle-orm/node-postgres'
import { reset, seed } from 'drizzle-seed'

import {
  categories,
  CATEGORIES_QTY,
  categoriesImageUrls,
  PRODUCT_IMG_QTY,
  productImageUrls,
  products,
  PRODUCTS_PER_CATEGORY,
  thumbnailProductImageUrls,
} from './data'
import { ENV } from '../env'
import * as schema from '../schema'

async function main() {
  const db = drizzle(ENV.DATABASE_URL)
  await reset(db, schema)
  await seed(db, schema).refine((f) => ({
    categories: {
      count: CATEGORIES_QTY,
      columns: {
        title: f.valuesFromArray({ values: categories, isUnique: true }),
        slug: f.uuid(),
        imageUrl: f.valuesFromArray({
          values: categoriesImageUrls,
          isUnique: true,
        }),
      },
      with: {
        products: [{ weight: 1, count: PRODUCTS_PER_CATEGORY }],
      },
    },

    products: {
      columns: {
        title: f.valuesFromArray({ values: products, isUnique: true }),
        slug: f.uuid(),
        price: f.number({ minValue: 5, maxValue: 125, precision: 100 }),
        discount: f.weightedRandom([
          { weight: 0.1, value: f.int({ minValue: 30, maxValue: 60 }) },
          { weight: 0.2, value: f.int({ minValue: 10, maxValue: 20 }) },
          { weight: 0.7, value: f.default({ defaultValue: 0 }) },
        ]),
        inStock: f.weightedRandom([
          { weight: 0.8, value: f.default({ defaultValue: true }) },
          { weight: 0.2, value: f.default({ defaultValue: false }) },
        ]),
        thumbnailUrl: f.valuesFromArray({
          values: thumbnailProductImageUrls,
          isUnique: true,
        }),
        imageUrls: f.valuesFromArray({
          values: productImageUrls,
          isUnique: true,
          arraySize: PRODUCT_IMG_QTY,
        }),
      },
    },
  }))
}

void main()
