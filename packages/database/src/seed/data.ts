import { generateImageUrl } from '@easymart/utils'

export const CATEGORIES_QTY = 10
export const PRODUCTS_PER_CATEGORY = 20
export const PRODUCTS_QTY = CATEGORIES_QTY * PRODUCTS_PER_CATEGORY
export const PRODUCT_IMG_QTY = 4

export const categories = Array.from(
  { length: CATEGORIES_QTY },
  (_item, i) => `Category ${i + 1}`
)

export const categoriesImageUrls = Array.from({ length: CATEGORIES_QTY }, () =>
  generateImageUrl({ width: 18, height: 18, title: 'Category' })
)

export const products = Array.from(
  {
    length: PRODUCTS_QTY,
  },
  (_item, i) => `Product ${i + 1}`
)

export const thumbnailProductImageUrls = Array.from(
  { length: PRODUCTS_QTY },
  () => generateImageUrl({ width: 38, height: 25, title: 'Product' })
)

export const productImageUrls = Array.from(
  { length: PRODUCTS_QTY * PRODUCT_IMG_QTY },
  () => generateImageUrl({ width: 206, height: 154, title: 'Product' })
)
